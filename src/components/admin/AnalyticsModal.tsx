import { useState, useEffect } from 'react';
import {
  X,
  Users,
  Eye,
  Clock,
  Award,
  ArrowRight,
  TrendingDown,
  RefreshCw,
  Trash2,
  Lock,
  ShieldCheck,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import {
  getAnalyticsSummary,
  resetAnalytics,
  type AnalyticsSummary,
} from '@/utils/telemetry';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AnalyticsSummary | null>(null);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadData();
    }
  }, [isOpen, isAuthenticated]);

  const loadData = async () => {
    setLoading(true);
    try {
      const summary = await getAnalyticsSummary();
      setData(summary);
    } catch (e) {
      console.error('Failed to load analytics:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = passcode.trim().toUpperCase();
    if (clean === 'ADMIN2026' || clean === 'LIBRARIAN2026' || clean === 'ADMIN') {
      setIsAuthenticated(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all visitor and drop-off analytics data?')) {
      await resetAnalytics();
      await loadData();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-800 relative my-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Google Analytics Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                Visitor & Drop-Off Analytics
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Bihar Librarian LET 2026 candidate journey, screen engagement & exit hotspots
              </p>
            </div>
          </div>
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors shrink-0"
            title="Open official Google Analytics Console for G-SYWKVX2FLY"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>GA4: G-SYWKVX2FLY</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Passcode Gate */}
        {!isAuthenticated ? (
          <div className="py-6">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                Admin Passcode Required
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Enter your admin passcode to access live candidate drop-off and conversion telemetry.
              </p>

              <form onSubmit={handleLogin} className="space-y-3">
                <input
                  type="password"
                  value={passcode}
                  onChange={e => {
                    setPasscode(e.target.value);
                    setPassError(false);
                  }}
                  placeholder="Enter Passcode (e.g. ADMIN2026)"
                  className="w-full px-4 py-2.5 text-center text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                  autoFocus
                />

                {passError && (
                  <p className="text-xs text-red-500 font-semibold">
                    ❌ Invalid passcode. Hint: ADMIN2026
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Unlock Analytics Dashboard
                </button>
              </form>
            </div>
          </div>
        ) : loading || !data ? (
          <div className="py-12 text-center text-gray-500 dark:text-gray-400 text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-brand-600" />
            Loading visitor and drop-off metrics...
          </div>
        ) : (
          <div>
            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-3.5 text-center">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Unique Visitors
                </div>
                <div className="text-2xl font-extrabold text-brand-700 dark:text-brand-300">
                  {data.total_visitors}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Tracked Candidates</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-3.5 text-center">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Total Sessions
                </div>
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {data.total_sessions}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Study Visits</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-3.5 text-center">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Avg. Time on Site
                </div>
                <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">
                  {data.avg_duration_seconds > 60
                    ? `${Math.floor(data.avg_duration_seconds / 60)}m ${data.avg_duration_seconds % 60}s`
                    : `${data.avg_duration_seconds}s`}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Engagement Depth</div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-3.5 text-center">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  ₹9 Enrolled Pass
                </div>
                <div className="text-2xl font-extrabold text-green-600 dark:text-green-400">
                  {data.funnel.paid_count}
                </div>
                <div className="text-[10px] text-green-600 dark:text-green-400 font-semibold mt-0.5">
                  {data.funnel.conversion_rate}% Conv.
                </div>
              </div>
            </div>

            {/* 2-Column: Most Visited Screens vs Exit Drop-Off Hotspots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Screen Views Breakdown */}
              <div className="bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-brand-600" />
                    <span>Most Visited Screens</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-semibold">Views</span>
                </div>

                <div className="space-y-3">
                  {Object.entries(data.screen_counts).length === 0 ? (
                    <div className="text-xs text-gray-400 py-3 text-center">No screen views recorded yet.</div>
                  ) : (
                    Object.entries(data.screen_counts)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 6)
                      .map(([screen, count]) => {
                        const maxCount = Math.max(...Object.values(data.screen_counts));
                        const pct = Math.round((count / (maxCount || 1)) * 100);
                        return (
                          <div key={screen} className="text-xs">
                            <div className="flex justify-between font-medium text-gray-700 dark:text-gray-300 mb-1">
                              <span className="truncate pr-2">{screen}</span>
                              <span className="font-bold shrink-0">{count} views</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-brand-600 rounded-full transition-all"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })
                  )}
                </div>
              </div>

              {/* Drop-Off Exit Screens */}
              <div className="bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-bold text-sm text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-rose-600" />
                    <span>Top Exit Screens (Drop-Offs)</span>
                  </div>
                  <span className="text-[11px] text-rose-600 font-semibold">Exits</span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3 leading-snug">
                  Where candidates closed the tab or left the website:
                </p>

                <div className="space-y-3">
                  {Object.entries(data.exit_counts).length === 0 ? (
                    <div className="text-xs text-gray-400 py-3 text-center">
                      No exits recorded yet. (Exit triggers on tab close).
                    </div>
                  ) : (
                    Object.entries(data.exit_counts)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 6)
                      .map(([screen, count]) => {
                        const totalExits = Object.values(data.exit_counts).reduce((a, b) => a + b, 0) || 1;
                        const exitPct = Math.round((count / totalExits) * 100);
                        return (
                          <div key={screen} className="text-xs">
                            <div className="flex justify-between font-medium text-gray-800 dark:text-gray-200 mb-1">
                              <span className="truncate pr-2">{screen}</span>
                              <span className="font-bold text-rose-600 shrink-0">
                                {count} exits ({exitPct}%)
                              </span>
                            </div>
                            <div className="h-1.5 bg-rose-200/60 dark:bg-rose-900/40 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-rose-500 rounded-full transition-all"
                                style={{ width: `${exitPct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })
                  )}
                </div>
              </div>
            </div>

            {/* ₹9 Candidate Conversion Funnel */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-900/50 rounded-2xl p-4 mb-6">
              <div className="font-bold text-sm text-gray-900 dark:text-white mb-3">
                🎯 Candidate Conversion Funnel (Visitors ➔ Paid Pass)
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
                <div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold uppercase">
                    Step 1: All Visitors
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                    {data.funnel.total_sessions}
                  </div>
                  <div className="text-[10px] text-gray-400">100% Top of Funnel</div>
                </div>

                <div className="hidden sm:block text-gray-300 dark:text-gray-700">➔</div>

                <div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold uppercase">
                    Step 2: Paywall Viewed
                  </div>
                  <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">
                    {data.funnel.paywall_views}
                  </div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                    {data.funnel.total_sessions > 0
                      ? Math.round((data.funnel.paywall_views / data.funnel.total_sessions) * 100)
                      : 0}
                    % Purchase Intent
                  </div>
                </div>

                <div className="hidden sm:block text-gray-300 dark:text-gray-700">➔</div>

                <div>
                  <div className="text-[11px] text-green-700 dark:text-green-400 font-semibold uppercase">
                    Step 3: ₹9 Full Pass
                  </div>
                  <div className="text-2xl font-extrabold text-green-600 dark:text-green-400 mt-0.5">
                    {data.funnel.paid_count}
                  </div>
                  <div className="text-[10px] text-green-600 dark:text-green-400 font-semibold">
                    {data.funnel.conversion_rate}% Conversion Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs">
              <span className="text-gray-400 flex items-center gap-1 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                Isolated in <code>analytics_db.json</code> (No external cookies).
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={loadData}
                  className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Live Refresh
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Reset Data
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
