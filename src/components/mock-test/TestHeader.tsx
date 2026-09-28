import { formatTime } from '@/utils/questions';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TestHeaderProps {
  title: string;
  currentIndex: number;
  totalQuestions: number;
  timeRemaining: number;
  answeredCount: number;
  onSubmit: () => void;
}

export default function TestHeader({
  title,
  currentIndex,
  totalQuestions,
  timeRemaining,
  answeredCount,
  onSubmit,
}: TestHeaderProps) {
  const isWarning = timeRemaining < 300; // < 5 minutes
  const isCritical = timeRemaining < 60; // < 1 minute

  return (
    <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: back + title */}
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/mock-test" className="btn-ghost p-2 shrink-0 text-gray-600 dark:text-gray-400">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <div className="font-semibold text-gray-900 dark:text-white text-sm truncate">{title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Q {currentIndex + 1} of {totalQuestions} · {answeredCount} answered
              </div>
            </div>
          </div>

          {/* Timer + Submit */}
          <div className="flex items-center gap-3 shrink-0">
            <div className={`px-3 py-1.5 rounded-xl font-mono font-bold text-base tabular-nums ${
              isCritical
                ? 'bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 animate-pulse'
                : isWarning
                ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}>
              ⏱ {formatTime(timeRemaining)}
            </div>
            <button onClick={onSubmit} className="btn-primary text-sm py-2 px-4 hidden sm:flex">
              Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
