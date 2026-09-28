/**
 * Bihar Librarian LET 2026 — Visitor & Drop-Off Telemetry Engine
 * Completely isolated from ComputerTeacher and other projects.
 *
 * Tracks:
 *  - Anonymous Unique Visitors & Candidate Sessions
 *  - Route & Screen Journey (Home, Syllabus, Practice, Mock Tests)
 *  - Time spent per screen & candidate session depth
 *  - Drop-off / Exit Screens (exact screens where candidates close or leave the site)
 *  - Freemium to ₹9 Unlock Conversion Funnel (Visitors -> Paywall Viewed -> Enrolled)
 *  - Dual Mode: Server API (/api/track-event, /api/track-exit) + Zero-Backend LocalStorage Fallback
 */

const STORAGE_VISITOR_KEY = 'library_visitor_id';
const STORAGE_SESSION_KEY = 'library_session_id';
const STORAGE_LOCAL_ANALYTICS_KEY = 'library_local_analytics';

export interface AnalyticsSummary {
  success: boolean;
  total_visitors: number;
  total_sessions: number;
  avg_duration_seconds: number;
  screen_counts: Record<string, number>;
  exit_counts: Record<string, number>;
  funnel: {
    total_sessions: number;
    paywall_views: number;
    paid_count: number;
    conversion_rate: number;
  };
  recent_sessions?: Array<{
    session_id: string;
    visitor_id: string;
    device: string;
    referrer: string;
    screens_visited: string[];
    exit_screen: string;
    duration_seconds: number;
    paywall_viewed: boolean;
  }>;
}

// 1. Identify Visitor & Session (Isolated Keys)
function getVisitorId(): string {
  try {
    let vid = localStorage.getItem(STORAGE_VISITOR_KEY);
    if (!vid) {
      vid = 'lib_vis_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      localStorage.setItem(STORAGE_VISITOR_KEY, vid);
    }
    return vid;
  } catch {
    return 'lib_vis_anon';
  }
}

function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem(STORAGE_SESSION_KEY);
    if (!sid) {
      sid = 'lib_sess_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      sessionStorage.setItem(STORAGE_SESSION_KEY, sid);
    }
    return sid;
  } catch {
    return 'lib_sess_anon';
  }
}

function getDeviceType(): string {
  if (typeof window === 'undefined') return 'Desktop';
  const width = window.innerWidth;
  if (width <= 640) return 'Mobile';
  if (width <= 1024) return 'Tablet';
  return 'Desktop';
}

// 2. Map LibraryBPSC Routes to Descriptive Screen Titles
export function resolveScreenTitle(pathname: string, search = ''): string {
  if (pathname === '/') return 'Home (Exam Blueprint & Hero)';

  if (pathname.startsWith('/syllabus')) {
    if (search.includes('tab=cheatsheet')) return 'Quick Revision Cheat Sheets (DDC, CC, Acts)';
    if (search.includes('tab=studyplan')) return '30-Day Master Study Plan';
    if (search.includes('tab=weightage')) return 'Topic Weightage Analysis (100M Core)';
    return 'Syllabus Overview & Framework';
  }

  if (pathname === '/practice') {
    if (search.includes('subject=library-science')) return 'Practice: Library Science (Core 100M)';
    if (search.includes('subject=bihar-gk')) return 'Practice: Bihar GK';
    if (search.includes('subject=general-knowledge')) return 'Practice: General Knowledge';
    if (search.includes('subject=reasoning')) return 'Practice: Reasoning Ability';
    if (search.includes('subject=computer')) return 'Practice: Computer Awareness';
    return 'Practice Hub (Topic Quizzes)';
  }

  if (pathname.startsWith('/practice/session')) return 'Active Practice Quiz Session';
  if (pathname.startsWith('/mock-test/')) return 'Active 150Q Mock Test Window';
  if (pathname === '/mock-test') return '150Q Mock Test Simulator Hub';
  if (pathname === '/current-affairs') return 'Current Affairs & Library Updates';
  if (pathname === '/bookmarks') return 'Saved Tricky Questions';

  return pathname;
}

// Telemetry State
const visitorId = getVisitorId();
const sessionId = getSessionId();
const deviceType = getDeviceType();
const referrer = typeof document !== 'undefined' && document.referrer ? new URL(document.referrer).hostname : 'Direct / WhatsApp';
const sessionStartTime = Date.now();

let currentScreenTitle = 'Home (Exam Blueprint & Hero)';
let screenEnterTime = Date.now();
const screensVisited: string[] = ['Home (Exam Blueprint & Hero)'];
let exitLogged = false;
let isInitialized = false;

// 3. Local Fallback Database (in localStorage for 100% offline & static hosting resilience)
function recordLocalEvent(event: string, screenTitle: string, extra: Record<string, any> = {}) {
  try {
    const raw = localStorage.getItem(STORAGE_LOCAL_ANALYTICS_KEY);
    const localData = raw
      ? JSON.parse(raw)
      : { screens: {}, exits: {}, total_visits: 0, paywall_views: 0 };

    if (event === 'screen_view' || event === 'session_start') {
      localData.screens[screenTitle] = (localData.screens[screenTitle] || 0) + 1;
      if (event === 'session_start') {
        localData.total_visits = (localData.total_visits || 0) + 1;
      }
    } else if (event === 'screen_exit') {
      localData.exits[screenTitle] = (localData.exits[screenTitle] || 0) + 1;
    } else if (event === 'paywall_view') {
      localData.paywall_views = (localData.paywall_views || 0) + 1;
    }

    localStorage.setItem(STORAGE_LOCAL_ANALYTICS_KEY, JSON.stringify(localData));
  } catch (e) {
    // LocalStorage quota or private mode
  }
}

// 4. Send Event to Backend API (/api/track-event)
async function sendEvent(eventType: string, screenTitle: string, extraData: Record<string, any> = {}) {
  recordLocalEvent(eventType, screenTitle, extraData);

  const payload = {
    event: eventType,
    session_id: sessionId,
    visitor_id: visitorId,
    screen_title: screenTitle,
    device: deviceType,
    referrer: referrer,
    timestamp: new Date().toISOString(),
    data: extraData,
  };

  try {
    fetch('/api/track-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // Backend not running, local recording already done
    });
  } catch (e) {}
}

// 5. Send Exit / Drop-off Beacon on Tab Close
export function sendExitBeacon() {
  if (exitLogged) return;
  exitLogged = true;

  const durationSeconds = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
  recordLocalEvent('screen_exit', currentScreenTitle);

  const exitPayload = {
    session_id: sessionId,
    visitor_id: visitorId,
    exit_screen_title: currentScreenTitle,
    duration_seconds: durationSeconds,
    screens_visited: screensVisited,
    timestamp: new Date().toISOString(),
  };

  try {
    const blob = new Blob([JSON.stringify(exitPayload)], { type: 'application/json' });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-exit', blob);
    } else {
      fetch('/api/track-exit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exitPayload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch (e) {}
}

// 6. Track Route Change
export function trackScreenChange(pathname: string, search = '') {
  const newScreenTitle = resolveScreenTitle(pathname, search);
  if (newScreenTitle === currentScreenTitle && isInitialized) return;

  const prevScreenTitle = currentScreenTitle;
  const timeSpent = Math.round((Date.now() - screenEnterTime) / 1000);

  if (!screensVisited.includes(newScreenTitle)) {
    screensVisited.push(newScreenTitle);
  }

  currentScreenTitle = newScreenTitle;
  screenEnterTime = Date.now();
  exitLogged = false;

  sendEvent('screen_view', newScreenTitle, {
    prev_screen: prevScreenTitle,
    time_spent_on_prev: timeSpent,
  });
}

// 7. Track User Action / Intent
export function trackAction(actionName: string, details: Record<string, any> = {}) {
  sendEvent('interaction', currentScreenTitle, {
    action: actionName,
    ...details,
  });
}

// 8. Track Paywall Modal Views (Intent)
export function trackPaywallView(contextText?: string) {
  sendEvent('paywall_view', '₹9 Complete LET Paywall Modal', {
    context: contextText || '',
  });
}

// 9. Initialize Telemetry Listeners
export function initTelemetry() {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  // Session start
  sendEvent('session_start', currentScreenTitle);

  // Exit & drop-off detection
  window.addEventListener('beforeunload', sendExitBeacon);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sendExitBeacon();
    } else {
      exitLogged = false;
      screenEnterTime = Date.now();
    }
  });
}

// 10. Fetch Analytics Summary (Combines Server + LocalStorage)
export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  try {
    const res = await fetch('/api/analytics-summary');
    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        return data;
      }
    }
  } catch (e) {
    // Server not reachable, fall back to localStorage
  }

  // Local fallback analytics calculation
  try {
    const raw = localStorage.getItem(STORAGE_LOCAL_ANALYTICS_KEY);
    const local = raw
      ? JSON.parse(raw)
      : { screens: {}, exits: {}, total_visits: 1, paywall_views: 0 };

    const isUnlocked = localStorage.getItem('bpsc_librarian_full_access_v1') === 'true';
    const totalSessions = Math.max(1, local.total_visits || 1);
    const paidCount = isUnlocked ? 1 : 0;
    const convRate = totalSessions > 0 ? Math.round((paidCount / totalSessions) * 100) : 0;

    return {
      success: true,
      total_visitors: 1,
      total_sessions: totalSessions,
      avg_duration_seconds: Math.max(30, Math.round((Date.now() - sessionStartTime) / 1000)),
      screen_counts: local.screens || { 'Home (Exam Blueprint & Hero)': 1 },
      exit_counts: local.exits || {},
      funnel: {
        total_sessions: totalSessions,
        paywall_views: local.paywall_views || (local.screens['₹9 Complete LET Paywall Modal'] || 0),
        paid_count: paidCount,
        conversion_rate: convRate,
      },
    };
  } catch {
    return {
      success: true,
      total_visitors: 1,
      total_sessions: 1,
      avg_duration_seconds: 45,
      screen_counts: { 'Home (Exam Blueprint & Hero)': 1 },
      exit_counts: {},
      funnel: {
        total_sessions: 1,
        paywall_views: 0,
        paid_count: 0,
        conversion_rate: 0,
      },
    };
  }
}

// 11. Reset Analytics
export async function resetAnalytics(): Promise<boolean> {
  try {
    await fetch('/api/reset-analytics', { method: 'POST' });
  } catch (e) {}

  try {
    localStorage.removeItem(STORAGE_LOCAL_ANALYTICS_KEY);
  } catch (e) {}

  return true;
}
