import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/Agenda.css';

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');
  const [viewMode, setViewMode] = useState('calendar'); 

  const events = [
    {
      id: 1,
      date: new Date(2024, 9, 15), 
      title: 'Marché de sécurité - Quartier des Oliviers',
      description: 'Rejoignez-nous pour une matinée de sécurité citoyenne dans le quartier des Oliviers. Rendez-vous place de la Fontaine.',
      time: '14h30 - 16h30',
      location: 'Place de la Fontaine',
      participants: '12 inscrits',
      category: 'Sécurité',
      color: '#FF9800'
    },
    {
      id: 2,
      date: new Date(2024, 9, 18),
      title: 'Récolte collective - Terrain partagé',
      description: 'Venez participer à la récolte collective sur le terrain partagé près de l\'école. Apportez vos paniers !',
      time: '09h00 - 12h00',
      location: 'Terrain partagé - École',
      participants: '8 inscrits',
      category: 'Agriculture',
      color: '#4CAF50'
    },
    {
      id: 3,
      date: new Date(2024, 9, 22), 
      title: 'Conseil municipal public',
      description: 'Séance publique du conseil municipal. Ordre du jour : budget 2025, projets d\'aménagement.',
      time: '18h00 - 20h00',
      location: 'Salle du conseil municipal',
      participants: '',
      category: 'Transparence',
      color: '#2196F3'
    },
    {
      id: 4,
      date: new Date(2024, 10, 5), 
      title: 'Fête de l\'automne',
      description: 'Célébration de l\'automne avec marché local, animations pour enfants et dégustations.',
      time: '10h00 - 18h00',
      location: 'Place du village',
      participants: '45 inscrits',
      category: 'Culture',
      color: '#9C27B0'
    }
  ];

  const hasEventsOnDate = (date) => {
    return events.some(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const getFilteredEvents = () => {
    if (selectedCategory === 'Toutes catégories') {
      return events;
    }
    return events.filter(event => event.category === selectedCategory);
  };

  return (
    <div className="agenda-page">
      <div className="agenda-hero">
        <div className="agenda-hero-container">
          <h1>Agenda communal</h1>
          <p>Découvrez tous les événements, marchés de sécurité et activités de notre commune</p>
        </div>
      </div>

      <div className="agenda-container">
        <div className="agenda-filters">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option>Toutes catégories</option>
            <option>Sécurité</option>
            <option>Agriculture</option>
            <option>Transparence</option>
            <option>Culture</option>
          </select>

          <div className="view-toggles">
            <button 
              className={`view-toggle ${viewMode === 'calendar' ? 'active' : ''}`}
              onClick={() => setViewMode('calendar')}
            >
              📅
            </button>
            <button 
              className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋
            </button>
          </div>
        </div>

        {viewMode === 'calendar' && (
          <div className="calendar-section">
            <div className="react-calendar-container">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                locale="fr-FR"
                tileClassName={({ date, view }) => {
                  if (view === 'month') {
                    if (hasEventsOnDate(date)) {
                      return 'has-event-tile';
                    }
                  }
                  return null;
                }}
                tileContent={({ date, view }) => {
                  if (view === 'month') {
                    const dayEvents = getEventsForDate(date);
                    if (dayEvents.length > 0) {
                      return (
                        <div className="event-indicators">
                          {dayEvents.slice(0, 3).map((event, index) => (
                            <div
                              key={index}
                              className="event-dot"
                              style={{ backgroundColor: event.color }}
                              title={event.title}
                            />
                          ))}
                          {dayEvents.length > 3 && (
                            <span className="more-events">+{dayEvents.length - 3}</span>
                          )}
                        </div>
                      );
                    }
                  }
                  return null;
                }}
              />
            </div>
            
            {getEventsForDate(selectedDate).length > 0 && (
              <div className="selected-date-events">
                <h3>
                  Événements du {selectedDate.toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                <div className="day-events-list">
                  {getEventsForDate(selectedDate).map(event => (
                    <div key={event.id} className="day-event-card">
                      <div className="day-event-time" style={{ backgroundColor: event.color }}>
                        {event.time}
                      </div>
                      <div className="day-event-content">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="events-section">
            <h2>Événements à venir</h2>
            <div className="events-list">
              {getFilteredEvents().map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-date" style={{ backgroundColor: event.color }}>
                    <span className="event-day">{event.date.getDate()}</span>
                    <span className="event-month">
                      {event.date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()}
                    </span>
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="event-details">
                      <span className="event-time">🕐 {event.time}</span>
                      <span className="event-location">📍 {event.location}</span>
                      {event.participants && (
                        <span className="event-participants">👥 {event.participants}</span>
                      )}
                    </div>
                  </div>
                  <div className="event-actions">
                    <span className={`event-category ${event.category.toLowerCase()}`}>
                      {event.category}
                    </span>
                    <button className="event-btn">S'inscrire</button>
                    <button className="event-btn-icon">📤</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agenda;
