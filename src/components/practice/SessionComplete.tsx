import { Trophy, RotateCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SessionCompleteProps {
  correct: number;
  incorrect: number;
  total: number;
  label: string;
  onRetry: () => void;
}

export default function SessionComplete({ correct, incorrect, total, label, onRetry }: SessionCompleteProps) {
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const unanswered = total - correct - incorrect;

  const grade =
    accuracy >= 80 ? { emoji: '🏆', text: 'Excellent!', color: 'text-green-600 dark:text-green-400' } :
    accuracy >= 60 ? { emoji: '👍', text: 'Good Work!', color: 'text-blue-600 dark:text-blue-400' } :
    accuracy >= 40 ? { emoji: '📖', text: 'Keep Practicing!', color: 'text-amber-600 dark:text-amber-400' } :
                     { emoji: '💪', text: 'Need More Practice', color: 'text-red-600 dark:text-red-400' };

  return (
    <div className="max-w-md mx-auto text-center space-y-6 animate-slide-up py-8">
      {/* Trophy */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-brand-50 dark:bg-brand-950/40 rounded-full flex items-center justify-center text-4xl">
          {grade.emoji}
        </div>
        <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.text}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
      </div>

      {/* Score ring */}
      <div className="card p-6">
        <div className="text-5xl font-bold text-brand-700 dark:text-brand-400 mb-1">
          {accuracy}%
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-5">Accuracy</div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-3">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{correct}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Correct</div>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-3">
            <div className="text-2xl font-bold text-red-500 dark:text-red-400">{incorrect}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Incorrect</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
            <div className="text-2xl font-bold text-gray-500 dark:text-gray-400">{unanswered}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Skipped</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${accuracy}%` }}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button onClick={onRetry} className="btn-primary w-full">
          <RotateCcw className="w-4 h-4" />
          Practice Again
        </button>
        <Link to="/practice" className="btn-secondary w-full">
          <Trophy className="w-4 h-4" />
          More Practice
        </Link>
        <Link to="/" className="btn-ghost w-full text-sm">
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
