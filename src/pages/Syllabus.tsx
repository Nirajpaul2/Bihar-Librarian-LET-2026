import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, ChevronRight, BookOpen, Target, Calendar,
  CheckCircle, TrendingUp, Star, Clock, FileText, Zap,
} from 'lucide-react';
import { subjects } from '@/data/subjects';
import { allQuestions } from '@/data/questions';
import { computeTopicCounts } from '@/utils/questions';
import {
  examInfo, parts, libSciWeightageTiers, generalPaperTopics,
  studyPlan, phaseInfo,
} from '@/data/exam-info';

import {
  publicLibraryActs,
  ddcMainClasses,
  pmestCategories,
  fiveLawsOfLibraryScience,
  biharLibraryHeritage,
} from '@/data/cheat-sheets';

const topicCounts = computeTopicCounts(allQuestions);

type ActiveTab = 'overview' | 'weightage' | 'syllabus' | 'studyplan' | 'cheatsheet';

import { useSearchParams } from 'react-router-dom';

export default function Syllabus() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as ActiveTab) || 'overview';
  const [activeTab, setActiveTabState] = useState<ActiveTab>(
    ['overview', 'weightage', 'syllabus', 'studyplan', 'cheatsheet'].includes(initialTab) ? initialTab : 'overview'
  );

  const setActiveTab = (tab: ActiveTab) => {
    setActiveTabState(tab);
    setSearchParams({ tab });
  };

  const [expandedSubject, setExpandedSubject] = useState<string | null>('library-science');
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  const [expandedTier, setExpandedTier] = useState<number | null>(1);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1);

  const tabs: { key: ActiveTab; label: string; icon: string }[] = [
    { key: 'overview',   label: 'Exam Overview', icon: '📋' },
    { key: 'weightage',  label: 'Topic Weightage', icon: '⚖️' },
    { key: 'syllabus',   label: 'Full Syllabus', icon: '📖' },
    { key: 'studyplan',  label: '30-Day Plan', icon: '📅' },
    { key: 'cheatsheet', label: 'Quick Revision', icon: '⚡' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28 md:pb-10">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-3">
          <img
            src="/logo.png"
            alt="Bihar Library LET 2026 Logo"
            className="w-11 h-11 object-contain rounded-xl bg-white p-1 border border-gray-200 dark:border-gray-800 shadow-sm shrink-0"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              Bihar Librarian LET 2026
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Syllabus · Topic Weightage · 30-Day Study Plan
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === tab.key
                ? 'bg-white dark:bg-gray-900 text-brand-700 dark:text-brand-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* ── TAB: OVERVIEW ── */}
      {activeTab === 'overview' && (
        <div className="space-y-5 animate-fade-in">
          {/* Exam at a Glance */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              Exam at a Glance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Conducting Body',  value: 'BSEB',             icon: '🏛️' },
                { label: 'Exam Name',        value: 'LET 2026',          icon: '📋' },
                { label: 'Total Questions',  value: '150',               icon: '❓' },
                { label: 'Total Marks',      value: '150',               icon: '🏆' },
                { label: 'Duration',         value: '120 Minutes',       icon: '⏱️' },
                { label: 'Negative Marking', value: 'None',              icon: '✅' },
                { label: 'Question Type',    value: 'MCQ (Single)',       icon: '🔵' },
                { label: 'Exam Mode',        value: 'Online (CBT)',       icon: '💻' },
                { label: 'Speed Required',   value: '~48 sec/question',  icon: '⚡' },
              ].map(item => (
                <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
              <p className="text-xs text-green-800 dark:text-green-300">
                <strong>No Negative Marking</strong> — Attempt every single question. Never leave any question unanswered.
              </p>
            </div>
          </div>

          {/* Part-wise Distribution */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              Part-wise Mark Distribution
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {parts.map(part => (
                <div key={part.id} className={`rounded-2xl border p-5 ${
                  part.color === 'blue'
                    ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
                    : 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{part.icon}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      part.color === 'blue'
                        ? 'bg-blue-600 text-white'
                        : 'bg-green-600 text-white'
                    }`}>
                      {part.percentage}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 leading-snug">
                    {part.label}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{part.description}</p>
                  <div className="flex gap-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{part.questions}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Questions</div>
                    </div>
                    <div className="w-px bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{part.marks}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Marks</div>
                    </div>
                  </div>
                  {/* Visual bar */}
                  <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${part.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}
                      style={{ width: part.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Paper quick-view */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              General Paper — Subject Breakdown (50 Marks)
            </h2>
            <div className="space-y-3">
              {generalPaperTopics.map(topic => (
                <div key={topic.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl shrink-0">{topic.icon}</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                      {topic.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${topic.badgeClass}`}>
                      {topic.expectedQ} Q
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Golden Strategy */}
          <div className="card p-5 border-brand-200 dark:border-brand-800">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              💡 Golden Strategy to Score High
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Lock Down Classification & Cataloguing First',
                  desc: 'Unit 2 + Unit 3 account for nearly 45% of core paper marks. Master DDC schedules, CC PMEST, and AACR-2 rules above everything else.',
                  badge: '~45% marks',
                  badgeColor: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300',
                },
                {
                  title: 'Memorize Library Legislation Years',
                  desc: 'BSEB frequently tests the year each state passed its Public Library Act. Especially: Tamil Nadu (1948), Andhra Pradesh (1960), Bihar Public Libraries Act (2008).',
                  badge: 'Easy marks',
                  badgeColor: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300',
                },
                {
                  title: 'Attempt ALL 150 Questions',
                  desc: 'No negative marking means guessing is always better than leaving blank. Even on unknown questions, use elimination to pick the best option.',
                  badge: 'No penalty',
                  badgeColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300',
                },
                {
                  title: 'Pace Yourself: 48 Seconds Per Question',
                  desc: '120 minutes ÷ 150 questions = 48 seconds each. Quickly answer known questions, skip and return to difficult ones using the navigator.',
                  badge: '~48 sec/Q',
                  badgeColor: 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300',
                },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                  <div className="w-6 h-6 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap mb-1">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 gap-3">
            <button onClick={() => setActiveTab('weightage')} className="card p-4 text-left hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-brand-700 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-xl">⚖️</div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">View Topic Weightage</div>
                  <div className="text-xs text-gray-400 mt-0.5">Tier-wise priority for each unit</div>
                </div>
              </div>
            </button>
            <button onClick={() => setActiveTab('studyplan')} className="card p-4 text-left hover:shadow-md transition-all hover:border-brand-200 dark:hover:border-brand-700 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-xl">📅</div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">30-Day Study Plan</div>
                  <div className="text-xs text-gray-400 mt-0.5">Daily schedule with core + general tasks</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ── TAB: WEIGHTAGE ── */}
      {activeTab === 'weightage' && (
        <div className="space-y-5 animate-fade-in">
          {/* Intro */}
          <div className="card p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Based on a review of the <strong>BSEB framework</strong> and typical Bihar Librarian LET exam trends.
              The <strong>100-mark Library Science paper</strong> is split into three priority tiers below.
              Study higher tiers first.
            </p>
          </div>

          {/* Library Science Tiers */}
          <div className="mb-2">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-3 flex items-center gap-2">
              📚 Part 1 — Library Science Weightage (100 Marks)
            </h2>
            <div className="space-y-3">
              {libSciWeightageTiers.map(tier => (
                <div key={tier.tier} className={`rounded-2xl border ${tier.borderClass} overflow-hidden`}>
                  <button
                    className={`w-full flex items-center justify-between p-4 text-left ${tier.bgClass} transition-colors`}
                    onClick={() => setExpandedTier(expandedTier === tier.tier ? null : tier.tier)}
                    aria-expanded={expandedTier === tier.tier}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm text-white ${
                        tier.tier === 1 ? 'bg-red-600' : tier.tier === 2 ? 'bg-amber-500' : 'bg-green-600'
                      }`}>
                        T{tier.tier}
                      </div>
                      <div>
                        <div className={`font-bold text-sm ${tier.textClass}`}>{tier.label}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {tier.percentage} · {tier.expectedQuestions}
                        </div>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedTier === tier.tier ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedTier === tier.tier && (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {tier.units.map(unit => (
                        <div key={unit.unitId} className="p-4 bg-white dark:bg-gray-900">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{unit.unitLabel}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tier.badgeClass}`}>
                                  {unit.expectedQ} Questions
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                  unit.priority === 'critical'
                                    ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400'
                                    : unit.priority === 'important'
                                    ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}>
                                  {unit.priority === 'critical' ? '🔴 Critical' : unit.priority === 'important' ? '🟡 Important' : '🟢 Moderate'}
                                </span>
                              </div>
                            </div>
                            <Link
                              to={`/practice?subject=library-science&unit=${unit.unitId}`}
                              className="shrink-0 text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                            >
                              Practice
                            </Link>
                          </div>

                          {/* Key Topics */}
                          <div className="mb-3">
                            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                              Key Topics to Master
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1.5">
                              {unit.keyTopics.map((topic, i) => (
                                <div key={i} className="flex items-start gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                                  <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Strategy */}
                          <div className={`rounded-xl p-3 ${tier.bgClass} border ${tier.borderClass}`}>
                            <p className={`text-xs leading-relaxed ${tier.textClass}`}>
                              <strong>Strategy:</strong> {unit.strategy}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* General Paper Breakdown */}
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-3 flex items-center gap-2">
              🌍 Part 2 — General Paper Breakdown (50 Marks)
            </h2>
            <div className="space-y-3">
              {generalPaperTopics.map(topic => (
                <div key={topic.id} className="card p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{topic.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{topic.label}</div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${topic.badgeClass}`}>
                          {topic.expectedQ} Questions
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/practice?subject=${topic.id === 'gk-current' ? 'general-knowledge' : topic.id === 'bihar-gk' ? 'bihar-gk' : topic.id === 'reasoning' ? 'reasoning' : 'computer'}`}
                      className="shrink-0 text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
                    >
                      Practice
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-1.5">
                    {topic.keyTopics.map((t, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-1.5" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: FULL SYLLABUS ── */}
      {activeTab === 'syllabus' && (
        <div className="space-y-3 animate-fade-in">
          <div className="card p-4 mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Complete subject → unit → topic breakdown. Click any topic to start practicing.
              Question counts shown are from the practice bank.
            </p>
          </div>

          {subjects.map(subject => {
            const subjectQCount = allQuestions.filter(q => q.subject === subject.id).length;
            const isSubjectOpen = expandedSubject === subject.id;

            return (
              <div key={subject.id} className="card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  onClick={() => setExpandedSubject(isSubjectOpen ? null : subject.id)}
                  aria-expanded={isSubjectOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{subject.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{subject.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {subject.units.length} units · {subjectQCount} practice questions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/practice?subject=${subject.id}`}
                      onClick={e => e.stopPropagation()}
                      className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-2.5 py-1 rounded-lg font-medium transition-colors hidden sm:block"
                    >
                      Practice All
                    </Link>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isSubjectOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isSubjectOpen && (
                  <div className="border-t border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
                    {subject.units.map(unit => {
                      const unitQCount = allQuestions.filter(q => q.subject === subject.id && q.unit === unit.id).length;
                      const isUnitOpen = expandedUnit === `${subject.id}-${unit.id}`;
                      return (
                        <div key={unit.id}>
                          <button
                            className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                            onClick={() => setExpandedUnit(isUnitOpen ? null : `${subject.id}-${unit.id}`)}
                            aria-expanded={isUnitOpen}
                          >
                            <div className="flex items-center gap-2">
                              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isUnitOpen ? 'rotate-90' : ''}`} />
                              <div>
                                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{unit.label}</div>
                                <div className="text-xs text-gray-400 mt-0.5">{unit.topics.length} topics · {unitQCount} questions</div>
                              </div>
                            </div>
                            <Link
                              to={`/practice?subject=${subject.id}&unit=${unit.id}`}
                              onClick={e => e.stopPropagation()}
                              className="text-xs text-brand-700 dark:text-brand-400 font-medium hover:underline shrink-0"
                            >
                              Practice
                            </Link>
                          </button>

                          {isUnitOpen && (
                            <div className="bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800">
                              {unit.topics.map(topic => {
                                const count = topicCounts[topic.id] || 0;
                                return (
                                  <div key={topic.id} className="flex items-center justify-between px-8 py-2.5 border-b border-gray-100 dark:border-gray-800/50 last:border-0">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                                      <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{topic.label}</span>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0 ml-3">
                                      <span className="text-xs text-gray-400">{count > 0 ? `${count} Qs` : 'Soon'}</span>
                                      {count > 0 && (
                                        <Link
                                          to={`/practice/session?subject=${subject.id}&topic=${topic.id}&mode=topic`}
                                          className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-2.5 py-1 rounded-lg font-medium transition-colors"
                                        >
                                          Start
                                        </Link>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-center pt-4">
            <Link to="/practice" className="btn-primary">
              <BookOpen className="w-5 h-5" />
              Start Practicing All Topics
            </Link>
          </div>
        </div>
      )}

      {/* ── TAB: 30-DAY STUDY PLAN ── */}
      {activeTab === 'studyplan' && (
        <div className="space-y-5 animate-fade-in">
          {/* Plan overview */}
          <div className="card p-4">
            <h2 className="font-bold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              30-Day Bihar Librarian LET Study Plan
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Daily schedule: <strong>3.5 hours Core Library Science</strong> + <strong>1.5 hours General Paper / Bihar GK</strong>.
              High-yield technical topics first, full mock tests in the final week.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {phaseInfo.map(p => (
                <div key={p.phase} className={`rounded-xl p-3 text-center ${p.lightBg}`}>
                  <div className={`w-7 h-7 ${p.bgClass} text-white rounded-lg flex items-center justify-center text-xs font-bold mx-auto mb-1.5`}>
                    P{p.phase}
                  </div>
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">{p.subtitle}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{p.days}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase-wise Days */}
          {phaseInfo.map(phase => {
            const phaseDays = studyPlan.filter(d => d.phase === phase.phase);
            const isOpen = expandedPhase === phase.phase;
            return (
              <div key={phase.phase} className={`rounded-2xl border overflow-hidden ${phase.lightBg} border-gray-200 dark:border-gray-700`}>
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setExpandedPhase(isOpen ? null : phase.phase)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${phase.bgClass} text-white rounded-xl flex items-center justify-center font-bold text-sm`}>
                      P{phase.phase}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm">
                        {phase.label}: {phase.subtitle}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{phase.days} · {phaseDays.length} days</div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Goal */}
                <div className="px-4 pb-3">
                  <div className="flex items-start gap-2 bg-white/60 dark:bg-gray-900/40 rounded-xl px-3 py-2">
                    <Target className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Goal:</strong> {phase.goal}
                    </p>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    {phaseDays.map(day => (
                      <div key={day.day} className="border-b border-gray-100 dark:border-gray-800 last:border-0 p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 ${phase.bgClass} text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0`}>
                            {day.day}
                          </div>
                          <div className="flex-1 min-w-0">
                            {/* Core task */}
                            <div className="mb-2">
                              <div className="flex items-center gap-1.5 mb-1">
                                <BookOpen className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                                <span className="text-xs font-semibold text-brand-700 dark:text-brand-400 uppercase tracking-wide">
                                  Library Science (3.5 hrs)
                                </span>
                              </div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{day.coreTask}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{day.coreFocus}</p>
                            </div>
                            {/* General task */}
                            <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                              <div className="flex items-center gap-1.5 mb-1">
                                <Zap className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0" />
                                <span className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide">
                                  General Paper (1.5 hrs)
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{day.generalTask}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Take a Mock Test CTA */}
          <div className="card p-5 text-center">
            <Clock className="w-8 h-8 text-brand-600 dark:text-brand-400 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Ready for a Full Mock Test?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Test your preparation with a timed 150-question mock test matching the LET 2026 pattern.
            </p>
            <Link to="/mock-test" className="btn-primary">
              Take Mock Test Now
            </Link>
          </div>
        </div>
      )}

      {/* ── TAB: QUICK REVISION (CHEAT SHEETS) ── */}
      {activeTab === 'cheatsheet' && (
        <div className="space-y-6 animate-fade-in">
          {/* Dr. S. R. Ranganathan & Five Laws */}
          <div className="card p-5 border-brand-200 dark:border-brand-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-700 text-white flex items-center justify-center text-sm font-bold">
                SRR
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white text-base">
                  Dr. S. R. Ranganathan & Five Laws of Library Science (1931)
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Father of Library Science in India · Fundamental Tenets for Bihar Librarian LET
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {fiveLawsOfLibraryScience.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded-md">
                      {item.law}
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      "{item.title}"
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                    <strong className="text-gray-700 dark:text-gray-300">Exam Implications:</strong> {item.implications}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Master Table: Indian Public Library Acts */}
          <div className="card p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white text-base">
                  📜 Master Table: Indian Public Library Acts (19 States & Years)
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Chronological order — Frequently tested in Bihar Librarian Exams
                </p>
              </div>
              <span className="text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-2.5 py-1 rounded-full self-start sm:self-auto">
                ★ Bihar: 2008
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3 font-semibold">State / Region</th>
                    <th className="py-2.5 px-3 font-semibold">Year</th>
                    <th className="py-2.5 px-3 font-semibold">Official Act Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {publicLibraryActs.map((act, index) => (
                    <tr
                      key={act.state}
                      className={
                        act.isBihar
                          ? 'bg-amber-50 dark:bg-amber-950/40 font-bold text-brand-900 dark:text-amber-200'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/40'
                      }
                    >
                      <td className="py-2 px-3 text-gray-400">{index + 1}</td>
                      <td className="py-2 px-3">
                        {act.state}
                        {act.isBihar && (
                          <span className="ml-2 text-[10px] bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 px-1.5 py-0.5 rounded font-bold">
                            ★ KEY BIHAR ACT
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3">
                        <span className="font-semibold text-brand-700 dark:text-brand-300">{act.year}</span>
                      </td>
                      <td className="py-2 px-3 text-gray-600 dark:text-gray-400">{act.actName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DDC 10 Main Classes & Colon Classification PMEST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* DDC */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                🔢 DDC 10 Main Classes (000–900)
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Melvil Dewey (1876)</p>
              <div className="space-y-1.5 text-xs">
                {ddcMainClasses.map(ddc => (
                  <div key={ddc.code} className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/40">
                    <span className="font-mono font-bold text-brand-700 dark:text-brand-300 w-10 shrink-0">
                      {ddc.code}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{ddc.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CC PMEST */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                🧬 Colon Classification (CC) PMEST
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">S. R. Ranganathan (6th Edition)</p>
              <div className="space-y-2 text-xs">
                {pmestCategories.map(cat => (
                  <div key={cat.facet} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-900 dark:text-white">{cat.facet}</span>
                      <span className="font-mono font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2 py-0.5 rounded">
                        {cat.symbol}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed">{cat.example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bihar Library Heritage */}
          <div className="card p-5">
            <h2 className="font-bold text-gray-900 dark:text-white text-base mb-3">
              🏛️ Bihar Library Heritage & Landmark Institutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {biharLibraryHeritage.map(lib => (
                <div key={lib.name} className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl mb-2 block">{lib.icon}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xs mb-1">{lib.name}</h3>
                    <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mb-1.5">{lib.established}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{lib.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
