import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'bpsc_librarian_full_access_v1';
const PAYMENT_DETAILS_KEY = 'bpsc_librarian_payment_info_v1';

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

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        setIsUnlocked(localStorage.getItem(STORAGE_KEY) === 'true');
      } catch {}
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const openPaywall = useCallback((contextText = '') => {
    setPaywallContext(contextText);
    setIsPaywallOpen(true);
  }, []);

  const closePaywall = useCallback(() => {
    setIsPaywallOpen(false);
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
    setIsPaywallOpen(false);
  }, []);

  const resetAccess = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(PAYMENT_DETAILS_KEY);
    } catch {}
    setIsUnlocked(false);
    setPaymentInfo(null);
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
    openPaywall,
    closePaywall,
    unlockFullAccess,
    resetAccess,
    canAccessUnit,
    canAccessTopic,
    canAccessMockTest,
    isUnitFree,
    price: ACCESS_PRICE_INR,
  };
}
