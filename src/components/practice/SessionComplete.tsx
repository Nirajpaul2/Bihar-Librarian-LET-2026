import { useState } from 'react';
import { Trophy, RotateCcw, Home, Share2, Sparkles, ArrowRight, Lock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';

interface SessionCompleteProps {
  correct: number;
  incorrect: number;
  total: number;
  label: string;
  onRetry: () => void;
}

export default function SessionComplete({ correct, incorrect, total, label, onRetry }: SessionCompleteProps) {
  const { isUnlocked, openPaywall } = usePayment();
  const [copied, setCopied] = useState(false);

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const unanswered = total - correct - incorrect;

  // Extract day number if available
  const dayMatch = label.match(/Day\s*(\d+)/i) || label.match(/Set\s*(\d+)/i);
  const currentDay = dayMatch ? parseInt(dayMatch[1], 10) : null;
  const nextDay = currentDay && currentDay < 10 ? currentDay + 1 : null;

  // Exam Score & Cutoff estimation (150 Marks total)
  const predictedScore = Math.round((accuracy / 100) * 150);
  const cutoffZone =
    accuracy >= 75 ? { badge: 'Top 10% · Safe Cutoff Zone', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60' } :
    accuracy >= 55 ? { badge: 'Qualifying Range · Practice Daily', color: 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/60' } :
                     { badge: 'Needs Final Sprint Push', color: 'text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40' };

  const grade =
    accuracy >= 80 ? { emoji: '🏆', text: 'Outstanding Work!', color: 'text-green-600 dark:text-green-400' } :
    accuracy >= 60 ? { emoji: '👍', text: 'Solid Attempt!', color: 'text-blue-600 dark:text-blue-400' } :
    accuracy >= 40 ? { emoji: '📖', text: 'Keep Pushing!', color: 'text-amber-600 dark:text-amber-400' } :
                     { emoji: '💪', text: 'Need Intensive Revision', color: 'text-red-600 dark:text-red-400' };

  // WhatsApp Share handler
  const handleShare = () => {
    const text = `🎯 I scored ${correct}/${total} (${accuracy}%) on Bihar Librarian LET 2026 ${label}! BPSC exam announced with 10 days left. Practice your daily free set here: https://biharlibrarian2026.aiwazir.com`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = () => {
    const text = `🎯 I scored ${correct}/${total} on ${label} for Bihar Librarian LET 2026. Try it free: https://biharlibrarian2026.aiwazir.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-5 animate-slide-up py-4">
      
      {/* 10-Day Exam Countdown Pill */}
      <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 text-xs font-extrabold px-3 py-1 rounded-full border border-red-200 dark:border-red-900/60">
        <span>🚨</span>
        <span>BPSC Exam in 10 Days · Final Sprint Mode</span>
      </div>

      {/* Trophy & Feedback */}
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-16 h-16 bg-brand-50 dark:bg-brand-950/40 rounded-full flex items-center justify-center text-3xl shadow-xs">
          {grade.emoji}
        </div>
        <h2 className={`text-xl sm:text-2xl font-extrabold ${grade.color}`}>{grade.text}</h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs">{label}</p>
      </div>

      {/* Score Card */}
      <div className="card p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="text-4xl sm:text-5xl font-extrabold text-brand-700 dark:text-brand-300 mb-1">
          {accuracy}%
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Overall Accuracy</div>

        {/* Predicted Cutoff Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${cutoffZone.color}">
          <span>🎯 Predicted LET Score: {predictedScore}/150</span>
          <span>·</span>
          <span>{cutoffZone.badge}</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-2.5">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">{correct}</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Correct</div>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-2.5">
            <div className="text-xl font-bold text-red-500 dark:text-red-400">{incorrect}</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Incorrect</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2.5">
            <div className="text-xl font-bold text-gray-500 dark:text-gray-400">{unanswered}</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Skipped</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all"
              style={{ width: `${accuracy}%` }}
            />
          </div>
        </div>
      </div>

      {/* Next Day Marathon Sprint Hook */}
      {nextDay && (
        <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-brand-500/15 border border-amber-300 dark:border-amber-800 rounded-2xl p-4 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <span>🔥</span>
              <span>Keep Your 10-Day Streak Alive!</span>
            </span>
            <span className="text-[10px] bg-amber-400 text-brand-950 font-bold px-2 py-0.5 rounded-full">
              NEXT SET
            </span>
          </div>

          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            Advance to Day {nextDay} Practice Set
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
            25 high-priority questions matching tomorrow's syllabus target.
          </p>

          {isUnlocked || nextDay === 1 ? (
            <Link
              to={`/practice/session?mode=marathon&day=${nextDay}`}
              className="btn-primary w-full text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5 font-bold shadow-sm"
            >
              <span>Continue to Day {nextDay} Drill</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              onClick={() => openPaywall(`Unlock Day ${nextDay} to Day 10 for ₹${ACCESS_PRICE_INR}`)}
              className="w-full bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-brand-950 font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Unlock Days 2–10 for ₹{ACCESS_PRICE_INR} & Advance</span>
            </button>
          )}
        </div>
      )}

      {/* WhatsApp Score Share Card */}
      <div className="flex gap-2">
        <button
          onClick={handleShare}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Score on WhatsApp</span>
        </button>
        <button
          onClick={handleCopyLink}
          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors shrink-0"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="flex flex-col gap-2 pt-2">
        <button onClick={onRetry} className="btn-secondary w-full text-xs py-2.5">
          <RotateCcw className="w-3.5 h-3.5" />
          Retake This Set
        </button>
        <div className="flex gap-2">
          <Link to="/marathon" className="btn-ghost flex-1 text-xs py-2">
            Marathon Track
          </Link>
          <Link to="/" className="btn-ghost flex-1 text-xs py-2">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </div>
      </div>

    </div>
  );
}
