import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Telecom from './pages/Telecom';
import OFC from './pages/OFC';
import Networking from './pages/Networking';
import Solar from './pages/Solar';
import Manpower from './pages/Manpower';
import ITSolutions from './pages/ITSolutions';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
        <Navigation scrollY={scrollY} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/telecom" element={<Telecom />} />
            <Route path="/ofc" element={<OFC />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/manpower" element={<Manpower />} />
            <Route path="/it-solutions" element={<ITSolutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
