import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Hero.css';

const Hero = () => {
  React.useEffect(() => {
    // Initialisation du composant Hero
  }, []);

  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                url(${window.location.pathname.includes('/GemenosApp') ? '/GemenosApp/imgs/gemenosMairie.webp' : '/imgs/gemenosMairie.webp'}) center/cover no-repeat`
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-container">
        <h1 className="hero-title">Bienvenue à Gémenos</h1>
        <p className="hero-subtitle">
          Un village paisible au cœur de la Provence, où la communauté et la nature se rencontrent
          pour créer un cadre de vie exceptionnel.
        </p>
        <div className="hero-buttons">
          <Link to="/agenda" className="hero-btn primary">
            <span className="hero-btn-icon">🗓️</span>
            <span className="hero-btn-text">Voir l'agenda</span>
          </Link>
          <Link to="/suggestions" className="hero-btn secondary">
            <span className="hero-btn-icon">👥</span>
            <span className="hero-btn-text">Participer</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
