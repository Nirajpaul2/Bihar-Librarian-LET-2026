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
  'not-visited': 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400',
  'answered': 'bg-green-500 text-white',
  'not-answered': 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400',
  'marked-review': 'bg-purple-500 text-white',
};

export default function QuestionNav({
  total,
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
    <div className="space-y-4">
      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {[
          { key: 'answered', label: 'Answered', color: 'bg-green-500' },
          { key: 'not-answered', label: 'Not Answered', color: 'bg-red-300 dark:bg-red-700' },
          { key: 'marked-review', label: 'Marked Review', color: 'bg-purple-500' },
          { key: 'not-visited', label: 'Not Visited', color: 'bg-gray-300 dark:bg-gray-600' },
        ].map(item => (
          <div key={item.key} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded ${item.color}`} />
            <span className="text-gray-600 dark:text-gray-400">
              {item.label}: {counts[item.key] || 0}
            </span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
        {questionIds.map((qId, i) => {
          const status = getStatus(qId, i, currentIndex, answers, markedForReview);
          return (
            <button
              key={qId}
              onClick={() => onNavigate(i)}
              className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all touch-manipulation ${statusStyle[status]} ${
                i === currentIndex ? 'ring-2 ring-brand-500 ring-offset-1 dark:ring-offset-gray-900' : ''
              }`}
              aria-label={`Question ${i + 1} - ${status}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
