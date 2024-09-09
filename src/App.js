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
  const [showAbout, setShowAbout] = useState(false); // Состояние для отображения "О нас"
  const [selectedLogo, setSelectedLogo] = useState(null); // Состояние для отображения деталей логотипа

  // Функция для показа секции "О нас"
  const handleShowAbout = () => {
    setShowAbout(true);
    setSelectedLogo(null); // Скрываем лого детали, если открываем "О нас"
  };

  // Функция для возвращения к домашней странице
  const handleShowHome = () => {
    setShowAbout(false);
    setSelectedLogo(null); // Скрываем лого детали при возврате на главную
  };

  // Функция для показа деталей логотипа
  const handleShowLogoDetails = (logo) => {
    setSelectedLogo(logo); // Устанавливаем выбранный логотип
    setShowAbout(false); // Скрываем "О нас", если показываем детали логотипа
  };

  return (
    <div>
      {/* Передаем функции handleShowAbout и handleShowHome в Header */}
      <Header onShowAbout={handleShowAbout} onShowHome={handleShowHome} />

      {/* Если выбраны детали логотипа, отображаем их */}
      {selectedLogo ? (
        <LogoDetails logo={selectedLogo} /> // Отображаем компонент с деталями логотипа
      ) : showAbout ? (
        <AboutSection /> // Отображаем секцию "О нас"
      ) : (
        <>
          <HeroSection />
          <MinimalistLogos onLogoClick={handleShowLogoDetails} /> {/* Передаем функцию клика на логотип */}
          <AboutUs />
          <AbstractLogos />
        </>
      )}

      
      <Footer />
    </div>
  );
}

export default App;
