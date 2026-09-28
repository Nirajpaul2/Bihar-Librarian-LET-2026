import { useState, useCallback, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import type { AnswerKey } from '@/types';
import {
  allQuestions,
  getQuestionsBySubject,
  getQuestionsByTopic,
} from '@/data/questions';
import { pickQuestions, getDailyQuestions, shuffle } from '@/utils/questions';
import { useBookmarks } from '@/hooks/useBookmarks';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import PaywallModal from '@/components/payment/PaywallModal';
import QuestionCard from '@/components/practice/QuestionCard';
import SessionComplete from '@/components/practice/SessionComplete';
import { subjects } from '@/data/subjects';
import { Lock, Sparkles, BookOpen } from 'lucide-react';

const DEFAULT_COUNT = 20;
const QUICK_COUNT = 10;

export default function PracticeSession() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'quick';
  const subjectId = searchParams.get('subject') as string | null;
  const unitId = searchParams.get('unit') as string | null;
  const topicId = searchParams.get('topic') as string | null;

  const {
    isUnlocked,
    isPaywallOpen,
    paywallContext,
    openPaywall,
    closePaywall,
  } = usePayment();

  const { toggle, isBookmarked, bookmarks } = useBookmarks();

  // Build question set based on mode/filters
  const questions = useMemo(() => {
    if (mode === 'daily') return getDailyQuestions(allQuestions, QUICK_COUNT);
    if (mode === 'bookmarked') {
      const ids = [...bookmarks];
      if (ids.length === 0) return [];
      return shuffle(allQuestions.filter(q => ids.includes(q.id)));
    }
    if (mode === 'quick') return pickQuestions(allQuestions, QUICK_COUNT);
    if (topicId) return pickQuestions(getQuestionsByTopic(topicId), DEFAULT_COUNT);
    if (unitId && subjectId) {
      const unitQs = allQuestions.filter(q => q.subject === subjectId && q.unit === unitId);
      return pickQuestions(unitQs, DEFAULT_COUNT);
    }
    if (subjectId) return pickQuestions(getQuestionsBySubject(subjectId as any), DEFAULT_COUNT);
    return pickQuestions(allQuestions, DEFAULT_COUNT);
  }, [mode, subjectId, unitId, topicId, bookmarks]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerKey | null>>({});
  const [answered, setAnswered] = useState<Set<string>>(new Set());
  const [sessionKey, setSessionKey] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (key: AnswerKey) => {
      if (!currentQuestion || answered.has(currentQuestion.id)) return;
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: key }));
      setAnswered(prev => new Set([...prev, currentQuestion.id]));
    },
    [currentQuestion, answered]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, questions.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(i => Math.max(0, i - 1));
  }, []);

  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setAnswered(new Set());
    setIsComplete(false);
    setSessionKey(k => k + 1);
  }, []);

  const isCurrentAnswered = currentQuestion ? answered.has(currentQuestion.id) : false;
  const selectedAnswer = currentQuestion ? (answers[currentQuestion.id] ?? null) : null;

  const correct = Object.entries(answers).filter(([qId, ans]) => {
    const q = questions.find(q => q.id === qId);
    return q && ans === q.correct;
  }).length;
  const incorrect = Object.keys(answers).length - correct;

  // Build header label
  const sessionLabel = useMemo(() => {
    if (mode === 'quick') return 'Quick Practice';
    if (mode === 'daily') return "Today's Daily Challenge";
    if (mode === 'bookmarked') return 'Bookmarked Questions';
    if (topicId) {
      const subject = subjects.find(s => s.id === subjectId);
      const unit = subject?.units.find(u => u.id === unitId);
      const topic = unit?.topics.find(t => t.id === topicId);
      return topic?.label || 'Topic Practice';
    }
    if (unitId) {
      const subject = subjects.find(s => s.id === subjectId);
      const unit = subject?.units.find(u => u.id === unitId);
      return unit?.label || 'Unit Practice';
    }
    if (subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      return subject?.label || 'Subject Practice';
    }
    return 'Practice Session';
  }, [mode, subjectId, unitId, topicId]);

  // Locked content check: Unit 1 of Library Science is Free; other units & subjects require ₹9
  const isContentLocked = !isUnlocked && (
    (subjectId && subjectId !== 'library-science') ||
    (unitId && (subjectId !== 'library-science' || unitId !== 'foundations'))
  );

  if (isContentLocked) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center animate-fade-in">
        <PaywallModal
          isOpen={isPaywallOpen}
          onClose={closePaywall}
          contextText={`Unlock ${sessionLabel} for ₹${ACCESS_PRICE_INR}`}
        />
        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {sessionLabel} is Locked
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
          Unit 1 (Foundations of Library Science) is 100% Free! Unlock this unit, all remaining units, and full 150Q mock tests for just <strong>₹{ACCESS_PRICE_INR}</strong> lifetime access.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => openPaywall(`Unlock ${sessionLabel} for ₹${ACCESS_PRICE_INR}`)}
            className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 font-bold cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Unlock All for ₹{ACCESS_PRICE_INR}
          </button>
          <Link
            to="/practice/session?subject=library-science&unit=foundations&mode=unit"
            className="btn-secondary w-full py-3 text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Practice Free Unit 1
          </Link>
          <Link to="/practice" className="btn-ghost text-xs">
            Back to Practice Hub
          </Link>
        </div>
      </div>
    );
  }

  // No questions state
  if (questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Questions Found</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {mode === 'bookmarked'
            ? "You haven't bookmarked any questions yet. Practice questions and bookmark the ones you find difficult."
            : 'No questions available for this selection.'}
        </p>
        <Link to="/practice" className="btn-primary">
          Browse Practice Topics
        </Link>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-8">
        <SessionComplete
          correct={correct}
          incorrect={incorrect}
          total={questions.length}
          label={sessionLabel}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div key={sessionKey} className="max-w-2xl mx-auto pb-32 md:pb-8">
      {/* Session Header */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/practice" className="btn-ghost p-2 -ml-2">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[200px]">
              {sessionLabel}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {currentIndex + 1} / {questions.length}
            </div>
          </div>
          <div className="text-xs text-green-600 dark:text-green-400 font-medium">
            {correct} ✓
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full transition-all"
            style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="px-4 pt-6">
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={selectedAnswer}
            isAnswered={isCurrentAnswered}
            isBookmarked={isBookmarked(currentQuestion.id)}
            onAnswer={handleAnswer}
            onBookmark={() => toggle(currentQuestion.id)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 md:relative md:bottom-auto left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-4 md:mt-6 md:border-0 md:bg-transparent dark:md:bg-transparent">
        <div className="max-w-2xl mx-auto flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="btn-secondary flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`flex-1 ${isCurrentAnswered ? 'btn-primary' : 'btn-secondary'}`}
          >
            {currentIndex === questions.length - 1
              ? isCurrentAnswered ? 'Finish' : 'Skip & Finish'
              : isCurrentAnswered ? 'Next' : 'Skip'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
