import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import Footer from '@/components/layout/Footer';
import UnlockBanner from '@/components/payment/UnlockBanner';
import PaywallModal from '@/components/payment/PaywallModal';
import { usePayment, ACCESS_PRICE_INR } from '@/hooks/usePayment';
import Home from '@/pages/Home';
import Syllabus from '@/pages/Syllabus';
import PracticeHub from '@/pages/PracticeHub';
import PracticeSession from '@/pages/PracticeSession';
import MockTestList from '@/pages/MockTestList';
import MockTestPage from '@/pages/MockTestPage';
import CurrentAffairs from '@/pages/CurrentAffairs';
import Bookmarks from '@/pages/Bookmarks';
import NotFound from '@/pages/NotFound';

function AppLayout() {
  const {
    isPaywallOpen,
    paywallContext,
    openPaywall,
    closePaywall,
  } = usePayment();

  return (
    <div className="min-h-screen flex flex-col">
      <UnlockBanner onOpenPaywall={() => openPaywall(`Unlock full website access for ₹${ACCESS_PRICE_INR}`)} />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/practice" element={<PracticeHub />} />
          <Route path="/practice/session" element={<PracticeSession />} />
          <Route path="/mock-test" element={<MockTestList />} />
          <Route path="/mock-test/:testId" element={<MockTestPage />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={closePaywall}
        contextText={paywallContext}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
