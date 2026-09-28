import type { Question, AnswerKey } from '@/types';
import { Bookmark, BookmarkCheck, Flag } from 'lucide-react';
import { difficultyClass, subjectBadge } from '@/utils/questions';

interface OptionButtonProps {
  optionKey: AnswerKey;
  text: string;
  state: 'default' | 'selected' | 'correct' | 'incorrect' | 'reveal-correct';
  disabled: boolean;
  onClick: () => void;
}

function OptionButton({ optionKey, text, state, disabled, onClick }: OptionButtonProps) {
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
      <div className="flex items-start gap-3">
        <span className={`shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center transition-colors ${labelClass}`}>
          {optionKey}
        </span>
        <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed pt-0.5">{text}</span>
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
        <button
          onClick={onBookmark}
          className="btn-ghost p-2 text-brand-600 dark:text-brand-400"
          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
        >
          {isBookmarked
            ? <BookmarkCheck className="w-5 h-5 fill-brand-600 dark:fill-brand-400" />
            : <Bookmark className="w-5 h-5" />}
        </button>
      </div>

      {/* Question text */}
      <div className="card p-5">
        <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {(Object.entries(question.options) as [AnswerKey, string][]).map(([key, text]) => (
          <OptionButton
            key={key}
            optionKey={key}
            text={text}
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
                {selectedAnswer === question.correct ? 'Correct!' : `Incorrect! Correct answer: (${question.correct}) ${question.options[question.correct]}`}
              </p>
            </div>
          </div>
          <div className="ml-7">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Explanation: </span>
              {question.explanation}
            </p>
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
          <button className="btn-ghost text-xs text-gray-400 gap-1.5">
            <Flag className="w-3.5 h-3.5" />
            Report issue
          </button>
        </div>
      )}
    </div>
  );
}
