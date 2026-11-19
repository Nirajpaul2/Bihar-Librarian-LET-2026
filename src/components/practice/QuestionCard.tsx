import type { Question, AnswerKey } from '@/types';
import { Bookmark, BookmarkCheck, Flag } from 'lucide-react';
import { difficultyClass, subjectBadge } from '@/utils/questions';
import { useLanguage, type LanguageMode } from '@/hooks/useLanguage';

interface OptionButtonProps {
  optionKey: AnswerKey;
  text: string;
  textHindi?: string;
  language: LanguageMode;
  state: 'default' | 'selected' | 'correct' | 'incorrect' | 'reveal-correct';
  disabled: boolean;
  onClick: () => void;
}

function OptionButton({ optionKey, text, textHindi, language, state, disabled, onClick }: OptionButtonProps) {
  const stateClass = {
    default: 'option-btn-default',
    selected: 'option-btn-selected',
    correct: 'option-btn-correct',
    incorrect: 'option-btn-incorrect',
    'reveal-correct': 'option-btn-correct opacity-80',
  }[state];

  const labelClass = {
    default: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
    selected: 'bg-brand-600 text-white',
    correct: 'bg-green-500 text-white',
    incorrect: 'bg-red-500 text-white',
    'reveal-correct': 'bg-green-500 text-white',
  }[state];

  return (
    <button
      className={`option-btn ${stateClass}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={state === 'selected'}
    >
      <div className="flex items-start gap-3 w-full">
        <span className={`shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center transition-colors ${labelClass}`}>
          {optionKey}
        </span>
        <div className="text-left flex-1">
          {language === 'hi' ? (
            <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed block pt-0.5">
              {textHindi || text}
            </span>
          ) : language === 'bilingual' ? (
            <div className="space-y-0.5">
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-relaxed block pt-0.5">
                {text}
              </span>
              {textHindi && (
                <span className="text-brand-700 dark:text-brand-300 text-xs leading-relaxed block">
                  {textHindi}
                </span>
              )}
            </div>
          ) : (
            <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed block pt-0.5">
              {text}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: AnswerKey | null;
  isAnswered: boolean;
  isBookmarked: boolean;
  onAnswer: (key: AnswerKey) => void;
  onBookmark: () => void;
  onReport?: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  isAnswered,
  isBookmarked,
  onAnswer,
  onBookmark,
}: QuestionCardProps) {
  const { language, setLanguage } = useLanguage();

  const getOptionState = (key: AnswerKey): 'default' | 'selected' | 'correct' | 'incorrect' | 'reveal-correct' => {
    if (!isAnswered) {
      return selectedAnswer === key ? 'selected' : 'default';
    }
    if (key === question.correct) return 'correct';
    if (key === selectedAnswer && key !== question.correct) return 'incorrect';
    return 'default';
  };

  return (
    <div className="space-y-4">
      {/* Question meta row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Q {questionNumber} / {totalQuestions}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyClass(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${subjectBadge(question.subject)}`}>
            {question.topicLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector Pill */}
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 p-0.5 rounded-lg text-xs border border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'hi'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="हिन्दी में प्रश्न देखें"
            >
              हिन्दी
            </button>
            <button
              type="button"
              onClick={() => setLanguage('bilingual')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'bilingual'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="द्विभाषी (English + हिन्दी) देखें"
            >
              Bilingual (द्विभाषी)
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-brand-600 text-white shadow-xs font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              title="View in English"
            >
              English
            </button>
          </div>

          <button
            onClick={onBookmark}
            className="btn-ghost p-2 text-brand-600 dark:text-brand-400 cursor-pointer"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
          >
            {isBookmarked
              ? <BookmarkCheck className="w-5 h-5 fill-brand-600 dark:fill-brand-400" />
              : <Bookmark className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Question text */}
      <div className="card p-5">
        {language === 'hi' ? (
          <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
            {question.questionHindi || question.question}
          </p>
        ) : language === 'bilingual' ? (
          <div className="space-y-2.5">
            <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
              {question.question}
            </p>
            {question.questionHindi && (
              <p className="text-base sm:text-lg font-medium text-brand-700 dark:text-brand-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-2.5">
                {question.questionHindi}
              </p>
            )}
          </div>
        ) : (
          <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
            {question.question}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {(Object.entries(question.options) as [AnswerKey, string][]).map(([key, text]) => (
          <OptionButton
            key={key}
            optionKey={key}
            text={text}
            textHindi={question.optionsHindi?.[key]}
            language={language}
            state={getOptionState(key)}
            disabled={isAnswered}
            onClick={() => onAnswer(key)}
          />
        ))}
      </div>

      {/* Explanation — shown after answering */}
      {isAnswered && (
        <div className={`rounded-2xl border p-4 animate-slide-up ${
          selectedAnswer === question.correct
            ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
            : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
        }`}>
          <div className="flex items-start gap-2 mb-2">
            <span className="text-lg">
              {selectedAnswer === question.correct ? '✅' : '❌'}
            </span>
            <div>
              <p className={`font-semibold text-sm ${
                selectedAnswer === question.correct
                  ? 'text-green-800 dark:text-green-300'
                  : 'text-red-800 dark:text-red-300'
              }`}>
                {selectedAnswer === question.correct
                  ? (language === 'hi' ? 'सही उत्तर!' : 'Correct!')
                  : (language === 'hi'
                      ? `गलत उत्तर! सही विकल्प: (${question.correct}) ${question.optionsHindi?.[question.correct] || question.options[question.correct]}`
                      : `Incorrect! Correct answer: (${question.correct}) ${question.options[question.correct]}`
                    )}
              </p>
            </div>
          </div>
          <div className="ml-7">
            {language === 'hi' ? (
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-gray-900 dark:text-gray-100">व्याख्या: </span>
                {question.explanationHindi || question.explanation}
              </p>
            ) : language === 'bilingual' ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Explanation: </span>
                  {question.explanation}
                </p>
                {question.explanationHindi && (
                  <p className="text-sm text-brand-900 dark:text-brand-200 leading-relaxed border-t border-gray-200/60 dark:border-gray-700/60 pt-2">
                    <span className="font-semibold">हिन्दी व्याख्या: </span>
                    {question.explanationHindi}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-gray-900 dark:text-gray-100">Explanation: </span>
                {question.explanation}
              </p>
            )}
            {question.tags && question.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {question.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Report question */}
      {isAnswered && (
        <div className="flex justify-end">
          <button className="btn-ghost text-xs text-gray-400 gap-1.5 cursor-pointer">
            <Flag className="w-3.5 h-3.5" />
            Report issue
          </button>
        </div>
      )}
    </div>
  );
}
