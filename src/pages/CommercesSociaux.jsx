import React, { useState } from 'react';
import '../assets/css/CommercesSociaux.css';

const CommercesSociaux = () => {
  const [activeTab, setActiveTab] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Rechercher un commerce');

  const commerces = [
    {
      id: 1,
      name: 'Boulangerie Artisanale Provence',
      type: 'Pain traditionnel & pâtisseries',
      description: 'Boulangerie traditionnelle avec des produits frais tous les jours.',
      location: '3 Zone Artisanale',
      phone: '04 42 32 16 67',
      category: 'Commerce',
      icon: '🥖',
      badges: ['Bio', 'Local'],
      village: true
    },
    {
      id: 2,
      name: 'Domaine des Oliviers',
      type: 'Vins & Huile d\'olive BIO',
      description: 'Producteur local d\'huile d\'olive et de vins de qualité.',
      location: 'Route des Oliviers',
      phone: '04 42 32 18 92',
      category: 'Producteur',
      icon: '🫒',
      badges: ['Bio', 'Local'],
      village: true
    },
    {
      id: 3,
      name: 'Atelier Bois & Création',
      type: 'Menuiserie artisanale',
      description: 'Création de meubles sur mesure et restauration.',
      location: '8 Zone Artisanale',
      phone: '04 42 32 20 43',
      category: 'Artisan',
      icon: '🔨',
      badges: ['Artisanal'],
      village: true
    },
    {
      id: 4,
      name: 'Café de la Place',
      type: 'Café, restaurant PMU tabac',
      description: 'Le lieu de rencontre du village.',
      location: '1 Place du Village',
      phone: '',
      category: 'Commerce',
      icon: '☕',
      badges: ['Local'],
      village: true
    }
  ];

  const getFilteredCommerces = () => {
    let filtered = commerces;
    
    if (activeTab !== 'Tous') {
      filtered = filtered.filter(commerce => commerce.category === activeTab);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(commerce => 
        commerce.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        commerce.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  return (
    <div className="commerces-page">
      <div className="commerces-hero">
        <div className="commerces-hero-container">
          <h1>Commerces & Artisans Locaux</h1>
          <p>Découvrez et soutenez nos producteurs, artisans et commerçants qui font la richesse de notre village</p>
        </div>
      </div>

      <div className="commerces-container">
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card commerces">
              <div className="stat-number">24</div>
              <div className="stat-label">Commerces</div>
              <div className="stat-sublabel">référencés</div>
            </div>
            <div className="stat-card producteurs">
              <div className="stat-number">12</div>
              <div className="stat-label">Producteurs</div>
              <div className="stat-sublabel">locaux</div>
            </div>
            <div className="stat-card artisans">
              <div className="stat-number">8</div>
              <div className="stat-label">Artisans</div>
              <div className="stat-sublabel">d'art</div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-btn primary">
              📍 Ajouter mon commerce
            </button>
            <button className="action-btn secondary">
              💬 Nous contacter
            </button>
          </div>
        </div>

        <div className="filters-section">
          <div className="filters-tabs">
            {['Tous', 'Producteurs', 'Artisans', 'Commerces', 'Services'].map(tab => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="filter-options">
            <input
              type="text"
              placeholder="🔍 Rechercher un commerce"
              className="search-box"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="filter-select"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option>Trier par nom ▼</option>
              <option>Trier par catégorie</option>
              <option>Trier par localisation</option>
            </select>
          </div>
        </div>

        <div className="annuaire-section">
          <h2 className="section-title">Annuaire des commerces</h2>
          
          <h3 className="featured-title">Commerces mis en avant</h3>
          <div className="featured-commerces">
            <div className="commerce-card boulangerie">
              <div className="commerce-icon">🥖</div>
              <div className="commerce-content">
                <h4 className="commerce-name">Boulangerie Artisanale Provence</h4>
                <p className="commerce-description">Pain traditionnel & pâtisseries</p>
                <p className="commerce-location">📍 3 Zone Artisanale</p>
                <div className="commerce-contact">
                  <span className="contact-item">📞 04 42 32 16 67</span>
                </div>
                <div className="commerce-badges">
                  <span className="badge bio">✅ Bio</span>
                  <span className="badge local">🏠 Local</span>
                </div>
              </div>
            </div>

            <div className="commerce-card domaine">
              <div className="commerce-icon orange">🫒</div>
              <div className="commerce-content">
                <h4 className="commerce-name">Domaine des Oliviers</h4>
                <p className="commerce-description">Vins & Huile d'olive BIO</p>
                <p className="commerce-location">📍 Route des Oliviers</p>
                <div className="commerce-contact">
                  <span className="contact-item">📞 04 42 32 18 92</span>
                </div>
                <div className="commerce-badges">
                  <span className="badge bio">✅ Bio</span>
                  <span className="badge local">🏠 Local</span>
                </div>
              </div>
            </div>

            <div className="commerce-card atelier">
              <div className="commerce-icon blue">🔨</div>
              <div className="commerce-content">
                <h4 className="commerce-name">Atelier Bois & Création</h4>
                <p className="commerce-description">Menuiserie artisanale</p>
                <p className="commerce-location">📍 8 Zone Artisanale</p>
                <div className="commerce-contact">
                  <span className="contact-item">📞 04 42 32 20 43</span>
                </div>
                <div className="commerce-badges">
                  <span className="badge artisanal">🎨 Artisanal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="all-commerces">
            <h3 className="featured-title">Tous les commerces</h3>
            <div className="commerces-list">
              {getFilteredCommerces().map(commerce => (
                <div key={commerce.id} className="commerce-item">
                  <div className="commerce-item-icon">
                    {commerce.icon}
                  </div>
                  <div className="commerce-item-content">
                    <div className="commerce-item-name">
                      {commerce.name}
                      {commerce.village && <span className="village-indicator">🏠 1 Place du Village</span>}
                    </div>
                    <div className="commerce-item-type">{commerce.type}</div>
                    {commerce.phone && (
                      <div className="commerce-item-location">📞 {commerce.phone}</div>
                    )}
                  </div>
                  <div className="commerce-item-actions">
                    <button className="item-action-btn">Contacter</button>
                    <button className="item-action-btn">Y aller</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercesSociaux;
