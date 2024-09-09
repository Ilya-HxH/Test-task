import React from 'react';

const Header = ({ onShowAbout, onShowHome }) => {
  return (
    <header className="py-4">
      <div className="bg-[#1A1A1A08] rounded-2xl mx-auto px-8 py-4 flex justify-between items-center" style={{ maxWidth: '1480px' }}>
        <div className="text-2xl font-bold">
          <span onClick={onShowHome} className="border-l border-r border-black px-2 cursor-pointer">SPOT</span>
        </div>

        <nav className="flex-1 flex justify-center space-x-6 text-gray-700 font-medium">
          <a href="#" onClick={onShowHome} className="hover:text-gray-900 transition-colors">Минимализм</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Эмблемы</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Абстракция</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Стартапы</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Типография</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Лаконичные</a>
        </nav>

        <nav className="flex space-x-6 text-gray-700 font-medium">
          <a href="#" onClick={onShowAbout} className="hover:text-gray-900 transition-colors">О нас</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
