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

/**
 * Pure JS SHA-256 implementation to verify keys securely without exposing plaintext strings
 */
export function sha256Hash(ascii: string): string {
  function rightRotate(value: number, amount: number) {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  let lengthProperty = 'length';
  let i: number, j: number;
  let result = '';
  const words: number[] = [];
  const asciiBitLength = ascii.length * 8;
  const hash: number[] = [];
  const k: number[] = [];
  let primeCounter = 0;

  const isComposite: Record<number, number> = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while ((ascii.length % 64) - 56) ascii += '\x00';
  for (i = 0; i < ascii.length; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return '';
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words.length] = (asciiBitLength / maxWord) | 0;
  words[words.length] = asciiBitLength;

  for (j = 0; j < words.length; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash.slice(0);
    const currHash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15] || 0;
      const w2 = w[i - 2] || 0;
      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      const ch = (currHash[4] & currHash[5]) ^ (~currHash[4] & currHash[6]);
      const maj = (currHash[0] & currHash[1]) ^ (currHash[0] & currHash[2]) ^ (currHash[1] & currHash[2]);
      const temp1 =
        currHash[7] +
        (rightRotate(currHash[4], 6) ^ rightRotate(currHash[4], 11) ^ rightRotate(currHash[4], 25)) +
        ch +
        k[i] +
        (w[i] = (i < 16 ? w[i] : (w[i - 16] + s0 + (w[i - 7] || 0) + s1) | 0) || 0);
      const temp2 = (rightRotate(currHash[0], 2) ^ rightRotate(currHash[0], 13) ^ rightRotate(currHash[0], 22)) + maj;

      currHash[7] = currHash[6];
      currHash[6] = currHash[5];
      currHash[5] = currHash[4];
      currHash[4] = (currHash[3] + temp1) | 0;
      currHash[3] = currHash[2];
      currHash[2] = currHash[1];
      currHash[1] = currHash[0];
      currHash[0] = (temp1 + temp2) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (currHash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (8 * j)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

// Authorized Master Key Hashes (SHA-256 digests; plain text keys are never exposed in code or bundles)
const AUTHORIZED_MASTER_HASHES = new Set([
  '8be6f314eb5477428edf062385816793999e92fa7009285ca04ba256f926abca', // Key 1
  '937fd0e49111747435e0dc7499a1c80cd6ec588286e847f9671d05edd36a0f6f', // Key 2
  'd21baf5e0982520b153c0a55cca16d5295417d03c43abd3846df3bf97943f98f', // Key 3
  '613f63945cd5cc78c40067e62e93c11d64a46ed264ab60167b1dbbdc944c7be3', // Key 4
  '612041e0c1cc84d7a08cc969f4cea4ff57f7279d1d67074db9dc411f672727dd', // Key 5
  'd15d98f1da826c05fa8fd37b8dc121a8dcebcc911a13224cb2ab26b4bc807091', // Key 6
  '4e51ca2d9b77bc346f0433afb9dda33b008b5c5212c93b175ec7d4b53fb1993d', // Key 7
  '03ff2e638839706f3712488c6e31ed896b3e7aa531ed7dee59edc204abfe091c', // Key 8
  '6d7d922ba1040e4b4a97ff24a1315b90aad82a8188ab702e9f725c099a6db760', // Key 9
]);

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
 * Strict verification: verifies against official hashed master keys and algorithmic keys.
 * Mobile phone numbers and arbitrary text are strictly rejected.
 */
export function verifyKey(rawKey: string): { isValid: boolean; keyType: 'master' | 'algorithmic' | 'invalid' } {
  const normalized = rawKey.trim().toUpperCase().replace(/[\s-]/g, '');
  if (!normalized) return { isValid: false, keyType: 'invalid' };

  // Check official master keys via SHA-256 hash comparison
  const inputHash = sha256Hash(normalized);
  if (AUTHORIZED_MASTER_HASHES.has(inputHash)) {
    return { isValid: true, keyType: 'master' };
  }

  // Check optional environment variable master keys
  const envKeys = (import.meta.env.VITE_MASTER_KEYS || import.meta.env.VITE_MASTER_KEY || '')
    .split(',')
    .map((k: string) => k.trim().toUpperCase().replace(/[\s-]/g, ''))
    .filter(Boolean);

  if (envKeys.some((envK: string) => envK === normalized || sha256Hash(envK) === inputHash)) {
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
  };
}
