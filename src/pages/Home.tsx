import { Link } from 'react-router-dom';
import {
  BookOpen, Brain, Trophy, Bookmark, ChevronRight, ArrowRight,
  GraduationCap, Sparkles, Lock, ShieldCheck, Check, Zap,
} from 'lucide-react';
import { allQuestions } from '@/data/questions';
import { subjects } from '@/data/subjects';
import { mockTests } from '@/data/mock-tests';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import { fiveLawsOfLibraryScience, biharLibraryHeritage } from '@/data/cheat-sheets';

const stats = [
  { label: 'Practice Questions', value: allQuestions.length.toString(), icon: '❓' },
  { label: 'Mock Tests', value: mockTests.length.toString(), icon: '📋' },
  { label: 'Subjects', value: subjects.length.toString(), icon: '📚' },
  { label: 'Topics Covered', value: subjects.reduce((a, s) => a + s.units.reduce((b, u) => b + u.topics.length, 0), 0).toString(), icon: '🎯' },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Topic-wise Practice',
    description: 'Practice MCQs by subject, unit or topic with instant feedback and detailed explanations.',
    color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Timed Mock Tests',
    description: 'Take full-length mock tests with a real exam timer, question navigation and result analysis.',
    color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Smart Study & Syllabus',
    description: 'Browse the complete syllabus, understand topic weightage and follow our 30-day study plan.',
    color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400',
  },
  {
    icon: <Bookmark className="w-6 h-6" />,
    title: 'Save Difficult Questions',
    description: 'Bookmark tricky questions and practice them separately to strengthen weak areas.',
    color: 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400',
  },
];

export default function Home() {
  const { isUnlocked, openPaywall } = usePayment();

  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Logo & Badge */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Bihar Library LET 2026 Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-2xl bg-white p-1.5 shadow-xl shrink-0 border border-white/20"
              />
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-brand-200" />
                <span>Bihar Librarian LET 2026 (BSEB)</span>
                <span className="hidden sm:inline text-brand-300">· 150 Marks · No Negative Marking</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Prepare Smart.<br />
              <span className="text-brand-200">Practice Daily.</span><br />
              Crack Bihar Librarian LET 2026.
            </h1>

            <p className="text-brand-100 text-base sm:text-lg mb-8 leading-relaxed">
              Targeted preparation for 100 Marks Library Science + 50 Marks General Paper with topic-wise weightage, 
              30-day structured study plan, and timed exam simulators. <strong>Unit 1 is 100% Free!</strong>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/practice?subject=library-science&unit=foundations" className="bg-white text-brand-800 hover:bg-brand-50 font-semibold rounded-xl px-6 py-3 inline-flex items-center gap-2 transition-colors shadow-lg">
                <BookOpen className="w-5 h-5" />
                Practice Free Unit 1
              </Link>
              {!isUnlocked ? (
                <button
                  onClick={() => openPaywall(`Unlock all Units & Mock Tests for ₹${ACCESS_PRICE_INR}`)}
                  className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold rounded-xl px-6 py-3 inline-flex items-center gap-2 transition-colors shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  Unlock All for ₹{ACCESS_PRICE_INR}
                </button>
              ) : (
                <Link to="/mock-test" className="bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-xl px-6 py-3 inline-flex items-center gap-2 transition-colors">
                  <Trophy className="w-5 h-5" />
                  Full Mock Tests
                </Link>
              )}
              <Link to="/syllabus?tab=weightage" className="bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-xl px-6 py-3 inline-flex items-center gap-2 transition-colors">
                Weightage & Plan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Freemium Highlight Strip */}
      {!isUnlocked && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-brand-950 py-3 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="bg-brand-950 text-white text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full">
                Special Offer
              </span>
              <span>
                Unit 1 (Foundations) is 100% Free! Unlock all remaining units & 150Q Mock Tests for just <strong>₹{ACCESS_PRICE_INR}</strong> (One-time lifetime access).
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => openPaywall('Restore your access', 'restore')}
                className="bg-amber-600/30 hover:bg-amber-600/40 text-brand-950 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors cursor-pointer border border-brand-950/20"
              >
                Already Paid? Restore
              </button>
              <button
                onClick={() => openPaywall(`Unlock Full Access for ₹${ACCESS_PRICE_INR}`, 'pay')}
                className="bg-brand-900 hover:bg-brand-800 text-white font-bold px-4 py-1.5 rounded-xl text-xs transition-colors shrink-0 shadow flex items-center gap-1 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                Pay ₹{ACCESS_PRICE_INR} & Unlock
              </button>
            </div>
          </div>
        </div>
      )}

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
                📅 30-Day Plan
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

      {/* Dr. S. R. Ranganathan & Five Laws Feature Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="card p-6 sm:p-8 bg-gradient-to-br from-white to-blue-50/40 dark:from-gray-900 dark:to-gray-800/40 border border-brand-100 dark:border-brand-900/60 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                SRR
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Dr. S. R. Ranganathan & Five Laws of Library Science
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  The intellectual foundation of Indian Library Science (1931) · Core exam questions
                </p>
              </div>
            </div>
            <Link
              to="/syllabus?tab=cheatsheet"
              className="text-xs font-semibold text-brand-700 dark:text-brand-400 hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              Open Full Revision Tables <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {fiveLawsOfLibraryScience.slice(0, 3).map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/60 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold bg-brand-100 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded-full">
                    {item.law}
                  </span>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mt-1.5 mb-1">
                    "{item.title}"
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.implications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-brand-700 dark:text-brand-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
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

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Everything You Need to Prepare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(f => (
              <div key={f.title} className="card p-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Mock Tests CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-brand-700 to-brand-600 rounded-2xl p-8 text-white text-center">
          <Trophy className="w-10 h-10 mx-auto mb-4 text-brand-200" />
          <h2 className="text-xl font-bold mb-2">Ready for a Full LET Mock Test?</h2>
          <p className="text-brand-100 text-sm mb-6 max-w-md mx-auto">
            Test your preparation with timed mock tests covering all subjects. Get instant results and review your answers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/mock-test" className="bg-white text-brand-800 hover:bg-brand-50 font-semibold rounded-xl px-8 py-3 inline-flex items-center gap-2 transition-colors">
              <Trophy className="w-5 h-5" />
              Browse Mock Tests
            </Link>
            {!isUnlocked && (
              <button
                onClick={() => openPaywall(`Unlock all Mock Tests for ₹${ACCESS_PRICE_INR}`)}
                className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold rounded-xl px-6 py-3 inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                Unlock for ₹{ACCESS_PRICE_INR}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Current Affairs teaser */}
      <section className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Affairs</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Stay updated with relevant library and Bihar news</p>
            </div>
            <Link to="/current-affairs" className="text-sm text-brand-700 dark:text-brand-400 font-medium flex items-center gap-1 hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'NDLI Expansion to 90M+ Resources', category: 'India', date: 'Aug 2026', icon: '📚' },
              { title: 'Bihar Librarian Recruitment 2026 Announced', category: 'Bihar', date: 'Jun 2026', icon: '📋' },
              { title: 'e-Granthalaya 4.0 Released by NIC', category: 'Tech', date: 'Jul 2026', icon: '💻' },
            ].map(item => (
              <Link key={item.title} to="/current-affairs" className="card p-4 hover:shadow-md transition-all group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400 px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
