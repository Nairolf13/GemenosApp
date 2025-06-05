import React, { useState } from 'react';
import '../assets/css/Actualites.css';

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const actualites = [
    {
      id: 1,
      titre: 'Fête de la Saint-Éloi 2024',
      description: 'Rejoignez-nous pour la traditionnelle fête de la Saint-Éloi ! Au programme : messe, procession, animations pour enfants, marché artisanal et repas partagé.',
      contenu: 'La fête patronale de Saint-Éloi aura lieu le dimanche 1er décembre 2024. Cette célébration traditionnelle débutera par une messe à 10h30 en l\'église Saint-Pierre, suivie de la procession dans les rues du village. L\'après-midi sera animé par des spectacles folkloriques, un marché d\'artisans locaux et des jeux pour enfants sur la place du village. Le repas communautaire sera servi à partir de 12h30 à la salle des fêtes (réservation obligatoire). Venez nombreux célébrer notre saint patron !',
      image: '/imgs/saint-eloi.jpg',
      date: '2024-11-15',
      categorie: 'Tradition',
      auteur: 'Mairie de Gémenos',
      important: true,
      dateEvenement: '1er décembre 2024'
    },
    {
      id: 2,
      titre: 'Ruralia 2024 - Salon de l\'Agriculture',
      description: 'Le salon Ruralia revient pour sa 15ème édition ! Découvrez les producteurs locaux, les innovations agricoles et participez aux démonstrations.',
      contenu: 'Ruralia 2024 se déroulera du 22 au 24 novembre au parc des expositions. Cette année, le salon met à l\'honneur l\'agriculture durable et les circuits courts. Plus de 200 exposants présenteront leurs produits et savoir-faire. Au programme : démonstrations de matériel agricole, concours de bovins, marché fermier, conférences sur l\'avenir de l\'agriculture, animations pour toute la famille. Entrée gratuite pour les moins de 12 ans. Restauration sur place avec des produits locaux.',
      image: '/imgs/ruralia.jpg',
      date: '2024-11-10',
      categorie: 'Agriculture',
      auteur: 'Comité d\'organisation Ruralia',
      important: true,
      dateEvenement: '22-24 novembre 2024'
    },
    {
      id: 3,
      titre: 'Grand Loto de l\'École Publique',
      description: 'L\'association des parents d\'élèves organise son loto annuel au profit des sorties scolaires. De nombreux lots à gagner !',
      contenu: 'Samedi 30 novembre à 20h30, salle des fêtes municipale. L\'APE de l\'école publique organise son traditionnel loto annuel. Cette année, plus de 2000€ de lots sont mis en jeu : électroménager, bons d\'achat, paniers garnis, week-end en gîte, etc. Tarifs : 2€ le carton, 10€ les 6 cartons, 15€ les 12 cartons. Buvette et petite restauration sur place. Tous les bénéfices serviront à financer les sorties pédagogiques et les activités scolaires. Réservations conseillées au 04.42.32.XX.XX',
      image: '/imgs/loto.jpg',
      date: '2024-11-08',
      categorie: 'Éducation',
      auteur: 'APE École Publique',
      important: false,
      dateEvenement: '30 novembre 2024'
    },
    {
      id: 4,
      titre: 'Marché de Noël Artisanal',
      description: 'Venez découvrir les créations des artisans locaux et déguster les spécialités de saison lors de notre marché de Noël.',
      contenu: 'Du 14 au 16 décembre, la place du village se transforme en marché de Noël ! Une vingtaine d\'artisans et producteurs locaux vous proposeront leurs créations : bijoux, poteries, savons artisanaux, miels, confitures, vin chaud, marrons grillés... Le Père Noël sera présent samedi et dimanche de 15h à 17h pour le plus grand bonheur des enfants. Animations musicales avec la chorale de l\'école et l\'harmonie municipale. Concours de la plus belle décoration de vitrine pour les commerçants.',
      image: '/imgs/marche-noel.jpg',
      date: '2024-11-12',
      categorie: 'Culture',
      auteur: 'Office de Tourisme',
      important: true,
      dateEvenement: '14-16 décembre 2024'
    },
    {
      id: 5,
      titre: 'Collecte de Jouets pour Noël',
      description: 'Le CCAS organise sa collecte annuelle de jouets au profit des familles en difficulté de la commune.',
      contenu: 'Du 1er au 20 décembre, déposez vos jouets neufs ou en très bon état dans les points de collecte : mairie, école, pharmacie, bureau de poste. Cette action solidaire permet d\'offrir un Noël magique aux enfants de familles en situation précaire. Sont particulièrement recherchés : jeux éducatifs, livres, peluches, jeux de société, matériel de puériculture. La distribution aura lieu le 22 décembre de 14h à 17h au CCAS. Merci pour votre générosité !',
      image: '/imgs/collecte-jouets.jpg',
      date: '2024-11-05',
      categorie: 'Solidarité',
      auteur: 'CCAS Gémenos',
      important: false,
      dateEvenement: '1er-20 décembre 2024'
    },
    {
      id: 6,
      titre: 'Concours d\'Illuminations de Noël',
      description: 'Participez au concours des plus belles décorations de Noël ! Inscriptions ouvertes jusqu\'au 1er décembre.',
      contenu: 'La commune organise son 8ème concours d\'illuminations de Noël. Trois catégories : maisons individuelles, commerces, et associations. Les inscriptions sont ouvertes jusqu\'au 1er décembre en mairie. Le jury passera du 15 au 20 décembre pour évaluer originalité, esthétique et respect de l\'environnement. Remise des prix le 21 décembre à 18h en mairie, suivie d\'un vin chaud offert. Lots : 300€, 200€ et 100€ par catégorie, plus prix spécial "coup de cœur" du public.',
      image: '/imgs/concours-illuminations.jpg',
      date: '2024-11-01',
      categorie: 'Culture',
      auteur: 'Service Animation',
      important: false,
      dateEvenement: 'Jusqu\'au 1er décembre'
    },
    {
      id: 7,
      titre: 'Théâtre : "Les Fourberies de Scapin"',
      description: 'La troupe amateur "Les Tréteaux de Gémenos" présente la célèbre comédie de Molière.',
      contenu: 'Les 6, 7 et 8 décembre à 20h30, salle culturelle municipale. La troupe locale présente une adaptation moderne et drôle des "Fourberies de Scapin" de Molière. Mise en scène par Marie Dubois, cette version revisitée promet de séduire petits et grands. 15 comédiens amateurs sur scène pour 1h30 de pur divertissement. Tarifs : 12€ adultes, 8€ enfants et étudiants, 10€ groupes (+ de 10 personnes). Réservations au 04.42.32.XX.XX ou sur place 30min avant le spectacle.',
      image: '/imgs/theatre.jpg',
      date: '2024-10-28',
      categorie: 'Culture',
      auteur: 'Les Tréteaux de Gémenos',
      important: false,
      dateEvenement: '6-8 décembre 2024'
    },
    {
      id: 8,
      titre: 'Assemblée Générale du Comité des Fêtes',
      description: 'Tous les bénévoles et sympathisants sont invités à l\'AG annuelle du Comité des Fêtes.',
      contenu: 'Vendredi 29 novembre à 20h, salle de réunion de la mairie. Ordre du jour : bilan des manifestations 2024, présentation des comptes, projets 2025, renouvellement du bureau. Le Comité des Fêtes recherche de nouveaux bénévoles pour organiser les événements communaux. Venez découvrir nos activités et rejoindre une équipe dynamique ! Pot de l\'amitié offert à l\'issue de la réunion. Renseignements auprès du président : Jean-Pierre Martin au 06.XX.XX.XX.XX',
      image: '/imgs/comite-fetes.jpg',
      date: '2024-11-20',
      categorie: 'Vie associative',
      auteur: 'Comité des Fêtes',
      important: false,
      dateEvenement: '29 novembre 2024'
    }
  ];

  const categories = ['Toutes', 'Tradition', 'Agriculture', 'Éducation', 'Culture', 'Solidarité', 'Vie associative'];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredActualites = selectedCategory === 'Toutes' 
    ? actualites 
    : actualites.filter(actualite => actualite.categorie === selectedCategory);

  const getCategoryColor = (categorie) => {
    switch(categorie) {
      case 'Tradition': return '#8B4513';
      case 'Agriculture': return '#4CAF50';
      case 'Éducation': return '#2196F3';
      case 'Culture': return '#9C27B0';
      case 'Solidarité': return '#F44336';
      case 'Vie associative': return '#FF9800';
      default: return '#757575';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="actualites-page">
      {/* Hero Section */}
      <div className="actualites-hero">
        <div className="actualites-hero-container">
          <h1>Actualités de Gémenos</h1>
          <p>Restez informés des événements, festivités et nouveautés de votre commune</p>
        </div>
      </div>

      <div className="actualites-container">
        {/* Filtres */}
        <div className="actualites-filters">
          <h2>📰 Toutes les actualités</h2>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={selectedCategory === category ? { 
                  backgroundColor: getCategoryColor(category),
                  color: 'white'
                } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Actualités importantes */}
        <div className="actualites-importantes">
          <h3>🔥 À ne pas manquer</h3>
          <div className="importantes-grid">
            {actualites.filter(a => a.important).slice(0, 3).map(actualite => (
              <div key={actualite.id} className="actualite-importante">
                <div className="importante-badge">IMPORTANT</div>
                <h4>{actualite.titre}</h4>
                <p>{actualite.description.substring(0, 100)}...</p>
                <div className="importante-date">📅 {actualite.dateEvenement}</div>
                <button 
                  className="importante-btn"
                  onClick={() => setSelectedArticle(actualite)}
                >
                  Lire la suite
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Liste des actualités */}
        <div className="actualites-grid">
          {filteredActualites.map(actualite => (
            <article key={actualite.id} className="actualite-card">
              <div className="actualite-image">
                <img src={actualite.image} alt={actualite.titre} />
                <div 
                  className="actualite-category"
                  style={{ backgroundColor: getCategoryColor(actualite.categorie) }}
                >
                  {actualite.categorie}
                </div>
                {actualite.important && (
                  <div className="importance-badge">🔥</div>
                )}
              </div>
              
              <div className="actualite-content">
                <div className="actualite-meta">
                  <span className="actualite-date">📅 {formatDate(actualite.date)}</span>
                  <span className="actualite-auteur">✍️ {actualite.auteur}</span>
                </div>
                
                <h3 className="actualite-titre">{actualite.titre}</h3>
                <p className="actualite-description">{actualite.description}</p>
                
                <div className="actualite-footer">
                  <div className="actualite-event-date">
                    🎯 Événement : {actualite.dateEvenement}
                  </div>
                  <button 
                    className="actualite-btn"
                    onClick={() => setSelectedArticle(actualite)}
                  >
                    Lire plus →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="newsletter-section">
          <h3>📬 Restez informé</h3>
          <p>Inscrivez-vous à notre newsletter pour recevoir toutes les actualités de Gémenos</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">S'abonner</button>
          </div>
        </div>
      </div>

      {/* Modal pour article complet */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedArticle(null)}
            >
              ✕
            </button>
            
            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.titre}
              className="modal-image"
            />
            
            <div className="modal-body">
              <div className="modal-meta">
                <span 
                  className="modal-category"
                  style={{ backgroundColor: getCategoryColor(selectedArticle.categorie) }}
                >
                  {selectedArticle.categorie}
                </span>
                <span className="modal-date">📅 {formatDate(selectedArticle.date)}</span>
              </div>
              
              <h2 className="modal-titre">{selectedArticle.titre}</h2>
              
              <div className="modal-event-date">
                🎯 <strong>Date de l'événement :</strong> {selectedArticle.dateEvenement}
              </div>
              
              <div className="modal-contenu">
                {selectedArticle.contenu.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="modal-footer">
                <span className="modal-auteur">✍️ Publié par {selectedArticle.auteur}</span>
                <div className="modal-actions">
                  <button className="modal-share">📤 Partager</button>
                  <button className="modal-calendar">📅 Ajouter au calendrier</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Actualites;
