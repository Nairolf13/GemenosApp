import React from 'react';
import Hero from '../components/Hero';
import QuickAccess from '../components/QuickAccess';
import News from '../components/News';

const Accueil = () => {
  React.useEffect(() => {
    console.log('Accueil component mounted!');
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
