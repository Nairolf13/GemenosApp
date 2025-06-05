import React, { useState } from 'react';
import '../assets/css/Suggestions.css';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    categorie: '',
    titre: '',
    description: '',
    localisation: '',
    priorite: 'moyenne',
    anonyme: false
  });

  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      nom: 'Marie Dupont',
      titre: 'Amélioration de l\'éclairage public rue des Platanes',
      description: 'Les lampadaires de la rue des Platanes sont défaillants, créant des zones d\'ombre dangereuses le soir.',
      categorie: 'Infrastructure',
      priorite: 'élevée',
      date: '2024-10-01',
      statut: 'En cours d\'étude',
      votes: 23,
      localisation: 'Rue des Platanes'
    },
    {
      id: 2,
      nom: 'Jean Martin',
      titre: 'Création d\'une aire de jeux pour enfants',
      description: 'Proposition de création d\'une aire de jeux sécurisée dans le parc municipal avec équipements adaptés aux différents âges.',
      categorie: 'Loisirs',
      priorite: 'moyenne',
      date: '2024-09-28',
      statut: 'Acceptée',
      votes: 45,
      localisation: 'Parc municipal'
    },
    {
      id: 3,
      nom: 'Anonyme',
      titre: 'Installation de poubelles de tri sélectif',
      description: 'Augmenter le nombre de points de tri sélectif dans le centre-ville pour encourager le recyclage.',
      categorie: 'Environnement',
      priorite: 'moyenne',
      date: '2024-10-03',
      statut: 'Nouvelle',
      votes: 12,
      localisation: 'Centre-ville'
    }
  ]);

  const [filterCategory, setFilterCategory] = useState('Toutes');
  const [filterStatus, setFilterStatus] = useState('Tous');

  const categories = ['Infrastructure', 'Transport', 'Environnement', 'Loisirs', 'Sécurité', 'Social', 'Culture'];
  const statuts = ['Nouvelle', 'En cours d\'étude', 'Acceptée', 'Refusée', 'Réalisée'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSuggestion = {
      id: suggestions.length + 1,
      nom: formData.anonyme ? 'Anonyme' : formData.nom,
      titre: formData.titre,
      description: formData.description,
      categorie: formData.categorie,
      priorite: formData.priorite,
      date: new Date().toISOString().split('T')[0],
      statut: 'Nouvelle',
      votes: 0,
      localisation: formData.localisation
    };
    
    setSuggestions(prev => [newSuggestion, ...prev]);
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      categorie: '',
      titre: '',
      description: '',
      localisation: '',
      priorite: 'moyenne',
      anonyme: false
    });
    alert('Votre suggestion a été envoyée avec succès !');
  };

  const handleVote = (id) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === id 
          ? { ...suggestion, votes: suggestion.votes + 1 }
          : suggestion
      )
    );
  };

  const filteredSuggestions = suggestions.filter(suggestion => {
    const categoryMatch = filterCategory === 'Toutes' || suggestion.categorie === filterCategory;
    const statusMatch = filterStatus === 'Tous' || suggestion.statut === filterStatus;
    return categoryMatch && statusMatch;
  });

  const getStatusColor = (statut) => {
    switch(statut) {
      case 'Nouvelle': return '#2196F3';
      case 'En cours d\'étude': return '#FF9800';
      case 'Acceptée': return '#4CAF50';
      case 'Refusée': return '#F44336';
      case 'Réalisée': return '#9C27B0';
      default: return '#757575';
    }
  };

  const getPriorityColor = (priorite) => {
    switch(priorite) {
      case 'élevée': return '#F44336';
      case 'moyenne': return '#FF9800';
      case 'faible': return '#4CAF50';
      default: return '#757575';
    }
  };

  return (
    <div className="suggestions-page">
      <div className="suggestions-hero">
        <div className="suggestions-hero-container">
          <h1>Suggestions citoyennes</h1>
          <p>Participez à l'amélioration de notre commune en proposant vos idées et recommandations</p>
        </div>
      </div>

      <div className="suggestions-container">
        <div className="suggestions-stats">
          <div className="stat-card">
            <div className="stat-number">{suggestions.length}</div>
            <div className="stat-label">Suggestions reçues</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{suggestions.filter(s => s.statut === 'Réalisée').length}</div>
            <div className="stat-label">Projets réalisés</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{suggestions.reduce((sum, s) => sum + s.votes, 0)}</div>
            <div className="stat-label">Votes citoyens</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{suggestions.filter(s => s.statut === 'En cours d\'étude').length}</div>
            <div className="stat-label">En cours d'étude</div>
          </div>
        </div>

        <div className="suggestion-form-section">
          <h2>💡 Proposer une nouvelle suggestion</h2>
          <form onSubmit={handleSubmit} className="suggestion-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nom">Nom complet *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  disabled={formData.anonyme}
                  placeholder="Votre nom et prénom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="form-group">
                <label htmlFor="categorie">Catégorie *</label>
                <select
                  id="categorie"
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="titre">Titre de la suggestion *</label>
              <input
                type="text"
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleInputChange}
                required
                placeholder="Résumez votre suggestion en quelques mots"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description détaillée *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="Décrivez votre suggestion de manière détaillée : problème constaté, solution proposée, bénéfices attendus..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="localisation">Localisation</label>
                <input
                  type="text"
                  id="localisation"
                  name="localisation"
                  value={formData.localisation}
                  onChange={handleInputChange}
                  placeholder="Adresse ou lieu concerné"
                />
              </div>
              <div className="form-group">
                <label htmlFor="priorite">Niveau de priorité</label>
                <select
                  id="priorite"
                  name="priorite"
                  value={formData.priorite}
                  onChange={handleInputChange}
                >
                  <option value="faible">Faible</option>
                  <option value="moyenne">Moyenne</option>
                  <option value="élevée">Élevée</option>
                </select>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="anonyme"
                  checked={formData.anonyme}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Soumettre cette suggestion de manière anonyme
              </label>
            </div>

            <button type="submit" className="submit-btn">
              📤 Envoyer ma suggestion
            </button>
          </form>
        </div>

        <div className="suggestions-filters">
          <h2>📋 Suggestions de la communauté</h2>
          <div className="filters-row">
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              <option value="Toutes">Toutes les catégories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="Tous">Tous les statuts</option>
              {statuts.map(statut => (
                <option key={statut} value={statut}>{statut}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="suggestions-list">
          {filteredSuggestions.map(suggestion => (
            <div key={suggestion.id} className="suggestion-card">
              <div className="suggestion-header">
                <div className="suggestion-meta">
                  <span className="suggestion-author">👤 {suggestion.nom}</span>
                  <span className="suggestion-date">📅 {new Date(suggestion.date).toLocaleDateString('fr-FR')}</span>
                  {suggestion.localisation && (
                    <span className="suggestion-location">📍 {suggestion.localisation}</span>
                  )}
                </div>
                <div className="suggestion-badges">
                  <span 
                    className="priority-badge"
                    style={{ backgroundColor: getPriorityColor(suggestion.priorite) }}
                  >
                    {suggestion.priorite}
                  </span>
                  <span 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(suggestion.statut) }}
                  >
                    {suggestion.statut}
                  </span>
                </div>
              </div>
              
              <div className="suggestion-content">
                <h3 className="suggestion-title">{suggestion.titre}</h3>
                <p className="suggestion-description">{suggestion.description}</p>
                <span className="suggestion-category">{suggestion.categorie}</span>
              </div>
              
              <div className="suggestion-actions">
                <button 
                  className="vote-btn"
                  onClick={() => handleVote(suggestion.id)}
                >
                  👍 {suggestion.votes} votes
                </button>
                <button className="share-btn">📤 Partager</button>
                <button className="comment-btn">💬 Commenter</button>
              </div>
            </div>
          ))}
        </div>

        <div className="suggestions-guide">
          <h2>🗂️ Comment bien formuler votre suggestion ?</h2>
          <div className="guide-cards">
            <div className="guide-card">
              <div className="guide-icon">🎯</div>
              <h3>Soyez précis</h3>
              <p>Décrivez clairement le problème observé et la solution que vous proposez</p>
            </div>
            <div className="guide-card">
              <div className="guide-icon">📍</div>
              <h3>Localisez</h3>
              <p>Indiquez l'adresse ou le lieu exact concerné par votre suggestion</p>
            </div>
            <div className="guide-card">
              <div className="guide-icon">💡</div>
              <h3>Proposez des solutions</h3>
              <p>Ne vous contentez pas de signaler un problème, proposez des pistes d'amélioration</p>
            </div>
            <div className="guide-card">
              <div className="guide-icon">🤝</div>
              <h3>Pensez collectif</h3>
              <p>Privilégiez les suggestions qui bénéficieront au plus grand nombre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
