import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Trophy, ChevronRight, ArrowRight,
  GraduationCap, Sparkles, Lock, CheckCircle2, XCircle
} from 'lucide-react';
import { allQuestions } from '@/data/questions';
import { subjects } from '@/data/subjects';
import { mockTests } from '@/data/mock-tests';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import { useSEO } from '@/hooks/useSEO';

export default function Home() {
  const { isUnlocked, openPaywall } = usePayment();
  const [selectedDemoOpt, setSelectedDemoOpt] = useState<string | null>(null);
  const [showDemoExplanation, setShowDemoExplanation] = useState(false);

  const handleDemoSelect = (opt: string) => {
    setSelectedDemoOpt(opt);
    setShowDemoExplanation(true);
  };

  useSEO({
    title: 'Home — Exam Prep Portal',
    description: 'Comprehensive preparation for BSEB Bihar Librarian LET 2026. Practice Unit 1 free, revise Dr. Ranganathan 5 Laws, classification, cataloguing, and full 150Q mock tests.',
    canonicalPath: '/',
  });

  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brand & Hero CTAs (7 cols) */}
            <div className="lg:col-span-7">
              {/* Logo & Badge */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5">
                <img
                  src="/logo.png"
                  alt="Bihar Library LET 2026 Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-2xl bg-white p-1.5 shadow-xl shrink-0 border border-white/20"
                />
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-200 border border-red-500/40 rounded-full px-3 py-1 text-xs font-bold animate-pulse">
                    <span>🚨</span>
                    <span>BPSC Exam Announced: 10 Days Left</span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-200" />
                    <span>150 Marks · No Negative Marking</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
                Prepare Smart.<br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
                  Practice Daily.
                </span><br />
                Crack Bihar Librarian LET 2026.
              </h1>

              <p className="text-brand-100 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
                420+ Curated Bilingual MCQs covering <strong>100 Marks Library Science Core</strong> + <strong>50 Marks General Paper</strong> (Bihar GK, Reasoning, Computer) with instant Devanagari Hindi solutions. <strong>Unit 1 & Day 1 are 100% Free!</strong>
              </p>

              {/* Quick stats badges */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 max-w-lg">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 sm:p-3 text-center">
                  <div className="text-base sm:text-xl font-extrabold text-white">{allQuestions.length}+</div>
                  <div className="text-[10px] sm:text-xs text-brand-200 font-medium">Bilingual MCQs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 sm:p-3 text-center">
                  <div className="text-base sm:text-xl font-extrabold text-amber-300">10 Days</div>
                  <div className="text-[10px] sm:text-xs text-brand-200 font-medium">Daily Marathon</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 sm:p-3 text-center">
                  <div className="text-base sm:text-xl font-extrabold text-emerald-300">{mockTests.length} Tests</div>
                  <div className="text-[10px] sm:text-xs text-brand-200 font-medium">Timed LET Mocks</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/marathon" className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-brand-950 font-extrabold rounded-xl px-5 py-3 inline-flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 text-sm transform hover:-translate-y-0.5">
                  <span>🏃</span>
                  <span>10-Day Marathon</span>
                  <span className="bg-brand-950/20 text-brand-950 px-2 py-0.5 rounded text-[10px] font-bold">FREE</span>
                </Link>
                <Link to="/practice?subject=library-science&unit=foundations" className="bg-white text-brand-800 hover:bg-brand-50 font-semibold rounded-xl px-4 py-3 inline-flex items-center gap-2 transition-colors shadow-lg text-sm">
                  <BookOpen className="w-4 h-4" />
                  Practice Free Unit 1
                </Link>
                {!isUnlocked ? (
                  <button
                    onClick={() => openPaywall(`Unlock all Units & Mock Tests for ₹${ACCESS_PRICE_INR}`)}
                    className="bg-brand-800/90 hover:bg-brand-700 text-brand-100 font-bold rounded-xl px-4 py-3 inline-flex items-center gap-2 transition-colors border border-brand-500/50 cursor-pointer text-sm"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    Unlock All for ₹{ACCESS_PRICE_INR}
                  </button>
                ) : (
                  <Link to="/mock-test" className="bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-xl px-4 py-3 inline-flex items-center gap-2 transition-colors text-sm">
                    <Trophy className="w-4 h-4 text-amber-300" />
                    15 Mock Tests
                  </Link>
                )}
                <Link to="/syllabus?tab=weightage" className="bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-xl px-3.5 py-3 inline-flex items-center gap-1.5 transition-colors text-xs text-brand-100">
                  Weightage
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Live Bilingual Practice Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl relative text-left">
                
                {/* Card Top Label */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 bg-amber-400 text-brand-950 font-extrabold px-2.5 py-0.5 rounded-full text-[10px]">
                    <Sparkles className="w-3 h-3" />
                    LIVE INTERACTIVE DEMO · DAY 1
                  </span>
                  <span className="text-brand-200 text-[11px] font-mono">
                    LET 2026 Sample
                  </span>
                </div>

                {/* Bilingual Question text */}
                <div className="space-y-1.5 mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    The word "Library" is derived from the Latin word:
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-amber-200 leading-snug">
                    "लाइब्रेरी" (Library) शब्द लैटिन भाषा के किस मूल शब्द से उत्पन्न हुआ है?
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2 text-xs">
                  {[
                    { key: 'A', en: 'Liber', hi: 'लिबर (Liber)', isCorrect: true },
                    { key: 'B', en: 'Libre', hi: 'लिब्रे (Libre)', isCorrect: false },
                    { key: 'C', en: 'Libraria', hi: 'लाइब्रेरिया (Libraria)', isCorrect: false },
                    { key: 'D', en: 'Libros', hi: 'लिबरोस (Libros)', isCorrect: false },
                  ].map(opt => {
                    const isSelected = selectedDemoOpt === opt.key;
                    let btnStyle = 'bg-white/10 hover:bg-white/20 border-white/20 text-white';
                    if (selectedDemoOpt) {
                      if (opt.isCorrect) {
                        btnStyle = 'bg-emerald-600/90 border-emerald-400 text-white font-bold shadow-sm';
                      } else if (isSelected && !opt.isCorrect) {
                        btnStyle = 'bg-rose-600/90 border-rose-400 text-white font-bold';
                      } else {
                        btnStyle = 'bg-white/5 border-white/10 text-white/60';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleDemoSelect(opt.key)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-white/20 text-[11px] font-bold flex items-center justify-center shrink-0">
                            {opt.key}
                          </span>
                          <span className="text-xs">{opt.hi}</span>
                        </div>
                        {selectedDemoOpt && opt.isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
                        )}
                        {selectedDemoOpt && isSelected && !opt.isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-200 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {showDemoExplanation && (
                  <div className="mt-3.5 p-3.5 bg-emerald-950/70 border border-emerald-500/50 rounded-xl text-xs space-y-1 animate-fade-in">
                    <div className="font-bold text-emerald-300 flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Correct: Option A (Liber / लिबर)</span>
                    </div>
                    <p className="text-brand-100 text-[11px] leading-relaxed">
                      "Library" शब्द लैटिन भाषा के <strong>"Liber"</strong> शब्द से बना है, जिसका शाब्दिक अर्थ 'पुस्तक' या 'पेड़ की भीतरी छाल' होता है।
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to="/marathon"
                        className="text-[11px] font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 underline underline-offset-2"
                      >
                        <span>Start Complete Day 1 Marathon (Free) →</span>
                      </Link>
                    </div>
                  </div>
                )}

                {!showDemoExplanation && (
                  <div className="text-[11px] text-brand-200/80 text-center mt-3">
                    👆 Click any option above to test instant feedback!
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10-Day Marathon Track (Practice Sets 1-10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center text-xl shrink-0">
                🏃
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    10-Day Exam Marathon (Practice Sets 1–10)
                  </h2>
                  <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-extrabold px-2 py-0.5 rounded-full uppercase">
                    Daily 25 Qs
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  15 Core Library Science + 10 General Paper (Bihar GK, Reasoning, Computer, GK) · Day 1 is 100% Free!
                </p>
              </div>
            </div>
            <Link
              to="/marathon"
              className="text-xs font-bold text-brand-700 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Full Marathon Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {Array.from({ length: 10 }, (_, i) => i + 1).map(dayNum => {
              const isDayFree = dayNum === 1;
              const hasAccess = isDayFree || isUnlocked;

              return (
                <div
                  key={dayNum}
                  className={`card p-3.5 rounded-2xl flex flex-col justify-between transition-all ${
                    isDayFree
                      ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/20'
                      : 'hover:border-brand-200 dark:hover:border-brand-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-gray-900 dark:text-white">
                        Day {dayNum}
                      </span>
                      {isDayFree ? (
                        <span className="text-[9px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 font-extrabold px-1.5 py-0.5 rounded">
                          FREE
                        </span>
                      ) : hasAccess ? (
                        <span className="text-[9px] bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-bold px-1.5 py-0.5 rounded">
                          PRO
                        </span>
                      ) : (
                        <Lock className="w-3 h-3 text-amber-500" />
                      )}
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                      Practice Set {dayNum} · 25 Qs
                    </div>
                  </div>

                  <div className="mt-3.5">
                    {hasAccess ? (
                      <Link
                        to={`/practice/session?mode=marathon&day=${dayNum}`}
                        className={`w-full text-center block text-xs font-bold py-1.5 rounded-xl transition-colors ${
                          isDayFree ? 'btn-primary' : 'bg-brand-600 hover:bg-brand-700 text-white'
                        }`}
                      >
                        Start
                      </Link>
                    ) : (
                      <button
                        onClick={() => openPaywall(`Unlock Marathon Day ${dayNum} for ₹${ACCESS_PRICE_INR}`)}
                        className="w-full text-center block text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white py-1.5 rounded-xl transition-colors cursor-pointer"
                      >
                        Unlock
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Framework & Weightage Snapshot Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-3 py-1 rounded-full mb-2">
                <span>📊 BSEB LET 2026 Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Exam Pattern & Topic Weightage Breakdown
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Strict 150 Questions · 150 Marks · 120 Minutes · No Negative Marking
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/syllabus?tab=cheatsheet"
                className="text-xs font-semibold bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-3.5 py-2 rounded-xl border border-blue-200 dark:border-blue-800 transition-colors"
              >
                ⚡ Quick Revision Tables
              </Link>
              <Link
                to="/syllabus?tab=weightage"
                className="text-xs font-semibold bg-brand-50 hover:bg-brand-100 dark:bg-brand-950/40 dark:hover:bg-brand-900/60 text-brand-700 dark:text-brand-300 px-3.5 py-2 rounded-xl border border-brand-200 dark:border-brand-800 transition-colors"
              >
                ⚖️ Tier Priority
              </Link>
              <Link
                to="/syllabus?tab=studyplan"
                className="text-xs font-semibold bg-green-50 hover:bg-green-100 dark:bg-green-950/40 dark:hover:bg-green-900/60 text-green-700 dark:text-green-300 px-3.5 py-2 rounded-xl border border-green-200 dark:border-green-800 transition-colors"
              >
                ⚡ 10-Day Sprint Plan
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Part 1 Box */}
            <div className="rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-blue-600 text-white px-2.5 py-1 rounded-full">
                  PART 1 — 100 MARKS (66.6%)
                </span>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">100 Questions</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Library & Information Science (Core)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Standard B.Lib.Sc concepts prioritizing practical classification, cataloguing, and modern digital library management.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-blue-100 dark:border-blue-900/40 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-red-600 dark:text-red-400">Tier 1 (~45% of Core):</span> Knowledge Organisation & Management
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">40–47 Qs</span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-blue-100 dark:border-blue-900/40 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">Tier 2 (~35% of Core):</span> Foundations, IT & Networks
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">27–33 Qs</span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-blue-100 dark:border-blue-900/40 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-green-600 dark:text-green-400">Tier 3 (~20% of Core):</span> Reference & Information Services
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">10–12 Qs</span>
                </div>
              </div>
            </div>

            {/* Part 2 Box */}
            <div className="rounded-2xl border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/20 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-green-600 text-white px-2.5 py-1 rounded-full">
                  PART 2 — 50 MARKS (33.4%)
                </span>
                <span className="text-xs font-semibold text-green-700 dark:text-green-300">50 Questions</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                General Paper (Non-Technical)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Evaluates state awareness, basic cognitive reasoning, everyday technological literacy, and Indian national movement.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-green-100 dark:border-green-900/40 flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-gray-200">🌍 General Knowledge & Current Affairs</span>
                  <span className="font-bold text-gray-800 dark:text-gray-200">15–20 Qs</span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-green-100 dark:border-green-900/40 flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-gray-200">🏛️ Bihar State GK & Schemes</span>
                  <span className="font-bold text-gray-800 dark:text-gray-200">10–12 Qs</span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-green-100 dark:border-green-900/40 flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-gray-200">🧩 Reasoning & Analytical Ability</span>
                  <span className="font-bold text-gray-800 dark:text-gray-200">10–12 Qs</span>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2.5 border border-green-100 dark:border-green-900/40 flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-gray-200">💻 Basic Computer Awareness</span>
                  <span className="font-bold text-gray-800 dark:text-gray-200">8–10 Qs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Practice by Subject</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Unit 1 (Foundations) is 100% Free to practice</p>
          </div>
          <Link to="/practice" className="text-sm text-brand-700 dark:text-brand-400 font-medium flex items-center gap-1 hover:underline">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(subject => {
            const qCount = allQuestions.filter(q => q.subject === subject.id).length;
            const isLibSci = subject.id === 'library-science';

            return (
              <Link
                key={subject.id}
                to={`/practice?subject=${subject.id}`}
                className="card p-5 hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-brand-700 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{subject.icon}</div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{subject.label}</h3>
                  {isLibSci && (
                    <span className="text-[10px] bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 font-bold px-2 py-0.5 rounded-full">
                      UNIT 1 FREE
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed line-clamp-2">{subject.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-1 rounded-full">
                    {qCount} questions
                  </span>
                  <span className="text-xs text-gray-400">{subject.units.length} units</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Compact Bottom Mock Tests Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-r from-brand-900 via-indigo-900 to-brand-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-700/60 shadow-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center text-2xl shrink-0">
              📋
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                Ready for Timed LET Examination Simulation?
              </h3>
              <p className="text-xs sm:text-sm text-brand-200 mt-0.5">
                Practice 15 Full-Length & Subject-wise Mock Tests with real exam timer, question palette, and detailed scorecards.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/mock-test"
              className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow cursor-pointer flex items-center gap-1.5"
            >
              <Trophy className="w-4 h-4" />
              <span>Browse 15 Mock Tests →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
