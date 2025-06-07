import React from 'react';
import Hero from '../components/Hero';
import QuickAccess from '../components/QuickAccess';
import News from '../components/News';

const Accueil = () => {
  React.useEffect(() => {
    // Initialisation du composant Accueil
  }, []);

  return (
    <div>
      <Hero />
      <QuickAccess />
      <News />
    </div>
  );
};

export default Accueil;
