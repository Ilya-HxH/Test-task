import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';

const AbstractLogos = () => {
  const logos = [
    { image: logo1, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo2, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo3, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo4, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo5, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo6, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo7, name: "BrillianceSpark", price: "420 500 ₸" },
    { image: logo8, name: "BrillianceSpark", price: "420 500 ₸" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Чистота и Простота: Логотипы в Стиле Минимализм</h2>
        <div className="grid grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="bg-gray-100 p-12 rounded-lg relative">
              
              <div className="absolute top-4 left-4 text-gray-700 font-semibold">{logo.name}</div>
              
              
              {logo.discount && (
                <div className="absolute top-4 right-4 bg-transparent text-gray-500 text-sm">
                  {logo.discount}
                </div>
              )}
              
              
              <img src={logo.image} alt={logo.name} className="w-full h-auto mb-4 rounded-lg" />
              
              
              <div className="absolute bottom-4 right-4 text-gray-900 font-bold">{logo.price}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-full hover:bg-gray-400">Смотреть больше</button>
        </div>
      </div>
    </section>
  );
};

export default AbstractLogos;
