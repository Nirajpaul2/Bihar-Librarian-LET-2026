import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BookmarkCheck, Bookmark, ArrowLeft, ArrowRight, Flag, List } from 'lucide-react';
import type { AnswerKey } from '@/types';
import { mockTests } from '@/data/mock-tests';
import { allQuestions } from '@/data/questions';
import { pickQuestions, shuffle, formatTime } from '@/utils/questions';
import { useBookmarks } from '@/hooks/useBookmarks';
import TestHeader from '@/components/mock-test/TestHeader';
import QuestionNav from '@/components/mock-test/QuestionNav';
import { Clock, FileText, Trophy, Lock, Sparkles } from 'lucide-react';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import PaywallModal from '@/components/payment/PaywallModal';

function formatDuration(mins: number) {
  if (mins >= 60) return `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? (mins % 60) + 'm' : ''}`.trim();
  return `${mins} min`;
}

// ── Pre-test Info Screen ────────────────────────────────────────────────────
function TestInfoScreen({
  testId,
  onStart,
  isUnlocked,
  onOpenPaywall,
}: {
  testId: string;
  onStart: () => void;
  isUnlocked: boolean;
  onOpenPaywall: () => void;
}) {
  const test = mockTests.find(t => t.id === testId);
  if (!test) return <div className="p-8 text-center text-gray-500">Test not found.</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 md:pb-8">
      <Link to="/mock-test" className="btn-ghost mb-4 -ml-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Tests
      </Link>

      <div className="card p-6 mb-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{test.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">{test.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center bg-brand-50 dark:bg-brand-950/30 rounded-xl p-3">
            <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400 mx-auto mb-1" />
            <div className="font-bold text-gray-900 dark:text-white">{test.totalQuestions}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Questions</div>
          </div>
          <div className="text-center bg-brand-50 dark:bg-brand-950/30 rounded-xl p-3">
            <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400 mx-auto mb-1" />
            <div className="font-bold text-gray-900 dark:text-white">{formatDuration(test.durationMinutes)}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
          </div>
          <div className="text-center bg-brand-50 dark:bg-brand-950/30 rounded-xl p-3">
            <Trophy className="w-5 h-5 text-brand-600 dark:text-brand-400 mx-auto mb-1" />
            <div className="font-bold text-gray-900 dark:text-white">{test.totalQuestions * test.marksPerQuestion}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total Marks</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Instructions</h3>
          <ul className="space-y-2">
            {test.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-5 h-5 bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {inst}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isUnlocked ? (
        <button onClick={onStart} className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2">
          Start Test Now
          <ArrowRight className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={onOpenPaywall}
          className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-base py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Lock className="w-5 h-5" />
          Unlock Full Test for ₹{ACCESS_PRICE_INR}
        </button>
      )}
    </div>
  );
}

// ── Active Test ─────────────────────────────────────────────────────────────
type TestPhase = 'info' | 'active' | 'result';

export default function MockTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const test = mockTests.find(t => t.id === testId);

  const {
    isUnlocked,
    isPaywallOpen,
    paywallContext,
    openPaywall,
    closePaywall,
  } = usePayment();

  const [phase, setPhase] = useState<TestPhase>('info');
  const [questions, setQuestions] = useState<ReturnType<typeof allQuestions.filter>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerKey | null>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { toggle, isBookmarked } = useBookmarks();
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const startTest = useCallback(() => {
    if (!test) return;
    if (!isUnlocked) {
      openPaywall(`Unlock ${test.title} for ₹${ACCESS_PRICE_INR}`);
      return;
    }
    // Build question set
    const qs: typeof allQuestions = [];
    for (const section of test.sections) {
      const pool = allQuestions.filter(q => q.subject === section.subjectId);
      const picked = pickQuestions(pool, section.questionCount);
      qs.push(...picked);
    }
    const shuffled = shuffle(qs);
    setQuestions(shuffled);
    setTimeRemaining(test.durationMinutes * 60);
    setCurrentIndex(0);
    setAnswers({});
    setMarkedForReview(new Set());
    setPhase('active');
  }, [test, isUnlocked, openPaywall]);

  // Timer
  useEffect(() => {
    if (phase !== 'active') return;
    timerRef.current = setInterval(() => {
      setTimeRemaining(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setPhase('result');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [phase]);

  const submitTest = useCallback(() => {
    clearInterval(timerRef.current!);
    setPhase('result');
    setShowSubmitConfirm(false);
  }, []);

  const handleAnswer = useCallback((key: AnswerKey) => {
    const qId = questions[currentIndex]?.id;
    if (!qId) return;
    setAnswers(prev => ({ ...prev, [qId]: key }));
  }, [questions, currentIndex]);

  const toggleReview = useCallback(() => {
    const qId = questions[currentIndex]?.id;
    if (!qId) return;
    setMarkedForReview(prev => {
      const next = new Set(prev);
      next.has(qId) ? next.delete(qId) : next.add(qId);
      return next;
    });
  }, [questions, currentIndex]);

  const clearResponse = useCallback(() => {
    const qId = questions[currentIndex]?.id;
    if (!qId) return;
    setAnswers(prev => { const n = { ...prev }; delete n[qId]; return n; });
  }, [questions, currentIndex]);

  const answeredCount = Object.values(answers).filter(v => v !== null && v !== undefined).length;

  if (!test) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Test Not Found</h2>
        <Link to="/mock-test" className="btn-primary mt-4">Browse Tests</Link>
      </div>
    );
  }

  if (phase === 'info') {
    return (
      <>
        <PaywallModal
          isOpen={isPaywallOpen}
          onClose={closePaywall}
          contextText={paywallContext || `Unlock ${test.title} for ₹${ACCESS_PRICE_INR}`}
        />
        <TestInfoScreen
          testId={test.id}
          onStart={startTest}
          isUnlocked={isUnlocked}
          onOpenPaywall={() => openPaywall(`Unlock ${test.title} for ₹${ACCESS_PRICE_INR}`)}
        />
      </>
    );
  }

  if (phase === 'result') {
    return <MockTestResultInline test={test} questions={questions} answers={answers} />;
  }

  const currentQ = questions[currentIndex];
  const currentAnswer = currentQ ? (answers[currentQ.id] ?? null) : null;
  const isCurrentMarked = currentQ ? markedForReview.has(currentQ.id) : false;

  const getOptionState = (key: AnswerKey) =>
    currentAnswer === key ? 'selected' : 'default';

  const optionClass = (key: AnswerKey) => {
    const selected = currentAnswer === key;
    return `option-btn ${selected ? 'option-btn-selected' : 'option-btn-default'}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TestHeader
        title={test.title}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        timeRemaining={timeRemaining}
        answeredCount={answeredCount}
        onSubmit={() => setShowSubmitConfirm(true)}
      />

      <div className="flex flex-1 max-w-4xl mx-auto w-full px-4 py-6 gap-6">
        {/* Main question area */}
        <div className="flex-1 min-w-0 space-y-5">
          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Q {currentIndex + 1} of {questions.length}
            </span>
            {currentQ && (
              <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {currentQ.topicLabel}
              </span>
            )}
            {isCurrentMarked && (
              <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">
                Marked for Review
              </span>
            )}
          </div>

          {/* Question */}
          {currentQ && (
            <>
              <div className="card p-5">
                <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {(Object.entries(currentQ.options) as [AnswerKey, string][]).map(([key, text]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    className={optionClass(key)}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center transition-colors ${
                        currentAnswer === key
                          ? 'bg-brand-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {key}
                      </span>
                      <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed pt-0.5">{text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={toggleReview}
                  className={`text-xs px-3 py-2 rounded-lg font-medium border transition-colors ${
                    isCurrentMarked
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-700'
                      : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5 inline mr-1" />
                  {isCurrentMarked ? 'Unmark Review' : 'Mark for Review'}
                </button>
                <button
                  onClick={clearResponse}
                  disabled={!currentAnswer}
                  className="text-xs px-3 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 transition-colors"
                >
                  Clear Response
                </button>
                <button
                  onClick={() => toggle(currentQ.id)}
                  className="text-xs px-3 py-2 rounded-lg font-medium border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isBookmarked(currentQ.id) ? <BookmarkCheck className="w-3.5 h-3.5 inline mr-1" /> : <Bookmark className="w-3.5 h-3.5 inline mr-1" />}
                  {isBookmarked(currentQ.id) ? 'Bookmarked' : 'Bookmark'}
                </button>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="btn-secondary flex-1 disabled:opacity-40"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
              disabled={currentIndex === questions.length - 1}
              className="btn-primary flex-1 disabled:opacity-40"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile: Submit */}
          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="sm:hidden w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            Submit Test
          </button>
        </div>

        {/* Question Nav - Desktop sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="card p-4 sticky top-24">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">Question Navigator</h3>
            <QuestionNav
              total={questions.length}
              currentIndex={currentIndex}
              answers={answers}
              markedForReview={markedForReview}
              questionIds={questions.map(q => q.id)}
              onNavigate={setCurrentIndex}
            />
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="w-full mt-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors"
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Question nav drawer */}
      <button
        onClick={() => setShowNav(true)}
        className="lg:hidden fixed bottom-6 right-4 w-12 h-12 bg-brand-600 text-white rounded-full shadow-lg flex items-center justify-center"
      >
        <List className="w-5 h-5" />
      </button>

      {showNav && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowNav(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">
              Question Navigator ({answeredCount}/{questions.length} answered)
            </h3>
            <QuestionNav
              total={questions.length}
              currentIndex={currentIndex}
              answers={answers}
              markedForReview={markedForReview}
              questionIds={questions.map(q => q.id)}
              onNavigate={i => { setCurrentIndex(i); setShowNav(false); }}
            />
            <div className="flex gap-3 mt-4">
              <button onClick={() => setShowNav(false)} className="btn-secondary flex-1">Close</button>
              <button onClick={() => { setShowNav(false); setShowSubmitConfirm(true); }} className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit confirmation dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-slide-up">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Submit Test?</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
              Answered: <span className="font-semibold text-gray-700 dark:text-gray-300">{answeredCount}</span> / {questions.length}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
              Unanswered: <span className="font-semibold text-amber-600">{questions.length - answeredCount}</span>
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowSubmitConfirm(false)} className="btn-secondary flex-1">
                Continue
              </button>
              <button onClick={submitTest} className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Inline Result Screen ─────────────────────────────────────────────────────
function MockTestResultInline({
  test,
  questions,
  answers,
}: {
  test: import('@/types').MockTestConfig;
  questions: import('@/types').Question[];
  answers: Record<string, AnswerKey | null>;
}) {
  const [showReview, setShowReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const correct = questions.filter(q => answers[q.id] === q.correct).length;
  const incorrect = questions.filter(q => answers[q.id] && answers[q.id] !== q.correct).length;
  const unanswered = questions.length - correct - incorrect;
  const score = correct * test.marksPerQuestion - incorrect * test.negativeMarks;
  const totalMarks = questions.length * test.marksPerQuestion;
  const percentage = Math.round((score / totalMarks) * 100);

  const sectionResults = test.sections.map((sec: import('@/types').MockTestSection) => {
    const secQs = questions.filter(q => q.subject === sec.subjectId);
    const secCorrect = secQs.filter(q => answers[q.id] === q.correct).length;
    return { ...sec, correct: secCorrect, total: secQs.length, pct: secQs.length > 0 ? Math.round((secCorrect / secQs.length) * 100) : 0 };
  });

  if (showReview) {
    const q = questions[reviewIndex];
    const ans = answers[q.id] ?? null;
    const isCorrect = ans === q.correct;
    return (
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
        <button onClick={() => setShowReview(false)} className="btn-ghost mb-4 -ml-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Result
        </button>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Reviewing Q {reviewIndex + 1} of {questions.length}
        </div>
        <div className="card p-5 mb-4">
          <p className="font-medium text-gray-900 dark:text-white">{q.question}</p>
        </div>
        <div className="space-y-3 mb-4">
          {(Object.entries(q.options) as [AnswerKey, string][]).map(([key, text]) => {
            const isSelected = ans === key;
            const isCorrKey = key === q.correct;
            const cls = isCorrKey ? 'option-btn option-btn-correct' : isSelected ? 'option-btn option-btn-incorrect' : 'option-btn border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800';
            const labelCls = isCorrKey ? 'bg-green-500 text-white' : isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400';
            return (
              <div key={key} className={cls}>
                <div className="flex items-start gap-3">
                  <span className={`shrink-0 w-7 h-7 rounded-lg text-sm font-bold flex items-center justify-center ${labelCls}`}>{key}</span>
                  <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed pt-0.5">{text}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`rounded-xl p-4 ${isCorrect ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800'}`}>
          <p className={`font-semibold text-sm mb-1 ${isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
            {isCorrect ? '✅ Correct!' : ans ? `❌ Wrong. Correct: (${q.correct}) ${q.options[q.correct]}` : `⬜ Skipped. Answer: (${q.correct}) ${q.options[q.correct]}`}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{q.explanation}</p>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={() => setReviewIndex(i => Math.max(0, i - 1))} disabled={reviewIndex === 0} className="btn-secondary flex-1 disabled:opacity-40">
            <ArrowLeft className="w-4 h-4" /> Prev
          </button>
          <button onClick={() => setReviewIndex(i => Math.min(questions.length - 1, i + 1))} disabled={reviewIndex === questions.length - 1} className="btn-primary flex-1 disabled:opacity-40">
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 pb-24 md:pb-8 space-y-5 animate-slide-up">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Test Result</h1>

      {/* Score card */}
      <div className="card p-6 text-center">
        <div className="text-5xl font-bold text-brand-700 dark:text-brand-400 mb-1">{score}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">out of {totalMarks} marks</div>
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{percentage}%</div>
        <div className="mt-4 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-brand-600 rounded-full" style={{ width: `${Math.max(0, percentage)}%` }} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{correct}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Correct</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-red-500 dark:text-red-400">{incorrect}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Incorrect</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-gray-500 dark:text-gray-400">{unanswered}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Unanswered</div>
        </div>
      </div>

      {/* Section wise */}
      {sectionResults.length > 1 && (
        <div className="card p-5">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">Subject-wise Performance</h3>
          <div className="space-y-4">
            {sectionResults.map(sec => (
              <div key={sec.id}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-700 dark:text-gray-300">{sec.label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{sec.correct}/{sec.total} ({sec.pct}%)</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${sec.pct >= 70 ? 'bg-green-500' : sec.pct >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${sec.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button onClick={() => setShowReview(true)} className="btn-primary w-full">
          Review All Answers
        </button>
        <Link to="/mock-test" className="btn-secondary w-full text-center">
          Take Another Test
        </Link>
        <Link to="/practice" className="btn-ghost w-full text-center text-sm">
          Practice More Questions
        </Link>
      </div>
    </div>
  );
}
