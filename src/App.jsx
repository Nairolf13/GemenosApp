import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Agenda from './pages/Agenda';
import Agriculture from './pages/Agriculture';
import Transparence from './pages/Transparence';
import CommercesSociaux from './pages/CommercesSociaux';
import Suggestions from './pages/Suggestions';
import Actualites from './pages/Actualites';
import './assets/css/App.css';

const basename = import.meta.env.PROD ? '/GemenosApp' : '';

console.log('App.jsx - Environment:', {
  isProd: import.meta.env.PROD,
  basename: basename,
  currentLocation: window.location.href
});

function App() {
  React.useEffect(() => {
    console.log('App mounted!', {
      location: window.location.href,
      pathname: window.location.pathname,
      basename: basename,
      isProd: import.meta.env.PROD
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/transparence" element={<Transparence />} />
            <Route path="/commerces" element={<CommercesSociaux />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/actualites" element={<Actualites />} />
            {/* Route de fallback pour rediriger vers l'accueil */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
