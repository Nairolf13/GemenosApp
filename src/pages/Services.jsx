import React from 'react';
import '../assets/css/Services.css';

const Services = () => {
  const demarches = [
    {
      id: 1,
      title: "Carte d'identité",
      description: "Demande ou renouvellement",
      icon: "🆔",
      category: "identite"
    },
    {
      id: 2,
      title: "Passeport",
      description: "Première demande ou renouvellement",
      icon: "📘",
      category: "identite"
    },
    {
      id: 3,
      title: "Certificat de naissance",
      description: "Copie intégrale ou extrait",
      icon: "👶",
      category: "etat-civil"
    },
    {
      id: 4,
      title: "Certificat de mariage",
      description: "Copie intégrale ou extrait",
      icon: "💍",
      category: "etat-civil"
    },
    {
      id: 5,
      title: "Permis de construire",
      description: "Dépôt de dossier et suivi",
      icon: "🏗️",
      category: "urbanisme"
    },
    {
      id: 6,
      title: "Carte de stationnement",
      description: "Demande de carte résidentielle",
      icon: "🅿️",
      category: "circulation"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-container">
          <h1>Services Municipaux</h1>
          <p>Accédez facilement à tous les services de la mairie de Gémenos, démarches en ligne et informations pratiques</p>
        </div>
      </div>

      <div className="services-container">
        {/* Services en ligne */}
        <div className="services-online">
          <h2>Services en ligne disponibles 24h/24</h2>
          <div className="online-services-grid">
            <div className="online-service-card">
              <div className="service-icon">🏠</div>
              <h3>État Civil</h3>
              <p>Demandez vos actes d'état civil en ligne : naissance, mariage, décès. Livraison sécurisée à domicile.</p>
              <button className="service-btn">
                Accéder au service ➜
              </button>
            </div>

            <div className="online-service-card">
              <div className="service-icon">🗳️</div>
              <h3>Élections</h3>
              <p>Vérifiez votre situation électorale, inscription sur les listes, procurations et informations de vote.</p>
              <button className="service-btn">
                Consulter ➜
              </button>
            </div>

            <div className="online-service-card">
              <div className="service-icon">🚗</div>
              <h3>Stationnement</h3>
              <p>Demande de carte de stationnement résidentiel, zones bleues et gestion des contraventions.</p>
              <button className="service-btn">
                Faire une demande ➜
              </button>
            </div>

            <div className="online-service-card">
              <div className="service-icon">📋</div>
              <h3>Signalement</h3>
              <p>Signalez un problème sur la voie publique : éclairage, propreté, dégradations, voirie.</p>
              <button className="service-btn">
                Signaler ➜
              </button>
            </div>
          </div>
        </div>

        {/* Services d'urgence */}
        <div className="urgence-section">
          <h2>🚨 Numéros d'urgence</h2>
          <div className="urgence-grid">
            <div className="urgence-card">
              <h3>SAMU</h3>
              <div className="urgence-number">15</div>
              <p>Urgences médicales</p>
            </div>
            <div className="urgence-card">
              <h3>Police</h3>
              <div className="urgence-number">17</div>
              <p>Police secours</p>
            </div>
            <div className="urgence-card">
              <h3>Pompiers</h3>
              <div className="urgence-number">18</div>
              <p>Secours et incendie</p>
            </div>
            <div className="urgence-card">
              <h3>Urgence européenne</h3>
              <div className="urgence-number">112</div>
              <p>Numéro unique</p>
            </div>
          </div>
        </div>

        {/* Démarches administratives */}
        <div className="demarches-section">
          <h2>Démarches administratives</h2>
          <div className="demarches-content">
            <div className="demarches-list">
              <h3>Démarches principales</h3>
              {demarches.map(demarche => (
                <div key={demarche.id} className="demarche-item">
                  <div className="demarche-icon">
                    {demarche.icon}
                  </div>
                  <div className="demarche-info">
                    <h4>{demarche.title}</h4>
                    <p>{demarche.description}</p>
                  </div>
                  <div className="demarche-arrow">›</div>
                </div>
              ))}
            </div>

            <div className="horaires-contact">
              <h3>Horaires d'ouverture</h3>
              <div className="horaires-grid">
                <div className="horaire-item">
                  <span className="day">Lundi</span>
                  <span className="hours">8h30 - 12h00 / 13h30 - 17h00</span>
                </div>
                <div className="horaire-item">
                  <span className="day">Mardi</span>
                  <span className="hours">8h30 - 12h00 / 13h30 - 17h00</span>
                </div>
                <div className="horaire-item">
                  <span className="day">Mercredi</span>
                  <span className="hours">8h30 - 12h00 / 13h30 - 17h00</span>
                </div>
                <div className="horaire-item">
                  <span className="day">Jeudi</span>
                  <span className="hours">8h30 - 12h00 / 13h30 - 17h00</span>
                </div>
                <div className="horaire-item">
                  <span className="day">Vendredi</span>
                  <span className="hours">8h30 - 12h00 / 13h30 - 16h00</span>
                </div>
                <div className="horaire-item">
                  <span className="day">Samedi</span>
                  <span className="hours">9h00 - 12h00</span>
                </div>
                <div className="horaire-item closed">
                  <span className="day">Dimanche</span>
                  <span className="hours">Fermé</span>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <strong>Téléphone</strong>
                    <span>04 42 32 09 09</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <strong>Email</strong>
                    <span>accueil@gemenos.fr</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <strong>Adresse</strong>
                    <span>Place de la Mairie, 13420 Gémenos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
