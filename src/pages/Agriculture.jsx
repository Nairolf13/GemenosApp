import React, { useState } from 'react';
import '../assets/css/Agriculture.css';

const Agriculture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: '',
    type: '',
    description: '',
    features: [],
    availability: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposition de terrain:', formData);
    alert('Merci pour votre proposition ! Nous vous contacterons bientôt.');
  };

  const terrainsDisponibles = [
    {
      id: 1,
      name: "Terrain des Oliviers",
      location: "Quartier des Oliviers, 13420 Gémenos",
      size: "150 m²",
      description: "Terrain ensoleillé avec accès à l'eau, idéal pour potager collectif. Sol fertile et bien drainé.",
      features: ["Eau courante", "Exposition sud", "Clôturé", "Composteur"],
      owner: "Marie Dupont",
      contact: "marie.d@email.com"
    },
    {
      id: 2,
      name: "Parcelle du Moulin",
      location: "Chemin du Moulin, 13420 Gémenos",
      size: "200 m²",
      description: "Grande parcelle familiale avec cabanon de rangement. Possibilité de créer plusieurs parcelles individuelles.",
      features: ["Cabanon", "Parking proche", "Terre travaillée", "Arrosage"],
      owner: "Jean Martin",
      contact: "j.martin@email.com"
    },
    {
      id: 3,
      name: "Jardin de la Fontaine",
      location: "Près de la Place de la Fontaine",
      size: "80 m²",
      description: "Petit terrain parfait pour débutants ou projet pédagogique avec les enfants.",
      features: ["Centre-ville", "Petite serre", "Bacs surélevés"],
      owner: "Association Les Verts Jardins",
      contact: "contact@vertsjardins.org"
    }
  ];

  return (
    <div className="agriculture-page">
      {/* Hero Section */}
      <div className="agriculture-hero">
        <div className="agriculture-hero-container">
          <h1>🌱 Agriculture Partagée</h1>
          <p>Cultivons ensemble ! Proposez votre terrain ou rejoignez une initiative d'agriculture collective pour créer des espaces verts partagés dans notre commune.</p>
        </div>
      </div>

      <div className="agriculture-container">
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <span className="stat-icon">🏡</span>
            <div className="stat-number">12</div>
            <div className="stat-label">Terrains disponibles</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">👥</span>
            <div className="stat-number">45</div>
            <div className="stat-label">Jardiniers actifs</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🥕</span>
            <div className="stat-number">8</div>
            <div className="stat-label">Projets en cours</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🌍</span>
            <div className="stat-number">2.5</div>
            <div className="stat-label">Hectares cultivés</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Formulaire de proposition */}
          <div className="propose-terrain">
            <h2>🏡 Proposer mon terrain</h2>
            <p style={{ marginBottom: '25px', color: '#666' }}>
              Vous avez un terrain inutilisé ? Partagez-le avec la communauté pour créer un espace de culture collective !
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="form-group">
                <label>Adresse du terrain *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Adresse complète du terrain"
                />
              </div>

              <div className="form-group">
                <label>Superficie approximative *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez la taille</option>
                  <option value="small">Moins de 50 m²</option>
                  <option value="medium">50 à 150 m²</option>
                  <option value="large">150 à 300 m²</option>
                  <option value="xlarge">Plus de 300 m²</option>
                </select>
              </div>

              <div className="form-group">
                <label>Type de partage souhaité *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choisissez une option</option>
                  <option value="community">Jardin communautaire</option>
                  <option value="shared">Partage de parcelles</option>
                  <option value="education">Projet pédagogique</option>
                  <option value="family">Jardinage familial</option>
                </select>
              </div>

              <div className="form-group">
                <label>Description du terrain</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre terrain : exposition, sol, accès, etc."
                />
              </div>

              <div className="form-group">
                <label>Équipements disponibles</label>
                <div className="checkbox-group">
                  {['Accès à l\'eau', 'Cabanon/Rangement', 'Clôture', 'Composteur', 'Outils', 'Parking'].map(feature => (
                    <div key={feature} className="checkbox-item">
                      <input
                        type="checkbox"
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureChange(feature)}
                      />
                      <label htmlFor={feature}>{feature}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Période de disponibilité</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="Ex: Toute l'année, Mars à Octobre..."
                />
              </div>

              <button type="submit" className="submit-btn">
                🌱 Proposer mon terrain
              </button>
            </form>
          </div>

          {/* Terrains disponibles */}
          <div className="terrains-disponibles">
            <h2>🌿 Terrains disponibles</h2>
            <p style={{ marginBottom: '25px', color: '#666' }}>
              Découvrez les terrains mis à disposition par nos concitoyens pour vos projets de jardinage.
            </p>

            {terrainsDisponibles.map(terrain => (
              <div key={terrain.id} className="terrain-card">
                <div className="terrain-header">
                  <div className="terrain-info">
                    <h3>{terrain.name}</h3>
                    <div className="terrain-location">
                      📍 {terrain.location}
                    </div>
                  </div>
                  <div className="terrain-size">{terrain.size}</div>
                </div>

                <div className="terrain-description">
                  {terrain.description}
                </div>

                <div className="terrain-features">
                  {terrain.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="terrain-actions">
                  <button className="contact-btn">
                    Contacter le propriétaire
                  </button>
                  <button className="info-btn">
                    Plus d'infos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Section */}
        <div className="guide-section">
          <h2>📖 Comment ça marche ?</h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <h3>Proposez votre terrain</h3>
              <p>Remplissez le formulaire avec les détails de votre terrain disponible</p>
            </div>
            <div className="guide-step">
              <div className="step-number">2</div>
              <h3>Validation municipale</h3>
              <p>Nos équipes vérifient la faisabilité et la sécurité du projet</p>
            </div>
            <div className="guide-step">
              <div className="step-number">3</div>
              <h3>Mise en relation</h3>
              <p>Nous vous mettons en contact avec des jardiniers intéressés</p>
            </div>
            <div className="guide-step">
              <div className="step-number">4</div>
              <h3>Accompagnement</h3>
              <p>Suivi et conseil pour réussir votre projet de jardinage partagé</p>
            </div>
          </div>
        </div>

        {/* Initiatives Section */}
        <div className="initiatives-section">
          <h2>🌱 Nos initiatives en cours</h2>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <span className="initiative-icon">🥬</span>
              <h3>Potager des Écoles</h3>
              <p>Projet pédagogique avec l'école primaire pour sensibiliser les enfants au jardinage biologique.</p>
              <button className="join-btn">Rejoindre le projet</button>
            </div>

            <div className="initiative-card">
              <span className="initiative-icon">🌻</span>
              <h3>Jardin des Seniors</h3>
              <p>Espace de jardinage adapté aux seniors avec parcelles surélevées et bancs de repos.</p>
              <button className="join-btn">S'inscrire</button>
            </div>

            <div className="initiative-card">
              <span className="initiative-icon">🌿</span>
              <h3>Herbes Aromatiques</h3>
              <p>Culture collective d'herbes aromatiques et plantes médicinales dans le centre-ville.</p>
              <button className="join-btn">Participer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
