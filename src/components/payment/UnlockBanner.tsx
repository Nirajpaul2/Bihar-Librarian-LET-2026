import { Sparkles, CheckCircle2, Key, ChevronRight } from 'lucide-react';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';

interface UnlockBannerProps {
  onOpenPaywall?: () => void;
}

export default function UnlockBanner({ onOpenPaywall }: UnlockBannerProps) {
  const { isUnlocked, openPaywall } = usePayment();

  const handleOpen = (tab: 'pay' | 'restore' = 'pay') => {
    if (onOpenPaywall && tab === 'pay') {
      onOpenPaywall();
    } else {
      openPaywall(`Bihar Librarian LET 2026 Access`, tab);
    }
  };

  if (isUnlocked) {
    return (
      <div className="bg-green-700 dark:bg-green-800 text-white text-xs font-semibold py-1.5 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-200 shrink-0" />
            <span>Full Access Active · All 6 Units & Full 150Q Mock Tests Unlocked!</span>
          </div>
          <button
            onClick={() => openPaywall('View Pro Membership Details', 'pay')}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] bg-green-800/80 hover:bg-green-900 px-2 py-0.5 rounded-md text-green-100 transition-colors cursor-pointer"
          >
            <span>Save / View Payment ID</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
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
          <span className="text-brand-100 text-xs">
            <strong>Unit 1 is 100% Free!</strong> Unlock all remaining units & 150Q Mock Tests for just <strong>₹{ACCESS_PRICE_INR}</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpen('restore')}
            className="text-brand-200 hover:text-white text-[11px] font-medium transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-brand-700/50 cursor-pointer"
          >
            <Key className="w-3 h-3" />
            <span>Already Paid? Restore</span>
          </button>
          <button
            onClick={() => handleOpen('pay')}
            className="bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors shrink-0 shadow flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            Unlock All for ₹{ACCESS_PRICE_INR}
          </button>
        </div>
      </div>
    </div>
  );
}
