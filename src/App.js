import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MinimalistLogos from './components/MinimalistLogos';
import AboutUs from './components/AboutUs';
import AbstractLogos from './components/AbstractLogos';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import LogoDetails from './components/LogoDetails';

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);


  const handleShowAbout = () => {
    setShowAbout(true);
    setSelectedLogo(null);
  };


  const handleShowHome = () => {
    setShowAbout(false);
    setSelectedLogo(null);
  };


  const handleShowLogoDetails = (logo) => {
    setSelectedLogo(logo);
    setShowAbout(false);
  };

  return (
    <div>
      <Header onShowAbout={handleShowAbout} onShowHome={handleShowHome} />

      {selectedLogo ? (
        <LogoDetails logo={selectedLogo} />
      ) : showAbout ? (
        <AboutSection />
      ) : (
        <>
          <HeroSection />
          <MinimalistLogos onLogoClick={handleShowLogoDetails} />
          <AboutUs />
          <AbstractLogos />
        </>
      )}

      
      <Footer />
    </div>
  );
}

export default App;
