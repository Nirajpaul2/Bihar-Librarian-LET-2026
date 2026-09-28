import type { Question, SubjectKey } from '@/types';

// Helper: shuffle array (Fisher-Yates)
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Get questions filtered by criteria
export function filterQuestions(
  questions: Question[],
  opts: {
    subject?: SubjectKey;
    unit?: string;
    topic?: string;
    ids?: string[];
  }
): Question[] {
  return questions.filter(q => {
    if (opts.ids) return opts.ids.includes(q.id);
    if (opts.topic && q.topic !== opts.topic) return false;
    if (opts.unit && q.unit !== opts.unit) return false;
    if (opts.subject && q.subject !== opts.subject) return false;
    return true;
  });
}

// Pick N random questions from filtered set
export function pickQuestions(questions: Question[], count: number): Question[] {
  const shuffled = shuffle(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get today's daily challenge questions (deterministic based on date)
export function getDailyQuestions(questions: Question[], count = 10): Question[] {
  const today = new Date().toISOString().split('T')[0];
  // Seed based on date string
  let seed = today.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const arr = [...questions];
  // Seeded Fisher-Yates
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(seed) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

// Compute topic question counts from a question array
export function computeTopicCounts(questions: Question[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const q of questions) {
    counts[q.topic] = (counts[q.topic] || 0) + 1;
  }
  return counts;
}

// Format time seconds as MM:SS
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Difficulty colour classes
export function difficultyClass(d: string) {
  if (d === 'easy') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
  if (d === 'medium') return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
  return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
}

// Subject color helpers
export const subjectColors: Record<string, string> = {
  'library-science': 'blue',
  'general-knowledge': 'green',
  'bihar-gk': 'amber',
  'reasoning': 'purple',
  'computer': 'rose',
};

export function subjectBg(subject: string) {
  const map: Record<string, string> = {
    'library-science': 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
    'general-knowledge': 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800',
    'bihar-gk': 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
    'reasoning': 'bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800',
    'computer': 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800',
  };
  return map[subject] || 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700';
}

export function subjectBadge(subject: string) {
  const map: Record<string, string> = {
    'library-science': 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    'general-knowledge': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    'bihar-gk': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    'reasoning': 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
    'computer': 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
  };
  return map[subject] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
}
