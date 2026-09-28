import { useState } from 'react';
import { currentAffairs } from '@/data/current-affairs';
import type { CACategory } from '@/types';
import { ExternalLink, Calendar } from 'lucide-react';

const categories: { key: CACategory | 'all'; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '🌐' },
  { key: 'india', label: 'India', emoji: '🇮🇳' },
  { key: 'bihar', label: 'Bihar', emoji: '🏛️' },
  { key: 'world', label: 'World', emoji: '🌍' },
  { key: 'science', label: 'Science', emoji: '🔬' },
  { key: 'schemes', label: 'Schemes', emoji: '📋' },
  { key: 'awards', label: 'Awards', emoji: '🏆' },
  { key: 'economy', label: 'Economy', emoji: '💰' },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

const categoryColors: Record<string, string> = {
  india: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
  bihar: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300',
  world: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  science: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
  schemes: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
  awards: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  sports: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
  economy: 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300',
};

export default function CurrentAffairs() {
  const [activeCategory, setActiveCategory] = useState<CACategory | 'all'>('all');

  const filtered = activeCategory === 'all'
    ? currentAffairs
    : currentAffairs.filter(item => item.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">📰 Current Affairs</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Stay updated with latest news relevant to the Bihar Librarian Exam — Library Science, Bihar, India and World events.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key as any)}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
              activeCategory === cat.key
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-4">
        {sorted.map(item => (
          <div key={item.id} className="card p-5 hover:shadow-md transition-all">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-700'}`}>
                  {categories.find(c => c.key === item.category)?.emoji}{' '}
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(item.date)}
                </span>
              </div>
            </div>

            <h2 className="font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
              {item.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {item.summary}
            </p>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {item.source && (
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                Source: {item.source}
              </div>
            )}
          </div>
        ))}

        {sorted.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">📭</div>
            <p>No current affairs in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
