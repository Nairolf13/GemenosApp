import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mairie de Gémenos</h3>
            <p>Place Gabriel Péri</p>
            <p>13420 Gémenos</p>
            <p>Tél : 04 42 32 88 00</p>
            <p>Fax : 04 42 32 88 01</p>
          </div>
          
          <div className="footer-section">
            <h3>Liens utiles</h3>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/urbanisme">Urbanisme</a></li>
              <li><a href="/associations">Associations</a></li>
              <li><a href="/emploi">Emploi</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Nos horaires</h3>
            <p>Lundi - Vendredi : 8h30 - 12h00 et 14h00 - 17h30</p>
            <p>Samedi : 8h30 - 12h00</p>
            <p>Dimanche : Fermé</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Mairie de Gémenos. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <a href="/plan-site">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
