import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Déterminer si on doit afficher ou masquer le header
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    
    // Ajouter un écouteur d'événement pour le défilement
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      // Nettoyer l'écouteur d'événement
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Sauvegarder la position de défilement actuelle
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      // Ouvrir le menu et bloquer le défilement
      document.body.classList.add('mobile-menu-open');
    } else {
      // Fermer le menu et restaurer le défilement
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    // Restaurer la position de défilement
    const scrollY = parseInt(document.body.style.top || '0') * -1;
    document.body.classList.remove('mobile-menu-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${visible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <img src="./imgs/gemenosLogo.webp" alt="Logo Gémenos" className="logo-image" />
            <span className="logo-text">Mairie de Gémenos</span>
          </div>
        </div>
        
        <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <nav className="nav desktop-nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Accueil</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/agriculture" className="nav-link">Agriculture</Link></li>
            <li><Link to="/transparence" className="nav-link">Transparence</Link></li>
            <li><Link to="/commerces" className="nav-link">Commerces</Link></li>
            <li><Link to="/suggestions" className="nav-link">Suggestions</Link></li>
            <li><Link to="/agenda" className="nav-link">Agenda</Link></li>
            <li><Link to="/actualites" className="nav-link">Actualités</Link></li>
          </ul>
        </nav>

        <div className="header-actions desktop-actions">
          <div className="search-container">
            <input type="text" placeholder="Rechercher..." className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button className="close-btn" onClick={closeMenu}>✕</button>
          </div>
          
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li>
                <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">🏠</span>
                  <span>Accueil</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">⚙️</span>
                  <span>Services</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/agriculture" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">🌱</span>
                  <span>Agriculture</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/transparence" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">📊</span>
                  <span>Transparence</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/commerces" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">🛍️</span>
                  <span>Commerces locaux</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/suggestions" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">💡</span>
                  <span>Suggestions</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">📅</span>
                  <span>Agenda</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="mobile-nav-link" onClick={closeMenu}>
                  <span className="nav-icon">📰</span>
                  <span>Actualités</span>
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-search">
              <input type="text" placeholder="Rechercher..." className="mobile-search-input" />
              <button className="mobile-search-btn">🔍</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
