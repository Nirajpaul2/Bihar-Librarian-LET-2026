import { useState, useCallback } from 'react';

const STORAGE_KEY = 'bpsc-bookmarks';

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function saveBookmarks(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks);

  const toggle = useCallback((questionId: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      saveBookmarks(next);
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (questionId: string) => bookmarks.has(questionId),
    [bookmarks]
  );

  const clearAll = useCallback(() => {
    const empty = new Set<string>();
    saveBookmarks(empty);
    setBookmarks(empty);
  }, []);

  return { bookmarks, toggle, isBookmarked, clearAll, count: bookmarks.size };
}
