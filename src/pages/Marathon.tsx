import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy, CheckCircle2, Lock, Sparkles, Key, Play, ArrowRight,
  Flame, Calendar, Clock, BookOpen, Layers
} from 'lucide-react';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import { useSEO } from '@/hooks/useSEO';

interface DayProgress {
  score: number;
  total: number;
  date: string;
}

const MARATHON_DAYS = [
  {
    day: 1,
    title: 'Foundations of LIS & General Paper Overview',
    focus: 'Five Laws of Library Science, Concept of Library, Bihar Geography & Number Series',
    isFree: true,
  },
  {
    day: 2,
    title: 'Knowledge Organisation & Logical Reasoning',
    focus: 'DDC 10 Main Classes, Notation Systems, Coding-Decoding & Ancient Bihar History',
    isFree: false,
  },
  {
    day: 3,
    title: 'Cataloguing Standards & Bihar Special Heritage',
    focus: 'AACR-2 Structure, CCC, Khuda Bakhsh Library, Blood Relations & Basic IT',
    isFree: false,
  },
  {
    day: 4,
    title: 'Library Management & Computer Awareness',
    focus: 'Book Selection, Circulation, Input/Output Devices, RAM/ROM & Syllogisms',
    isFree: false,
  },
  {
    day: 5,
    title: 'Reference Services & Information Science',
    focus: 'CAS vs SDI, Bibliographies, Encyclopedias, Direction Sense & Indian Constitution',
    isFree: false,
  },
  {
    day: 6,
    title: 'Digital Libraries, Automation & Koha',
    focus: 'ILMS Software, DSpace, MARC21 Fields, Networking & Bihar Cultural Heritage',
    isFree: false,
  },
  {
    day: 7,
    title: 'Library Legislation & Public Libraries Drill',
    focus: 'Model Public Library Acts, Bihar Public Library Act 2008, Memory & Analogy',
    isFree: false,
  },
  {
    day: 8,
    title: 'Subject Indexing, Thesaurus & Data Networks',
    focus: 'POPSI, PRECIS, INFLIBNET, DELNET, Sitting Arrangement & Hardware',
    isFree: false,
  },
  {
    day: 9,
    title: 'Advanced Core LIS & National Current Affairs',
    focus: 'RDA, Metadata, Copyright & IPR, Modern Bihar GK & Logical Puzzles',
    isFree: false,
  },
  {
    day: 10,
    title: 'Grand Finale Marathon — 250Q Milestone',
    focus: 'Full-syllabus booster covering high-yield questions across all 5 subjects',
    isFree: false,
  },
];

export default function Marathon() {
  const { isUnlocked, openPaywall } = usePayment();
  const [progress, setProgress] = useState<Record<number, DayProgress>>({});

  useSEO({
    title: '10-Day Exam Marathon (Day 1 to Day 10)',
    description:
      'Practice 25 questions daily from Day 1 to Day 10 for Bihar Librarian LET 2026. Day 1 is 100% Free! Master 250 balanced MCQs with bilingual English and Hindi solutions.',
    canonicalPath: '/marathon',
  });

  // Load progress from localStorage
  useEffect(() => {
    const loaded: Record<number, DayProgress> = {};
    for (let d = 1; d <= 10; d++) {
      try {
        const item = localStorage.getItem(`marathon_day_${d}_score`);
        if (item) {
          loaded[d] = JSON.parse(item);
        }
      } catch (e) {
        // Ignore
      }
    }
    setProgress(loaded);
  }, []);

  const completedCount = Object.keys(progress).length;
  const progressPercent = Math.round((completedCount / 10) * 100);
  const nextActiveDay = Array.from({ length: 10 }, (_, i) => i + 1).find(d => !progress[d]) || 1;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-2xl shadow-md shrink-0">
          🏃
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              10-Day Marathon (Day 1 to Day 10)
            </h1>
            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Practice Sets
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            25 Questions per day · 15 Core Library Science + 10 General Paper · Day 1 is 100% Free!
          </p>
        </div>
      </div>

      {/* Gamified Streak & Progress card */}
      <div className="card p-5 mb-6 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30 flex items-center justify-center text-2xl font-bold shadow-xs">
              🔥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white">
                  {completedCount > 0 ? `${completedCount}-Day Practice Streak!` : 'Start Your Day 1 Streak!'}
                </span>
                <span className="text-[10px] bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 font-bold px-2 py-0.5 rounded-full">
                  STREAK
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {completedCount < 10
                  ? `Target: Complete Day ${nextActiveDay} today to advance your score.`
                  : '🎉 Congratulations! You have completed all 10 Marathon Days!'}
              </p>
            </div>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Curated Questions Solved</div>
            <div className="text-lg sm:text-xl font-extrabold text-amber-600 dark:text-amber-400">
              {completedCount * 25} <span className="text-xs font-semibold text-gray-400">/ 250 Qs</span>
            </div>
          </div>
        </div>

        {/* Progress Bar with Milestones */}
        <div>
          <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 font-semibold mb-1.5">
            <span>Overall Roadmap: {completedCount} / 10 Days</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Promo banner if not unlocked */}
      {!isUnlocked && (
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-900 text-white p-5 shadow-sm border border-brand-700/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-emerald-400 text-slate-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Launch Offer · Just ₹{ACCESS_PRICE_INR}
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                Day 1 is Free · Unlock Days 2 to 10 for ₹{ACCESS_PRICE_INR}
              </h2>
              <p className="text-xs text-brand-200 mt-1 max-w-xl leading-relaxed">
                Take Day 1 completely free right now. Unlock all 10 Marathon Days, 420+ question bank, and 15 timed mock tests with full bilingual explanations.
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
                onClick={() => openPaywall('Unlock all 10 Marathon Practice Sets', 'pay')}
                className="bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Unlock for ₹{ACCESS_PRICE_INR}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10 Days Grid */}
      <div className="space-y-4">
        {MARATHON_DAYS.map(item => {
          const isDayUnlocked = item.isFree || isUnlocked;
          const dayResult = progress[item.day];
          const isNextTarget = item.day === nextActiveDay && !dayResult;

          return (
            <div
              key={item.day}
              className={`card p-5 transition-all border ${
                dayResult
                  ? 'border-green-200 dark:border-green-900/60 bg-green-50/20 dark:bg-green-950/10'
                  : isNextTarget
                  ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-400/30 bg-amber-50/20 dark:bg-amber-950/20 shadow-md'
                  : 'hover:shadow-md hover:border-brand-200 dark:hover:border-brand-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${
                      dayResult
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                        : isNextTarget
                        ? 'bg-amber-400 text-brand-950 font-extrabold shadow-sm'
                        : item.isFree
                        ? 'bg-brand-600 text-white shadow-xs'
                        : isUnlocked
                        ? 'bg-brand-100 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300'
                        : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                    }`}
                  >
                    {dayResult ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      `D${item.day}`
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                        Day {item.day} · Practice Set {item.day}
                      </h3>
                      {isNextTarget && (
                        <span className="text-[10px] bg-amber-400 text-brand-950 font-extrabold px-2 py-0.5 rounded-full animate-pulse shadow-xs">
                          👉 NEXT TARGET
                        </span>
                      )}
                      {item.isFree ? (
                        <span className="text-[10px] bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 font-extrabold px-2 py-0.5 rounded-full">
                          100% FREE
                        </span>
                      ) : !isUnlocked ? (
                        <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> PRO
                        </span>
                      ) : (
                        <span className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-bold px-2 py-0.5 rounded-full">
                          UNLOCKED
                        </span>
                      )}

                      {dayResult && (
                        <span className="text-[10px] bg-green-600 text-white font-bold px-2 py-0.5 rounded-full">
                          Score: {dayResult.score}/{dayResult.total} ({dayResult.date})
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.focus}
                    </div>

                    {/* Metadata pills */}
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Layers className="w-3 h-3 text-brand-600" />
                        25 Questions (15 LS + 10 GP)
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        ~20 Mins
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 sm:self-center">
                  {isDayUnlocked ? (
                    <Link
                      to={`/practice/session?mode=marathon&day=${item.day}`}
                      className={`text-xs px-4 py-2.5 rounded-xl font-bold transition-all flex items-center gap-1.5 shadow-xs ${
                        dayResult
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200'
                          : 'btn-primary'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      {dayResult ? 'Retake Set' : `Start Day ${item.day}`}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        openPaywall(
                          `Unlock Marathon Day ${item.day} and all Practice Sets for ₹${ACCESS_PRICE_INR}`
                        )
                      }
                      className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Unlock for ₹{ACCESS_PRICE_INR}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to Mock Tests */}
      <div className="mt-8 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm">
            Ready for Full Examination Simulation?
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Attempt 15 timed full-length and subject-specific mock tests with real LET timer and ranking analysis.
          </p>
        </div>
        <Link to="/mock-test" className="btn-secondary text-xs py-2 px-4 shrink-0 flex items-center gap-1">
          Go to Mock Tests
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
