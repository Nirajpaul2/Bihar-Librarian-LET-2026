import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, Play, Zap, BookOpen, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { subjects } from '@/data/subjects';
import { allQuestions } from '@/data/questions';
import { computeTopicCounts, subjectBadge } from '@/utils/questions';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import PaywallModal from '@/components/payment/PaywallModal';

const topicCounts = computeTopicCounts(allQuestions);

const quickModes = [
  {
    label: 'Quick Practice',
    description: '10 questions from Free Unit 1 & Core topics',
    icon: '⚡',
    to: '/practice/session?mode=quick',
    color: 'bg-brand-600',
    isFree: true,
  },
  {
    label: 'Daily Challenge',
    description: "Today's 10 practice questions",
    icon: '🎯',
    to: '/practice/session?mode=daily',
    color: 'bg-green-600',
    isFree: true,
  },
  {
    label: 'Bookmarked',
    description: 'Practice your saved questions',
    icon: '🔖',
    to: '/practice/session?mode=bookmarked',
    color: 'bg-purple-600',
    isFree: true,
  },
];

export default function PracticeHub() {
  const [searchParams] = useSearchParams();
  const subjectFilter = searchParams.get('subject');

  const {
    isUnlocked,
    canAccessUnit,
    isUnitFree,
    isPaywallOpen,
    paywallContext,
    openPaywall,
    closePaywall,
  } = usePayment();

  const filteredSubjects = subjectFilter
    ? subjects.filter(s => s.id === subjectFilter)
    : subjects;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">
      {/* Paywall Modal */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={closePaywall}
        contextText={paywallContext}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/logo.png"
          alt="Bihar Library LET 2026 Logo"
          className="w-11 h-11 object-contain rounded-xl bg-white p-1 border border-gray-200 dark:border-gray-800 shadow-sm shrink-0"
        />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Practice Questions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            MCQs with instant feedback and explanations · Unit 1 is 100% Free!
          </p>
        </div>
      </div>

      {/* Promo banner if not unlocked */}
      {!isUnlocked && (
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-900 text-white p-5 shadow-sm border border-brand-700/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-brand-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Launch Offer · Just ₹{ACCESS_PRICE_INR}
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                Unit 1 (Foundations) is 100% Free!
              </h2>
              <p className="text-xs text-brand-200 mt-1 max-w-xl leading-relaxed">
                Study and practice Unit 1 completely free. Unlock Units 2–6, General Paper (Bihar GK, Reasoning, Computer) and Full 150Q Mock Tests for just ₹{ACCESS_PRICE_INR} lifetime.
              </p>
            </div>
            <button
              onClick={() => openPaywall('Unlock all 6 Library Science units and Full Mock Tests')}
              className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-brand-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Unlock All for ₹{ACCESS_PRICE_INR}
            </button>
          </div>
        </div>
      )}

      {/* Unlocked banner */}
      {isUnlocked && (
        <div className="mb-6 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4 text-green-800 dark:text-green-300 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>
              <strong>Lifetime Full Access Active:</strong> All 6 Units, General Paper, and 150Q Mock Tests are unlocked.
            </span>
          </div>
        </div>
      )}

      {/* Quick modes */}
      {!subjectFilter && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            Quick Start
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickModes.map(mode => (
              <Link
                key={mode.label}
                to={mode.to}
                className="card p-4 hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-brand-700 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${mode.color} rounded-xl flex items-center justify-center text-xl`}>
                    {mode.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors flex items-center gap-1.5">
                      <span>{mode.label}</span>
                      <span className="text-[10px] bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-1.5 py-0.2 rounded font-bold">
                        FREE
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{mode.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Subject filter chips */}
      {!subjectFilter && (
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center">Filter:</span>
          {subjects.map(s => (
            <Link
              key={s.id}
              to={`/practice?subject=${s.id}`}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${subjectBadge(s.id)} hover:opacity-80`}
            >
              {s.icon} {s.shortLabel}
            </Link>
          ))}
        </div>
      )}

      {subjectFilter && (
        <div className="mb-4 flex items-center gap-2">
          <Link to="/practice" className="text-sm text-brand-700 dark:text-brand-400 hover:underline">
            ← All Subjects
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {subjects.find(s => s.id === subjectFilter)?.label}
          </span>
        </div>
      )}

      {/* Subject + Unit + Topic cards */}
      {filteredSubjects.map(subject => {
        const subjectQCount = allQuestions.filter(q => q.subject === subject.id).length;
        const isSubjectAllowed = isUnlocked || subject.id === 'library-science';

        return (
          <div key={subject.id} className="mb-8">
            {/* Subject header row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{subject.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-gray-900 dark:text-white">{subject.label}</h2>
                    {subject.id === 'library-science' ? (
                      <span className="text-[10px] bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-bold">
                        100 Marks Core
                      </span>
                    ) : (
                      <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full font-medium">
                        General Paper
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{subjectQCount} questions</p>
                </div>
              </div>

              {isSubjectAllowed ? (
                <Link
                  to={`/practice/session?subject=${subject.id}&mode=subject`}
                  className="btn-primary text-xs py-2 px-4"
                >
                  <Play className="w-3.5 h-3.5" />
                  Practice All
                </Link>
              ) : (
                <button
                  onClick={() => openPaywall(`Unlock ${subject.label} and all Full Mock Tests for ₹${ACCESS_PRICE_INR}`)}
                  className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Unlock for ₹{ACCESS_PRICE_INR}
                </button>
              )}
            </div>

            {/* Units */}
            <div className="space-y-3">
              {subject.units.map(unit => {
                const unitQCount = allQuestions.filter(
                  q => q.subject === subject.id && q.unit === unit.id
                ).length;
                if (unitQCount === 0) return null;

                const hasAccess = canAccessUnit(subject.id, unit.id);
                const isFree = isUnitFree(subject.id, unit.id);

                return (
                  <div key={unit.id} className="card overflow-hidden">
                    {/* Unit row */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                            {unit.label}
                          </span>
                          {isFree ? (
                            <span className="text-[10px] bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold px-2 py-0.5 rounded-full">
                              FREE UNIT
                            </span>
                          ) : !hasAccess ? (
                            <span className="text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Lock className="w-2.5 h-2.5" /> ₹{ACCESS_PRICE_INR} to Unlock
                            </span>
                          ) : (
                            <span className="text-[10px] bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold px-2 py-0.5 rounded-full">
                              UNLOCKED
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {unitQCount} questions
                        </div>
                      </div>

                      {hasAccess ? (
                        <Link
                          to={`/practice/session?subject=${subject.id}&unit=${unit.id}&mode=unit`}
                          className="btn-secondary text-xs py-1.5 px-3"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          Practice Unit
                        </Link>
                      ) : (
                        <button
                          onClick={() => openPaywall(`Unlock ${unit.label} for just ₹${ACCESS_PRICE_INR}`)}
                          className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-1.5 px-3 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Lock className="w-3 h-3" />
                          Unlock Unit
                        </button>
                      )}
                    </div>

                    {/* Topics */}
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {unit.topics.map(topic => {
                        const count = topicCounts[topic.id] || 0;
                        if (count === 0) return null;

                        return (
                          <div
                            key={topic.id}
                            className="flex items-center justify-between px-4 py-3"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <BookOpen className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                                {topic.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 ml-2">
                              <span className="text-xs text-gray-400">{count} Qs</span>

                              {hasAccess ? (
                                <Link
                                  to={`/practice/session?subject=${subject.id}&topic=${topic.id}&mode=topic`}
                                  className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                                >
                                  Start
                                </Link>
                              ) : (
                                <button
                                  onClick={() => openPaywall(`Unlock ${topic.label} for ₹${ACCESS_PRICE_INR}`)}
                                  className="text-xs bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                  <Lock className="w-3 h-3" />
                                  Unlock
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
