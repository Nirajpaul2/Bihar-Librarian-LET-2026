import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, ClipboardList, Bookmark, Newspaper } from 'lucide-react';

const mobileNav = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/practice', label: 'Practice', Icon: BookOpen },
  { to: '/mock-test', label: 'Tests', Icon: ClipboardList },
  { to: '/current-affairs', label: 'News', Icon: Newspaper },
  { to: '/bookmarks', label: 'Saved', Icon: Bookmark },
];

export default function MobileNav() {
  const location = useLocation();

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  // Hide on active practice/test session screens
  const hiddenRoutes = ['/practice/session', '/mock-test/active'];
  if (hiddenRoutes.some(r => location.pathname.startsWith(r))) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 safe-area-pb">
      <div className="flex">
        {mobileNav.map(({ to, label, Icon }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors touch-manipulation ${
                active
                  ? 'text-brand-700 dark:text-brand-400'
                  : 'text-gray-500 dark:text-gray-500'
              }`}
              aria-label={label}
            >
              <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className={`text-[10px] font-medium ${active ? 'font-semibold' : ''}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
