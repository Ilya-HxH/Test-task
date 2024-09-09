import React from 'react';
import miniImage from '../assets/mini.png';
import startupImage from '../assets/marketing.png';
import mainImage from '../assets/Rectangle.png';

const HeroSection = () => {
  return (
    <section className="bg-white pt-16">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-4 items-start"> {/* Добавлен класс items-start для выравнивания */}
          {/* Текстовый блок слева */}
          <div className="col-span-1 row-span-2 bg-[#BFBEBB] p-8 rounded-lg flex flex-col justify-between h-[495px]">
            <h1 className="text-4xl font-bold text-white">Начните с Идеи — Создайте Идентичность</h1>
            <p className="text-white mt-6">
              Вы на пороге великого начинания? Подберите уникальный логотип, который подчеркнёт инновационность и оригинальность вашего стартапа, выделяя его на рынке. Сделайте первый шаг к успеху с дизайном, созданным специально для вашей идеи.
            </p>
          </div>

          {/* Блок с изображением справа */}
          <div className="col-span-2 row-span-2 bg-beige-400 rounded-lg flex justify-center items-center h-full">
            <img src={mainImage} alt="Main Design" className="w-full h-auto rounded-lg" />
          </div>

          {/* Блоки "Стартапы" и "Минимализм" */}
          <div className="grid grid-cols-2 gap-4 col-span-1">
            <div className="relative bg-white rounded-lg flex items-center justify-center top-[-230px]"> {/* Изменена высота для подъема блоков */}
              <img src={startupImage} alt="Marketing" className="w-full h-auto rounded-lg opacity-80" />
              <div className="absolute bottom-0 left-0 p-4 text-white text-lg font-semibold bg-none bg-opacity-50">
                Стартапы
              </div>
            </div>
            <div className="relative bg-white rounded-lg flex items-center justify-center top-[-230px]"> {/* Изменена высота для подъема блоков */}
              <img src={miniImage} alt="Минимализм" className="w-full h-auto rounded-lg opacity-80" />
              <div className="absolute bottom-0 left-0 p-4 text-white text-lg font-semibold bg-none bg-opacity-50">
                Минимализм
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
