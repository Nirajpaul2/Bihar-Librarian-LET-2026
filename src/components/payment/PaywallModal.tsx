import { useState, useEffect } from 'react';
import {
  X,
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
  ExternalLink,
  Key,
  Copy,
  CheckCheck,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import {
  usePayment,
  RAZORPAY_KEY_ID,
  RAZORPAY_FALLBACK_LINK,
  ACCESS_PRICE_INR,
  type PaywallTab,
} from '@/hooks/usePayment';
import { trackPaywallView, trackAction } from '@/utils/telemetry';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextText?: string;
  initialTab?: PaywallTab;
}

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export default function PaywallModal({
  isOpen,
  onClose,
  contextText,
  initialTab,
}: PaywallModalProps) {
  const {
    isUnlocked,
    paymentInfo,
    unlockFullAccess,
    restoreAccess,
    paywallInitialTab,
  } = usePayment();

  const [activeTab, setActiveTab] = useState<'pay' | 'restore' | 'success' | 'status'>('pay');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [restoreInput, setRestoreInput] = useState('');
  const [restoreSuccess, setRestoreSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [justPaidId, setJustPaidId] = useState<string>('');

  // Sync activeTab when modal opens & track paywall telemetry intent
  useEffect(() => {
    if (isOpen) {
      trackPaywallView(contextText);
      setErrorMsg(null);
      setRestoreSuccess(false);
      setCopied(false);

      if (isUnlocked) {
        setActiveTab('status');
      } else {
        const preferredTab = initialTab || paywallInitialTab || 'pay';
        setActiveTab(preferredTab);
      }
    }
  }, [isOpen, isUnlocked, initialTab, paywallInitialTab, contextText]);

  if (!isOpen) return null;

  // Dynamically load Razorpay Checkout Script
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise(resolve => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);
    setErrorMsg(null);

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded || !window.Razorpay) {
      setLoading(false);
      setErrorMsg('Unable to load Razorpay checkout. Please check internet connection or use direct payment link below.');
      return;
    }

    try {
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: ACCESS_PRICE_INR * 100, // in paise: 900 = Rs 9
        currency: 'INR',
        name: 'Bihar Librarian LET 2026',
        description: 'Lifetime Full Access — All Units & 150Q Mock Tests',
        image: '/logo.png',
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        notes: {
          exam: 'Bihar Librarian LET 2026',
          access: 'Full Lifetime',
        },
        theme: {
          color: '#1d4ed8',
        },
        handler: function (response: any) {
          const paymentId = response.razorpay_payment_id || `pay_${Date.now()}`;
          unlockFullAccess(paymentId, 'Razorpay Checkout');
          trackAction('payment_success', { paymentId, amount: ACCESS_PRICE_INR });
          setJustPaidId(paymentId);
          setLoading(false);
          setActiveTab('success');
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.on('payment.failed', function (response: any) {
        setLoading(false);
        setErrorMsg(response?.error?.description || 'Payment failed. Please try again.');
      });

      razorpayInstance.open();
    } catch (err: any) {
      console.error('Razorpay Error:', err);
      setLoading(false);
      setErrorMsg('Failed to initialize Razorpay payment. You can also use the direct link below.');
    }
  };

  const handleRestoreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const res = restoreAccess(restoreInput);
    if (res.success) {
      setRestoreSuccess(true);
      setJustPaidId(res.paymentId || restoreInput.trim());
      trackAction('access_restored', { paymentId: res.paymentId });
      setTimeout(() => {
        setActiveTab('status');
      }, 1200);
    } else {
      setErrorMsg(res.message);
    }
  };

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Quick Demo Simulator for instant testing
  const handleDemoUnlock = () => {
    const testId = `demo_pay_${Date.now()}`;
    unlockFullAccess(testId, 'Demo/Test Mode');
    trackAction('demo_unlock_triggered', { paymentId: testId });
    setJustPaidId(testId);
    setActiveTab('success');
  };

  const currentDisplayId =
    justPaidId || paymentInfo?.paymentId || (isUnlocked ? 'pay_active_member' : '');

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brand-100 dark:border-brand-900 relative my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/logo.png"
            alt="Bihar Library LET 2026 Logo"
            className="w-12 h-12 object-contain rounded-2xl bg-white p-1 border border-brand-100 dark:border-brand-800 shadow-sm shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Special Offer · 91% OFF
              </span>
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                Unit 1 Free
              </span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Bihar School Examination Board (BSEB) LET 2026
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Pay vs Restore) */}
        {activeTab !== 'success' && (
          <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl mb-4 text-xs font-semibold">
            {isUnlocked ? (
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setActiveTab('status');
                }}
                className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'status'
                    ? 'bg-white dark:bg-gray-900 text-brand-700 dark:text-brand-300 shadow-xs'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Active Pro Status
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setActiveTab('pay');
                }}
                className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'pay'
                    ? 'bg-white dark:bg-gray-900 text-brand-700 dark:text-brand-300 shadow-xs'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-current" />
                Unlock for ₹{ACCESS_PRICE_INR}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setErrorMsg(null);
                setActiveTab('restore');
              }}
              className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'restore'
                  ? 'bg-white dark:bg-gray-900 text-brand-700 dark:text-brand-300 shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Key className="w-3.5 h-3.5 text-blue-500" />
              Already Paid? Restore
            </button>
          </div>
        )}

        {/* ---------------- TAB 1: PAY FOR ACCESS ---------------- */}
        {activeTab === 'pay' && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-1.5">
              Unlock Full Access for ₹{ACCESS_PRICE_INR}
            </h2>

            {contextText ? (
              <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-3">
                🔒 {contextText}
              </p>
            ) : (
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Unit 1 is 100% Free! Unlock remaining units, full 150Q mock tests, and complete preparation with a one-time ₹{ACCESS_PRICE_INR} payment.
              </p>
            )}

            {/* Price Card */}
            <div className="bg-gradient-to-br from-brand-50 to-blue-50 dark:from-brand-950/40 dark:to-blue-950/20 border border-brand-200 dark:border-brand-800 rounded-2xl p-4 mb-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                    One-Time Lifetime Access
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-brand-700 dark:text-brand-300">
                      ₹{ACCESS_PRICE_INR}
                    </span>
                    <span className="text-sm text-gray-400 line-through">₹99</span>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/60 px-2 py-0.5 rounded-full">
                      Save ₹90
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block">No subscription</span>
                  <span className="text-xs font-bold text-brand-700 dark:text-brand-400">All Devices</span>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-2 mb-4 text-xs sm:text-sm">
              {[
                'All 6 Technical Library Science Units (Classification, Cataloguing, Management, Digital)',
                'Full 150-Question Timed Mock Tests (120 Mins) with Section-wise Analysis',
                'Part 2 General Paper: Bihar GK, Reasoning, Computer Awareness & GK',
                '30-Day Structured Study Plan with Daily Core & General Targets',
                'Save Difficult Questions with Bookmark Review Mode',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Error message */}
            {errorMsg && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-3 mb-3 text-xs text-red-700 dark:text-red-300">
                {errorMsg}
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handleRazorpayPayment}
              disabled={loading}
              className="w-full bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold py-3 px-6 rounded-2xl shadow-lg shadow-brand-700/25 transition-all flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <span>Opening Razorpay Secure Checkout...</span>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-current" />
                  <span>Pay ₹{ACCESS_PRICE_INR} & Unlock Full Access</span>
                </>
              )}
            </button>

            {/* Restore Access Hint */}
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setActiveTab('restore');
                }}
                className="text-xs text-brand-600 dark:text-brand-400 hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                Already paid on another device or private browser? <strong>Restore here →</strong>
              </button>
            </div>

            {/* Direct Link & Demo Unlock */}
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
              <a
                href={RAZORPAY_FALLBACK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600 dark:hover:text-brand-400 inline-flex items-center gap-1 font-medium transition-colors"
              >
                Direct Payment Link <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={handleDemoUnlock}
                className="text-[11px] text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 underline underline-offset-2 transition-colors cursor-pointer"
              >
                ⚡ Test Unlock (Demo Mode)
              </button>
            </div>

            {/* Security badges */}
            <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                100% Secure Checkout
              </span>
              <span>·</span>
              <span>UPI / Cards / NetBanking</span>
            </div>
          </div>
        )}

        {/* ---------------- TAB 2: RESTORE ACCESS ---------------- */}
        {activeTab === 'restore' && (
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Key className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Restore Your Access
              </h2>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Did you pay ₹9 on another phone, computer, or in private browsing? Enter your Razorpay Payment ID or registered mobile number to restore access immediately.
            </p>

            <form onSubmit={handleRestoreSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Payment ID or Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={restoreInput}
                    onChange={e => setRestoreInput(e.target.value)}
                    placeholder="e.g. pay_XXXXX or 9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                    autoFocus
                  />
                  {restoreInput && (
                    <button
                      type="button"
                      onClick={() => setRestoreInput('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Helpful Tips Box */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-xl p-3 text-xs text-blue-800 dark:text-blue-300 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  Where to find your Payment ID?
                </div>
                <p className="text-[11px] leading-relaxed text-blue-700 dark:text-blue-300/80">
                  After paying ₹9, Razorpay sent an <strong>SMS and WhatsApp / Email</strong> containing your receipt and a Payment ID starting with <code>pay_...</code>. You can also use the 10-digit mobile number entered during checkout.
                </p>
              </div>

              {/* Status & Error */}
              {errorMsg && (
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-3 text-xs text-red-700 dark:text-red-300">
                  {errorMsg}
                </div>
              )}

              {restoreSuccess && (
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-3 text-xs text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Access verified! Unlocking all units and mock tests...</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Key className="w-4 h-4" />
                <span>Verify & Restore Access</span>
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-center">
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setActiveTab('pay');
                }}
                className="text-xs text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 font-medium cursor-pointer"
              >
                Haven't purchased yet? <strong>Unlock for ₹{ACCESS_PRICE_INR} →</strong>
              </button>
            </div>
          </div>
        )}

        {/* ---------------- TAB 3: SUCCESS CELEBRATION ---------------- */}
        {activeTab === 'success' && (
          <div className="text-center py-2 animate-fade-in">
            <div className="w-16 h-16 rounded-3xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">
              Payment Successful! 🎉
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              All 6 Library Science units, 150-Question mock tests, and General Paper are unlocked for lifetime.
            </p>

            {/* Payment ID Box with Copy */}
            <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-3.5 mb-4 text-left">
              <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Your Payment ID</span>
                <span className="text-green-600 dark:text-green-400 font-semibold normal-case">✓ Verified</span>
              </div>
              <div className="flex items-center justify-between gap-2 bg-white dark:bg-gray-900 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
                <code className="text-xs sm:text-sm font-mono font-bold text-brand-700 dark:text-brand-300 break-all select-all">
                  {currentDisplayId || 'pay_confirmed'}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard(currentDisplayId)}
                  className="px-2.5 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-green-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Advice box for 2nd device */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-3.5 mb-5 text-left text-xs text-amber-900 dark:text-amber-200">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <Smartphone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>How to use on your 2nd device or phone:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800 dark:text-amber-300/90">
                Keep this Payment ID safe. If you open this site on another phone, laptop, or private browser, simply click <strong>"Already Paid? Restore"</strong> and enter this ID or your phone number to re-unlock everything for free!
              </p>
            </div>

            {/* Action button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-green-600/25 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <span>Start Practicing Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ---------------- TAB 4: ACTIVE STATUS ---------------- */}
        {activeTab === 'status' && (
          <div className="py-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bihar Librarian LET Pro
                </h2>
                <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                  Lifetime Full Access Active
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              All units, 150-question mock tests, explanations, and study resources are unlocked on this browser.
            </p>

            {/* Details Box */}
            <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 mb-4 space-y-2 text-xs">
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                <span>Access Level:</span>
                <span className="font-bold text-gray-900 dark:text-white">Full Lifetime Access (₹9)</span>
              </div>
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                <span>Units Unlocked:</span>
                <span className="font-bold text-green-600 dark:text-green-400">All 6 Units + General Paper</span>
              </div>
              {paymentInfo?.unlockedAt && (
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                  <span>Activated On:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {new Date(paymentInfo.unlockedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}

              {/* Payment ID with Copy */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 block mb-1">Your Payment ID (Save for other devices):</span>
                <div className="flex items-center justify-between gap-2 bg-white dark:bg-gray-900 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
                  <code className="text-xs font-mono font-bold text-brand-700 dark:text-brand-300 break-all select-all">
                    {currentDisplayId || 'pay_active_member'}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(currentDisplayId)}
                    className="px-2 py-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-green-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-brand-700 hover:bg-brand-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Close & Continue Studying
              </button>
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setActiveTab('restore');
                }}
                className="px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                title="Enter another Payment ID"
              >
                Switch ID
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
