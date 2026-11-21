interface QuestionNavProps {
  total: number;
  currentIndex: number;
  answers: Record<string, string | null>;
  markedForReview: Set<string>;
  questionIds: string[];
  onNavigate: (index: number) => void;
}

type QStatus = 'not-visited' | 'answered' | 'not-answered' | 'marked-review';

function getStatus(
  qId: string,
  index: number,
  currentIndex: number,
  answers: Record<string, string | null>,
  markedForReview: Set<string>
): QStatus {
  if (markedForReview.has(qId)) return 'marked-review';
  if (answers[qId] !== undefined && answers[qId] !== null) return 'answered';
  if (index < currentIndex) return 'not-answered';
  return 'not-visited';
}

const statusStyle: Record<QStatus, string> = {
  'not-visited': 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700/60',
  'answered': 'bg-emerald-600 text-white shadow-xs',
  'not-answered': 'bg-rose-500 dark:bg-rose-600 text-white shadow-xs',
  'marked-review': 'bg-purple-600 text-white shadow-xs',
};

export default function QuestionNav({
  total: _total,
  currentIndex,
  answers,
  markedForReview,
  questionIds,
  onNavigate,
}: QuestionNavProps) {
  const counts = questionIds.reduce(
    (acc, qId, i) => {
      const s = getStatus(qId, i, currentIndex, answers, markedForReview);
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="space-y-3.5">
      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 dark:bg-gray-800/50 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
        {[
          { key: 'answered', label: 'Answered', color: 'bg-emerald-600' },
          { key: 'not-answered', label: 'Not Answered', color: 'bg-rose-500 dark:bg-rose-600' },
          { key: 'marked-review', label: 'Marked Review', color: 'bg-purple-600' },
          { key: 'not-visited', label: 'Not Visited', color: 'bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600' },
        ].map(item => (
          <div key={item.key} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded shrink-0 ${item.color}`} />
            <span className="text-gray-600 dark:text-gray-300 text-[11px] truncate">
              {item.label}: <strong className="font-semibold text-gray-900 dark:text-white">{counts[item.key] || 0}</strong>
            </span>
          </div>
        ))}
      </div>

      {/* Grid container with smooth scroll for large sets (e.g. 100Q / 150Q) */}
      <div className="max-h-[min(380px,calc(100vh-320px))] overflow-y-auto pr-1 -mr-1">
        <div className="grid grid-cols-10 gap-1 sm:gap-1.5 p-0.5">
          {questionIds.map((qId, i) => {
            const status = getStatus(qId, i, currentIndex, answers, markedForReview);
            const isCurrent = i === currentIndex;
            return (
              <button
                key={qId}
                onClick={() => onNavigate(i)}
                className={`w-full aspect-square min-w-0 max-w-full rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center justify-center cursor-pointer select-none touch-manipulation ${statusStyle[status]} ${
                  isCurrent
                    ? 'ring-2 ring-inset ring-brand-500 dark:ring-brand-400 font-extrabold shadow-md scale-105 z-10'
                    : 'hover:brightness-95 active:scale-95'
                }`}
                aria-label={`Question ${i + 1} - ${status}`}
                title={`Question ${i + 1} (${status})`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
