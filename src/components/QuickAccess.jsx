import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/QuickAccess.css';

const QuickAccess = () => {
  const quickAccessItems = [
    {
      title: "Agenda communal",
      description: "Découvrez les événements et activités organisés dans votre commune",
      icon: "📅",
      color: "#FFE4B5",
      link: "/agenda",
      buttonText: "Voir les événements"
    },
    {
      title: "Agriculture partagée",
      description: "Participez aux jardins partagés et découvrez les initiatives locales",
      icon: "🌱",
      color: "#E0FFE0",
      link: "/agriculture",
      buttonText: "Rejoindre un jardin"
    },
    {
      title: "Transparence",
      description: "Consultez les comptes et décisions de la commune en toute transparence",
      icon: "📊",
      color: "#E6F3FF",
      link: "/transparence",
      buttonText: "Voir les comptes"
    },
    {
      title: "Commerces locaux",
      description: "Soutenez les commerces et artisans de votre commune",
      icon: "🏪",
      color: "#FFE0F0",
      link: "/commerces",
      buttonText: "Voir les commerces"
    },
    {
      title: "Suggestions citoyennes",
      description: "Proposez vos idées pour améliorer la vie de la commune",
      icon: "💡",
      color: "#F0F8FF",
      link: "/suggestions",
      buttonText: "Faire une suggestion"
    },
    {
      title: "Actualités",
      description: "Restez informés des dernières nouvelles de la commune",
      icon: "📰",
      color: "#FFF8DC",
      link: "/actualites",
      buttonText: "Voir les actualités"
    }
  ];

  return (
    <section className="quick-access">
      <div className="quick-access-container">
        <h2 className="section-title">Accès rapide</h2>
        <div className="quick-access-grid">
          {quickAccessItems.map((item, index) => (
            <div key={index} className="quick-access-card" style={{backgroundColor: item.color}}>
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <Link to={item.link} className="card-button">
                {item.buttonText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
