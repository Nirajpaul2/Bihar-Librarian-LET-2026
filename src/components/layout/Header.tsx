import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Moon, Sun, Menu, X, Bookmark, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useBookmarks } from '@/hooks/useBookmarks';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import PaywallModal from '@/components/payment/PaywallModal';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/syllabus', label: 'Syllabus & Weightage' },
  { to: '/syllabus?tab=cheatsheet', label: 'Quick Revision' },
  { to: '/syllabus?tab=studyplan', label: '30-Day Plan' },
  { to: '/practice', label: 'Practice' },
  { to: '/mock-test', label: 'Mock Tests' },
  { to: '/current-affairs', label: 'Current Affairs' },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const { count } = useBookmarks();
  const {
    isUnlocked,
    isPaywallOpen,
    paywallContext,
    openPaywall,
    closePaywall,
  } = usePayment();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/' && !location.search;
    if (to.includes('?')) {
      const [path, search] = to.split('?');
      return location.pathname === path && location.search.includes(search);
    }
    return location.pathname.startsWith(to) && !location.search.includes('tab=');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Bihar Library LET 2026 Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-xs bg-white dark:bg-gray-800 p-0.5 border border-gray-100 dark:border-gray-700"
            />
            <div>
              <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-tight tracking-tight">Bihar Library</div>
              <div className="text-[11px] text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider">LET 2026</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Paywall trigger or Unlocked status */}
            {!isUnlocked ? (
              <button
                onClick={() => openPaywall(`Unlock full website access for ₹${ACCESS_PRICE_INR}`)}
                className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold text-xs px-3 py-1.5 rounded-xl shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Unlock for</span> ₹{ACCESS_PRICE_INR}
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full font-bold">
                ⭐ Pro Unlocked
              </span>
            )}

            {/* Bookmarks */}
            <Link
              to="/bookmarks"
              className="relative btn-ghost p-2"
              aria-label={`Bookmarks (${count})`}
            >
              <Bookmark className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="btn-ghost p-2"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden btn-ghost p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 animate-fade-in">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {!isUnlocked && (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openPaywall(`Unlock full website access for ₹${ACCESS_PRICE_INR}`);
                }}
                className="w-full bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold text-xs p-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mb-2"
              >
                <Sparkles className="w-4 h-4" />
                Unlock Full Access for ₹{ACCESS_PRICE_INR} (Unit 1 Free)
              </button>
            )}
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={closePaywall}
        contextText={paywallContext}
      />
    </header>
  );
}
