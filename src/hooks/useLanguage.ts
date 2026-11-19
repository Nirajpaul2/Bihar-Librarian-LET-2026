import { useState, useEffect } from 'react';

export type LanguageMode = 'hi' | 'en' | 'bilingual';

const STORAGE_KEY = 'bpsc-librarian-lang-mode';
const LANG_CHANGE_EVENT = 'bpsc-lang-change-event';

export function useLanguage() {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LanguageMode;
      if (saved === 'hi' || saved === 'en' || saved === 'bilingual') {
        return saved;
      }
    } catch {}
    // Default to 'bilingual' so Hindi is prominently displayed alongside English out-of-the-box!
    return 'bilingual';
  });

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: lang }));
  };

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent)?.detail;
      if (detail && (detail === 'hi' || detail === 'en' || detail === 'bilingual')) {
        setLanguageState(detail);
      }
    };

    window.addEventListener(LANG_CHANGE_EVENT, handleLangChange);
    return () => window.removeEventListener(LANG_CHANGE_EVENT, handleLangChange);
  }, []);

  return { language, setLanguage };
}
