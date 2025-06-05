import React from 'react';
import '../assets/css/News.css';

const News = () => {
  const newsItems = [
    {
      title: "Mesures de sécurité dans le quartier des Oliviers",
      description: "Mise en place de nouveaux équipements de sécurité pour améliorer la protection des habitants",
      date: "3 juin 2025",
      icon: "🛡️",
      color: "#E8F5E8"
    },
    {
      title: "Nouveaux jardins partagés disponibles",
      description: "20 nouvelles parcelles ont été aménagées pour encourager l'agriculture locale et le partage communautaire",
      date: "1 juin 2025", 
      icon: "🌻",
      color: "#FFF3E0"
    },
    {
      title: "Budget municipal 2025 adopté",
      description: "Le budget favorise les investissements dans l'éducation et l'environnement avec une augmentation de 15%",
      date: "28 mai 2025",
      icon: "💰",
      color: "#E3F2FD"
    }
  ];

  return (
    <section className="news">
      <div className="news-container">
        <div className="news-header">
          <h2 className="section-title">Dernières actualités</h2>
          <a href="/actualites" className="view-all-link">
            Voir toutes les actualités →
          </a>
        </div>
        
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card" style={{backgroundColor: item.color}}>
              <div className="news-icon">{item.icon}</div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                <span className="news-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
