import { Link } from 'react-router-dom';
import { Bookmark, Trash2, Play } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useLanguage } from '@/hooks/useLanguage';
import { allQuestions } from '@/data/questions';
import { subjectBadge, difficultyClass } from '@/utils/questions';

export default function Bookmarks() {
  const { bookmarks, toggle, clearAll, count } = useBookmarks();
  const { language, setLanguage } = useLanguage();

  const bookmarkedQuestions = allQuestions.filter(q => bookmarks.has(q.id));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">🔖 Bookmarks</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {count === 0 ? 'No bookmarks yet' : `${count} question${count !== 1 ? 's' : ''} saved`}
          </p>
        </div>

        {/* Language selector */}
        {count > 0 && (
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg text-xs border border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
              }`}
            >
              हिन्दी
            </button>
            <button
              type="button"
              onClick={() => setLanguage('bilingual')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'bilingual'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
              }`}
            >
              Bilingual (द्विभाषी)
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
              }`}
            >
              English
            </button>
          </div>
        )}

        {count > 0 && (
          <div className="flex gap-2">
            <Link
              to="/practice/session?mode=bookmarked"
              className="btn-primary text-sm py-2 px-4"
            >
              <Play className="w-4 h-4" />
              Practice All
            </Link>
            <button
              onClick={() => {
                if (confirm('Clear all bookmarks?')) clearAll();
              }}
              className="btn-ghost text-sm text-red-500 dark:text-red-400 py-2 px-3"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {count === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔖</div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Bookmarks Yet</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs mx-auto">
            While practicing, click the bookmark icon on any question to save it here for later review.
          </p>
          <Link to="/practice" className="btn-primary">
            Start Practicing
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarkedQuestions.map((q, i) => (
            <div key={q.id} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-xs font-medium text-gray-400">#{i + 1}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${subjectBadge(q.subject)}`}>
                      {q.topicLabel}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyClass(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                  </div>

                  {language === 'hi' ? (
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed mb-3">
                      {q.questionHindi || q.question}
                    </p>
                  ) : language === 'bilingual' ? (
                    <div className="space-y-1.5 mb-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                        {q.question}
                      </p>
                      {q.questionHindi && (
                        <p className="text-sm font-medium text-brand-700 dark:text-brand-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-1.5">
                          {q.questionHindi}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed mb-3">
                      {q.question}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {(Object.entries(q.options) as [string, string][]).map(([key, text]) => {
                      const textHindi = q.optionsHindi?.[key as import('@/types').AnswerKey];
                      return (
                        <div
                          key={key}
                          className={`text-xs px-2.5 py-1.5 rounded-lg border ${
                            key === q.correct
                              ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300'
                              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          <strong>{key}.</strong>{' '}
                          {language === 'hi' ? (
                            textHindi || text
                          ) : language === 'bilingual' ? (
                            <span>
                              {text}
                              {textHindi && <span className="block text-[11px] text-brand-700 dark:text-brand-300 mt-0.5">{textHindi}</span>}
                            </span>
                          ) : (
                            text
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {(q.explanation || q.explanationHindi) && (
                    <details className="mt-3">
                      <summary className="text-xs text-brand-700 dark:text-brand-400 font-medium cursor-pointer">
                        {language === 'hi' ? 'व्याख्या देखें' : 'Show Explanation'}
                      </summary>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed space-y-1">
                        {language === 'hi' ? (
                          <p>{q.explanationHindi || q.explanation}</p>
                        ) : language === 'bilingual' ? (
                          <>
                            <p>{q.explanation}</p>
                            {q.explanationHindi && (
                              <p className="text-brand-800 dark:text-brand-300 border-t border-gray-100 dark:border-gray-800 pt-1">
                                {q.explanationHindi}
                              </p>
                            )}
                          </>
                        ) : (
                          <p>{q.explanation}</p>
                        )}
                      </div>
                    </details>
                  )}
                </div>
                <button
                  onClick={() => toggle(q.id)}
                  className="shrink-0 p-2 text-brand-600 dark:text-brand-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  aria-label="Remove bookmark"
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
