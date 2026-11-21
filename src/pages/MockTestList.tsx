import { Link } from 'react-router-dom';
import { Clock, FileText, Trophy, ChevronRight, Lock, Sparkles, Key } from 'lucide-react';
import { mockTests } from '@/data/mock-tests';
import { subjects } from '@/data/subjects';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import { useSEO } from '@/hooks/useSEO';

function formatDuration(mins: number) {
  if (mins >= 60) return `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? (mins % 60) + 'm' : ''}`.trim();
  return `${mins} min`;
}

export default function MockTestList() {
  const { isUnlocked, openPaywall } = usePayment();

  useSEO({
    title: '150Q Full-Length Mock Tests',
    description: 'Simulate the official BSEB Bihar Librarian LET 2026 exam with 150-Question timed mock tests (120 Mins), instant scorecards, and topic-wise performance analysis.',
    canonicalPath: '/mock-test',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          📋 Mock Tests
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Simulate actual Bihar Librarian LET 2026 conditions with full-length 150Q timed tests and subject-wise analysis.
        </p>
      </div>

      {/* Top Banner if not unlocked */}
      {!isUnlocked && (
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-brand-900 to-indigo-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-brand-700/60">
          <div>
            <span className="bg-emerald-400 text-brand-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase">
              🎉 Set 1 is 100% Free
            </span>
            <h3 className="font-bold text-sm sm:text-base mt-1">
              Full LET Mock Test Set 1 is Free · Unlock Sets 2–15 for ₹{ACCESS_PRICE_INR}
            </h3>
            <p className="text-xs text-brand-200 mt-0.5">
              Take Set 1 right now without paying anything. Unlock the remaining 14 full mock tests & complete 10-day sprint for just ₹{ACCESS_PRICE_INR}.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
            <button
              onClick={() => openPaywall('Restore your access', 'restore')}
              className="bg-brand-800/80 hover:bg-brand-700 text-brand-100 hover:text-white font-semibold px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer border border-brand-600/50"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Already Paid? Restore</span>
            </button>
            <button
              onClick={() => openPaywall(`Unlock all Mock Tests for ₹${ACCESS_PRICE_INR}`, 'pay')}
              className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Unlock for ₹{ACCESS_PRICE_INR}
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {mockTests.map((test, index) => {
          const isTestFree = test.isFree || test.id === 'mt-001';
          const canAccess = isTestFree || isUnlocked;

          return (
            <div key={test.id} className="card p-6 hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-brand-700">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="w-7 h-7 bg-brand-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h2 className="font-bold text-gray-900 dark:text-white">{test.title}</h2>
                    {isTestFree ? (
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                        🎉 100% FREE
                      </span>
                    ) : !isUnlocked ? (
                      <span className="text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> ₹{ACCESS_PRICE_INR} to Unlock
                      </span>
                    ) : (
                      <span className="text-[10px] bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 font-bold px-2 py-0.5 rounded-full">
                        UNLOCKED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    {test.description}
                  </p>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span>{test.totalQuestions} Questions</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(test.durationMinutes)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <Trophy className="w-4 h-4" />
                      <span>{test.totalQuestions * test.marksPerQuestion} Marks</span>
                    </div>
                  </div>

                  {/* Sections */}
                  {test.sections.length > 1 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {test.sections.map(sec => {
                        const subject = subjects.find(s => s.id === sec.subjectId);
                        return (
                          <span
                            key={sec.id}
                            className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {subject?.icon} {sec.label}: {sec.questionCount}Q
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                {canAccess ? (
                  <Link
                    to={`/mock-test/${test.id}`}
                    className={`btn-primary flex-1 sm:flex-none text-center ${
                      isTestFree ? 'bg-emerald-600 hover:bg-emerald-700 border-emerald-600' : ''
                    }`}
                  >
                    {isTestFree ? 'Start Free Test' : 'Start Test'}
                    <ChevronRight className="w-4 h-4 ml-1 inline" />
                  </Link>
                ) : (
                  <button
                    onClick={() => openPaywall(`Unlock ${test.title} and all full mock tests for ₹${ACCESS_PRICE_INR}`)}
                    className="bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow"
                  >
                    <Lock className="w-4 h-4" />
                    Unlock Test for ₹{ACCESS_PRICE_INR}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
