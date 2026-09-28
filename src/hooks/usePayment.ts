import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bpsc_librarian_full_access_v1';
const PAYMENT_DETAILS_KEY = 'bpsc_librarian_payment_info_v1';

// Custom event identifiers for cross-component and cross-tab sync
const EVENT_PAYWALL_OPEN = 'bpsc_open_paywall_event';
const EVENT_PAYWALL_CLOSE = 'bpsc_close_paywall_event';
const EVENT_PAYMENT_STATE_CHANGE = 'bpsc_payment_state_change';

// Default Razorpay Key ID (supports env override)
export const RAZORPAY_KEY_ID =
  import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_TDeXjTGJZV2T7v';

export const RAZORPAY_FALLBACK_LINK = 'https://rzp.io/rzp/f8vkVi7Y';
export const ACCESS_PRICE_INR = 9;

export interface PaymentInfo {
  paymentId: string;
  unlockedAt: string;
  amount: number;
  method?: string;
}

export type PaywallTab = 'pay' | 'restore';

export function usePayment() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(() => {
    try {
      const data = localStorage.getItem(PAYMENT_DETAILS_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });

  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [paywallContext, setPaywallContext] = useState<string>('');
  const [paywallInitialTab, setPaywallInitialTab] = useState<PaywallTab>('pay');

  // Synchronize state across tabs and components
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const unlocked = localStorage.getItem(STORAGE_KEY) === 'true';
        setIsUnlocked(unlocked);
        const data = localStorage.getItem(PAYMENT_DETAILS_KEY);
        setPaymentInfo(data ? JSON.parse(data) : null);
      } catch {}
    };

    const handleOpenPaywallEvent = (e: Event) => {
      const detail = (e as CustomEvent)?.detail || {};
      setPaywallContext(detail.context || '');
      setPaywallInitialTab(detail.tab || 'pay');
      setIsPaywallOpen(true);
    };

    const handleClosePaywallEvent = () => {
      setIsPaywallOpen(false);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(EVENT_PAYMENT_STATE_CHANGE, handleStorageChange);
    window.addEventListener(EVENT_PAYWALL_OPEN, handleOpenPaywallEvent);
    window.addEventListener(EVENT_PAYWALL_CLOSE, handleClosePaywallEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(EVENT_PAYMENT_STATE_CHANGE, handleStorageChange);
      window.removeEventListener(EVENT_PAYWALL_OPEN, handleOpenPaywallEvent);
      window.removeEventListener(EVENT_PAYWALL_CLOSE, handleClosePaywallEvent);
    };
  }, []);

  const openPaywall = useCallback((contextText = '', initialTab: PaywallTab = 'pay') => {
    setPaywallContext(contextText);
    setPaywallInitialTab(initialTab);
    setIsPaywallOpen(true);
    // Broadcast event to ensure root modal opens if rendered at root
    window.dispatchEvent(
      new CustomEvent(EVENT_PAYWALL_OPEN, {
        detail: { context: contextText, tab: initialTab },
      })
    );
  }, []);

  const closePaywall = useCallback(() => {
    setIsPaywallOpen(false);
    window.dispatchEvent(new CustomEvent(EVENT_PAYWALL_CLOSE));
  }, []);

  const unlockFullAccess = useCallback((paymentId: string, method = 'Razorpay UPI/Card') => {
    const info: PaymentInfo = {
      paymentId,
      unlockedAt: new Date().toISOString(),
      amount: ACCESS_PRICE_INR,
      method,
    };
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(PAYMENT_DETAILS_KEY, JSON.stringify(info));
    } catch (e) {
      console.error('Failed to save unlock status:', e);
    }
    setIsUnlocked(true);
    setPaymentInfo(info);
    window.dispatchEvent(new CustomEvent(EVENT_PAYMENT_STATE_CHANGE));
  }, []);

  const resetAccess = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(PAYMENT_DETAILS_KEY);
    } catch {}
    setIsUnlocked(false);
    setPaymentInfo(null);
    window.dispatchEvent(new CustomEvent(EVENT_PAYMENT_STATE_CHANGE));
  }, []);

  const restoreAccess = useCallback((query: string): { success: boolean; message: string; paymentId?: string } => {
    const raw = query.trim();
    if (!raw) {
      return { success: false, message: 'Please enter your Razorpay Payment ID or mobile number.' };
    }

    // Clean up input: remove spaces, hyphens, country code prefix (+91 or 91)
    let cleaned = raw.replace(/[\s\-()]/g, '');
    let isPhone = false;

    // Check if phone number with +91 or 91 prefix
    if (/^\+?91[6-9]\d{9}$/.test(cleaned)) {
      cleaned = cleaned.replace(/^\+?91/, '');
      isPhone = true;
    } else if (/^0[6-9]\d{9}$/.test(cleaned)) {
      cleaned = cleaned.replace(/^0/, '');
      isPhone = true;
    } else if (/^[6-9]\d{9}$/.test(cleaned)) {
      isPhone = true;
    }

    // Accepts Razorpay payment ID (e.g. pay_XXXXX, rzp_XXXXX), phone number, or receipt code
    const isRazorpayId = /^pay_[a-zA-Z0-9_-]{5,}$/i.test(cleaned);
    const isGenericReceipt = cleaned.length >= 6;

    if (!isRazorpayId && !isPhone && !isGenericReceipt) {
      return {
        success: false,
        message: 'Please enter a valid Razorpay Payment ID (e.g. pay_xxxxxxxx) or 10-digit mobile number.',
      };
    }

    const assignedPaymentId = isRazorpayId ? cleaned : isPhone ? `phone_${cleaned}` : `restore_${cleaned}`;

    const info: PaymentInfo = {
      paymentId: assignedPaymentId,
      unlockedAt: new Date().toISOString(),
      amount: ACCESS_PRICE_INR,
      method: isRazorpayId ? 'Restored via Payment ID' : isPhone ? 'Restored via Mobile Number' : 'Restored via Receipt',
    };

    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(PAYMENT_DETAILS_KEY, JSON.stringify(info));
    } catch (e) {
      console.error('Failed to save restored access:', e);
    }

    setIsUnlocked(true);
    setPaymentInfo(info);
    window.dispatchEvent(new CustomEvent(EVENT_PAYMENT_STATE_CHANGE));

    return {
      success: true,
      paymentId: assignedPaymentId,
      message: 'Access restored successfully! All 6 units and mock tests are now unlocked.',
    };
  }, []);

  // Content Access Rules
  // Unit 1 (Foundations of Library Science) is 100% FREE for all students!
  const isUnitFree = useCallback((subjectId: string, unitId: string) => {
    return subjectId === 'library-science' && unitId === 'foundations';
  }, []);

  const canAccessUnit = useCallback((subjectId: string, unitId: string) => {
    if (isUnlocked) return true;
    return isUnitFree(subjectId, unitId);
  }, [isUnlocked, isUnitFree]);

  const canAccessTopic = useCallback((subjectId: string, unitId?: string) => {
    if (isUnlocked) return true;
    if (subjectId === 'library-science' && (!unitId || unitId === 'foundations')) {
      return true;
    }
    return false;
  }, [isUnlocked]);

  const canAccessMockTest = useCallback((_testId?: string) => {
    if (isUnlocked) return true;
    return false;
  }, [isUnlocked]);

  return {
    isUnlocked,
    paymentInfo,
    isPaywallOpen,
    paywallContext,
    paywallInitialTab,
    openPaywall,
    closePaywall,
    unlockFullAccess,
    resetAccess,
    restoreAccess,
    canAccessUnit,
    canAccessTopic,
    canAccessMockTest,
    isUnitFree,
    price: ACCESS_PRICE_INR,
  };
}
