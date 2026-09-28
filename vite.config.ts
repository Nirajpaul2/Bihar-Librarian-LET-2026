import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Vite Dev Server Analytics Middleware Plugin
function analyticsDevPlugin(): Plugin {
  const dbPath = path.resolve(__dirname, 'analytics_db.json');
  const paymentsPath = path.resolve(__dirname, 'payments_db.json');

  const loadData = (filePath: string, fallback: any) => {
    try {
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      }
    } catch {}
    return fallback;
  };

  const saveData = (filePath: string, data: any) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch {}
  };

  return {
    name: 'library-analytics-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';

        // 1. GET /api/analytics-summary
        if (req.method === 'GET' && url.startsWith('/api/analytics-summary')) {
          const analytics = loadData(dbPath, { sessions: {}, screen_counts: {}, exit_counts: {} });
          const payments = loadData(paymentsPath, []);

          const sessions: Record<string, any> = analytics.sessions || {};
          const screenCounts: Record<string, number> = analytics.screen_counts || {};
          const exitCounts: Record<string, number> = analytics.exit_counts || {};

          const totalSessions = Object.keys(sessions).length;
          const visitorsSet = new Set(
            Object.values(sessions).map((s: any) => s.visitor_id).filter(Boolean)
          );
          const uniqueVisitors = visitorsSet.size || totalSessions;

          const durations: number[] = Object.values(sessions)
            .map((s: any) => s.duration_seconds || 0)
            .filter((d: number) => d > 0);
          const avgDuration = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;

          const paywallViews = Object.values(sessions).filter((s: any) => s.paywall_viewed).length;
          const paidCount = Array.isArray(payments) ? payments.length : 0;
          const convRate = totalSessions > 0 ? Math.round((paidCount / totalSessions) * 100) : 0;

          const summary = {
            success: true,
            total_visitors: uniqueVisitors,
            total_sessions: totalSessions,
            avg_duration_seconds: avgDuration,
            screen_counts: screenCounts,
            exit_counts: exitCounts,
            funnel: {
              total_sessions: totalSessions,
              paywall_views: paywallViews,
              paid_count: paidCount,
              conversion_rate: convRate,
            },
            recent_sessions: Object.values(sessions).slice(-10).reverse(),
          };

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(summary));
          return;
        }

        // 2. POST /api/track-event
        if (req.method === 'POST' && url === '/api/track-event') {
          let body = '';
          req.on('data', chunk => (body += chunk));
          req.on('end', () => {
            try {
              const payload = JSON.parse(body || '{}');
              const data = loadData(dbPath, { sessions: {}, screen_counts: {}, exit_counts: {} });
              const sessId = payload.session_id || 'lib_anon_session';
              const eventType = payload.event || 'screen_view';
              const screenTitle = payload.screen_title || 'Home (Exam Blueprint & Hero)';

              if (!data.sessions[sessId]) {
                data.sessions[sessId] = {
                  session_id: sessId,
                  visitor_id: payload.visitor_id || 'lib_anon',
                  start_time: payload.timestamp || new Date().toISOString(),
                  device: payload.device || 'Desktop',
                  referrer: payload.referrer || 'Direct',
                  screens_visited: [],
                  last_screen: screenTitle,
                  exit_screen: screenTitle,
                  duration_seconds: 0,
                  paywall_viewed: false,
                };
              }

              const sess = data.sessions[sessId];
              if (!sess.screens_visited.includes(screenTitle)) {
                sess.screens_visited.push(screenTitle);
              }
              sess.last_screen = screenTitle;
              sess.exit_screen = screenTitle;

              if (eventType === 'paywall_view') {
                sess.paywall_viewed = true;
              }

              if (eventType === 'screen_view' || eventType === 'session_start') {
                data.screen_counts[screenTitle] = (data.screen_counts[screenTitle] || 0) + 1;
              }

              saveData(dbPath, data);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // 3. POST /api/track-exit
        if (req.method === 'POST' && url === '/api/track-exit') {
          let body = '';
          req.on('data', chunk => (body += chunk));
          req.on('end', () => {
            try {
              const payload = JSON.parse(body || '{}');
              const data = loadData(dbPath, { sessions: {}, screen_counts: {}, exit_counts: {} });
              const sessId = payload.session_id;
              const exitScreen = payload.exit_screen_title || 'Home (Exam Blueprint & Hero)';
              const duration = parseInt(payload.duration_seconds || '0', 10);

              if (sessId && data.sessions[sessId]) {
                data.sessions[sessId].exit_screen = exitScreen;
                data.sessions[sessId].duration_seconds = duration;
              }

              data.exit_counts[exitScreen] = (data.exit_counts[exitScreen] || 0) + 1;
              saveData(dbPath, data);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // 4. POST /api/reset-analytics
        if (req.method === 'POST' && url === '/api/reset-analytics') {
          saveData(dbPath, { sessions: {}, screen_counts: {}, exit_counts: {} });
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, message: 'Analytics reset successfully.' }));
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), analyticsDevPlugin()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
