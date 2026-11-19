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

// WhatsApp Support Information
export const WHATSAPP_SUPPORT_NUMBER = '9942419837';
export const WHATSAPP_DISPLAY_PHONE = '+91 9942419837';
export const WHATSAPP_SUPPORT_URL = 'https://wa.me/919942419837';

// Dedicated Official Master Keys to unlock full lifetime access
export const OFFICIAL_MASTER_KEYS: readonly string[] = [
  'BPSC-LIB-MASTER-9942',
  'AIWAZIR-LET-2026-VIP',
  'LIB-ADMIN-9942419837',
  'BIHAR-LIB-PRO-UNLIMITED',
  'BPSC2026-PASS-9942',
  'MASTER-9942419837',
  'LET2026-PRO-9942',
  'LIB9942-MASTER-VIP',
] as const;

/**
 * Deterministic 4-character checksum for generating and verifying student access keys
 */
export function computeKeyChecksum(payload: string, salt = 'LIB_BPSC_2026_SECURE_SALT'): string {
  let hash = 0x811c9dc5;
  const str = `${salt}:${payload.toUpperCase()}`;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return ((hash >>> 0) % 0xffffff).toString(16).toUpperCase().padStart(4, '0').slice(-4);
}

/**
 * Generate a cryptographically verified access key for students who contact via WhatsApp
 * Format: BL26-XXXX-YYYY (where YYYY is checksum of XXXX)
 */
export function generateStudentAccessKey(code?: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let payload = '';
  if (code && code.length >= 4) {
    payload = code.slice(0, 4).toUpperCase();
  } else {
    for (let i = 0; i < 4; i++) {
      payload += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  const checksum = computeKeyChecksum(payload);
  return `BL26-${payload}-${checksum}`;
}

/**
 * Strict verification: verifies against official master keys and algorithmic keys.
 * Mobile phone numbers and arbitrary text are strictly rejected.
 */
export function verifyKey(rawKey: string): { isValid: boolean; keyType: 'master' | 'algorithmic' | 'invalid' } {
  const normalized = rawKey.trim().toUpperCase().replace(/[\s-]/g, '');
  if (!normalized) return { isValid: false, keyType: 'invalid' };

  // Check official master keys
  const envKeys = (import.meta.env.VITE_MASTER_KEYS || import.meta.env.VITE_MASTER_KEY || '')
    .split(',')
    .map((k: string) => k.trim().toUpperCase().replace(/[\s-]/g, ''))
    .filter(Boolean);

  const allMaster = [...OFFICIAL_MASTER_KEYS.map(k => k.toUpperCase().replace(/[\s-]/g, '')), ...envKeys];
  if (allMaster.includes(normalized)) {
    return { isValid: true, keyType: 'master' };
  }

  // Check algorithmic key format: BL26-XXXX-YYYY (12 chars without hyphens)
  if (normalized.startsWith('BL26') && normalized.length === 12) {
    const payload = normalized.slice(4, 8);
    const checksum = normalized.slice(8, 12);
    if (computeKeyChecksum(payload) === checksum) {
      return { isValid: true, keyType: 'algorithmic' };
    }
  }

  return { isValid: false, keyType: 'invalid' };
}

/**
 * Prepares direct WhatsApp message URL for access restoration or inquiries
 */
export function getWhatsAppRestoreUrl(userContext?: { paymentId?: string; mobile?: string }): string {
  let text = 'Hello! I have purchased Bihar Librarian LET 2026 Pro.';
  if (userContext?.paymentId) {
    text += ` My Razorpay Payment ID is: ${userContext.paymentId}.`;
  }
  text += ' Please provide my Master Access Key to restore access on my browser.';
  return `https://wa.me/91${WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(text)}`;
}

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

  const restoreAccess = useCallback((query: string): {
    success: boolean;
    message: string;
    paymentId?: string;
    isPhoneAttempt?: boolean;
  } => {
    const raw = query.trim();
    if (!raw) {
      return {
        success: false,
        message: 'Please enter your Master Access Key.',
      };
    }

    // Detect if user is trying to enter a phone number
    const cleanedPhone = raw.replace(/[\s\-()]/g, '');
    const isPhone = /^(?:\+?91|0)?[6-9]\d{9}$/.test(cleanedPhone);
    if (isPhone) {
      return {
        success: false,
        isPhoneAttempt: true,
        message:
          'For security, mobile numbers cannot directly unlock access. If you already purchased, please connect with us on WhatsApp (+91 9942419837) with your payment receipt to receive your official Master Key.',
      };
    }

    // Validate Master Key or Algorithmic Key
    const normalized = raw.toUpperCase().replace(/[\s-]/g, '');
    const result = verifyKey(normalized);

    if (!result.isValid) {
      return {
        success: false,
        message:
          'Invalid Master Access Key. If you have already paid, connect with WhatsApp support at 9942419837 to get your key.',
      };
    }

    const assignedPaymentId = result.keyType === 'master' ? `master_${normalized}` : `key_${normalized}`;

    const info: PaymentInfo = {
      paymentId: assignedPaymentId,
      unlockedAt: new Date().toISOString(),
      amount: ACCESS_PRICE_INR,
      method: result.keyType === 'master' ? 'Admin Master Key' : 'Verified Access Key',
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
      message: 'Master Key verified successfully! Full lifetime access unlocked on this browser.',
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
    whatsAppNumber: WHATSAPP_SUPPORT_NUMBER,
    whatsAppDisplay: WHATSAPP_DISPLAY_PHONE,
    whatsAppUrl: WHATSAPP_SUPPORT_URL,
    getWhatsAppRestoreUrl,
    masterKeys: OFFICIAL_MASTER_KEYS,
  };
}
