import { Link } from 'react-router-dom';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 mt-16 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="Bihar Library LET 2026 Logo"
                className="w-10 h-10 object-contain rounded-xl bg-white p-0.5 shadow-sm"
              />
              <div>
                <div className="font-bold text-white text-base leading-tight">Bihar Library</div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">LET 2026</div>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prepare Smart. Practice Daily. Crack Bihar Librarian Eligibility Test 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/syllabus', label: 'Exam Overview & Syllabus' },
                { to: '/syllabus?tab=weightage', label: '⚖️ Topic Weightage Analysis' },
                { to: '/syllabus?tab=studyplan', label: '📅 30-Day Study Plan' },
                { to: '/practice', label: 'Practice Questions' },
                { to: '/mock-test', label: 'Full Mock Tests (150Q)' },
                { to: '/current-affairs', label: 'Current Affairs' },
                { to: '/bookmarks', label: 'Saved Bookmarks' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Subjects</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/practice?subject=library-science', label: '📚 Library Science (100M)' },
                { to: '/practice?subject=general-knowledge', label: '🌏 General Knowledge' },
                { to: '/practice?subject=bihar-gk', label: '🏛️ Bihar GK' },
                { to: '/practice?subject=reasoning', label: '🧩 Reasoning Ability' },
                { to: '/practice?subject=computer', label: '💻 Computer Awareness' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Official Portals</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: 'https://biharboardonline.bihar.gov.in/', label: 'BSEB Official Portal' },
                { href: 'https://www.bpsc.bih.nic.in/', label: 'BPSC Official Website' },
                { href: 'https://education.bihar.gov.in/', label: 'Bihar Education Dept.' },
                { href: 'https://inflibnet.ac.in/', label: 'INFLIBNET (UGC)' },
                { href: 'https://ndl.gov.in/', label: 'National Digital Library (NDLI)' },
              ].map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {l.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
          <span>© 2026 Bihar Librarian Vacancy 2026 Preparation Platform. For educational purposes only.</span>
          <span className="flex items-center gap-1">
            <Github className="w-3.5 h-3.5" />
            Open Source Project
          </span>
        </div>
      </div>
    </footer>
  );
}
