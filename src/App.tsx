import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import HomePage from './pages/HomePage';
import ColorPrintingPage from './pages/ColorPrintingPage';
import BWPrintingPage from './pages/BWPrintingPage';
import ContactsPage from './pages/ContactsPage';
import RequirementsPage from './pages/RequirementsPage';
import PrivacyPage from './pages/PrivacyPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-eggshell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/color-printing" element={<ColorPrintingPage />} />
          <Route path="/bw-printing" element={<BWPrintingPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/requirements" element={<RequirementsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;
