import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Bienvenue à Gémenos</h1>
        <p className="hero-subtitle">
          Un village paisible au cœur de la Provence, où la communauté et la nature se rencontrent
          pour créer un cadre de vie exceptionnel.
        </p>
        <div className="hero-buttons">
          <Link to="/agenda" className="hero-btn primary">🗓️ Voir l'agenda</Link>
          <Link to="/suggestions" className="hero-btn secondary">👥 Participer</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
