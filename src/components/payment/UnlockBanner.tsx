import { Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';

interface UnlockBannerProps {
  onOpenPaywall: () => void;
}

export default function UnlockBanner({ onOpenPaywall }: UnlockBannerProps) {
  const { isUnlocked } = usePayment();

  if (isUnlocked) {
    return (
      <div className="bg-green-600 text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-1.5 shadow-sm">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Full Access Active · All 6 Units & Full Mock Tests Unlocked!</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-900 text-white text-xs py-2 px-4 shadow-sm border-b border-brand-700/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-amber-400 text-brand-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0">
            Launch Offer
          </span>
          <span className="text-brand-100">
            <strong>Unit 1 is 100% Free!</strong> Unlock all remaining units & 150Q Mock Tests for just <strong>₹{ACCESS_PRICE_INR}</strong>
          </span>
        </div>
        <button
          onClick={onOpenPaywall}
          className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors shrink-0 shadow flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3 h-3" />
          Unlock All for ₹{ACCESS_PRICE_INR}
        </button>
      </div>
    </div>
  );
}
