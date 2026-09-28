import { useState } from 'react';
import { X, Check, Lock, ShieldCheck, Zap, Sparkles, ExternalLink } from 'lucide-react';
import {
  usePayment,
  RAZORPAY_KEY_ID,
  RAZORPAY_FALLBACK_LINK,
  ACCESS_PRICE_INR,
} from '@/hooks/usePayment';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextText?: string;
}

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export default function PaywallModal({ isOpen, onClose, contextText }: PaywallModalProps) {
  const { unlockFullAccess } = usePayment();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
        image: '/favicon.svg',
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
          color: '#1d4ed8', // Brand blue
        },
        handler: function (response: any) {
          const paymentId = response.razorpay_payment_id || `pay_${Date.now()}`;
          unlockFullAccess(paymentId, 'Razorpay');
          setLoading(false);
          onClose();
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

  // Quick Demo Simulator for instant testing
  const handleDemoUnlock = () => {
    unlockFullAccess(`demo_unlock_${Date.now()}`, 'Demo/Test Mode');
    onClose();
  };

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

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Special Launch Offer · 91% OFF
          </span>
          <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
            Unit 1 Free
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-1.5">
          Unlock Bihar Librarian LET 2026 Complete Access
        </h2>

        {contextText ? (
          <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-4">
            🔒 {contextText}
          </p>
        ) : (
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Unit 1 is 100% Free! Unlock remaining units, mock tests, and complete preparation with one-time payment.
          </p>
        )}

        {/* Price Card */}
        <div className="bg-gradient-to-br from-brand-50 to-blue-50 dark:from-brand-950/40 dark:to-blue-950/20 border border-brand-200 dark:border-brand-800 rounded-2xl p-4 sm:p-5 mb-5">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
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
              <span className="text-[10px] text-gray-500 dark:text-gray-400 block">No monthly fees</span>
              <span className="text-xs font-bold text-brand-700 dark:text-brand-400">All Devices</span>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 mb-6 text-sm">
          {[
            'All 6 Technical Library Science Units (Classification, Cataloguing, Management, Reference, Digital)',
            'Full 150-Question Timed Mock Tests (120 Mins) with Section-wise Analysis',
            'Part 2 General Paper: Bihar GK, Reasoning, Computer Awareness & GK',
            '30-Day Structured Study Plan with Daily Core & General Targets',
            'Detailed Step-by-Step Explanations for all 210+ Questions',
            'Save Difficult Questions with Bookmark Review Mode',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-3 mb-4 text-xs text-red-700 dark:text-red-300">
            {errorMsg}
          </div>
        )}

        {/* Pay Button */}
        <button
          onClick={handleRazorpayPayment}
          disabled={loading}
          className="w-full bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-brand-700/25 transition-all flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-60"
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

        {/* Direct Link & Demo Unlock */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <a
            href={RAZORPAY_FALLBACK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 inline-flex items-center gap-1 font-medium transition-colors"
          >
            Direct Razorpay Payment Link <ExternalLink className="w-3 h-3" />
          </a>

          {/* Test Unlock button for previewing/dev */}
          <button
            onClick={handleDemoUnlock}
            className="text-[11px] text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            ⚡ Test Unlock (Demo Mode)
          </button>
        </div>

        {/* Security badges */}
        <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            100% Secure Checkout
          </span>
          <span>·</span>
          <span>UPI / GPay / PhonePe / Cards</span>
          <span>·</span>
          <span>Instant Activation</span>
        </div>
      </div>
    </div>
  );
}
