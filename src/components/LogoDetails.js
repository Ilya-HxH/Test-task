import React from 'react';
import logo1 from '../assets/logo1.png'; 
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png'; 
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png'; 
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png'; 
import logo8 from '../assets/logo8.png';

const relatedLogos = [
  { id: 1, image: logo1, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 2, image: logo2, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 3, image: logo3, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 4, image: logo4, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 5, image: logo5, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 6, image: logo6, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 7, image: logo7, name: "BrillianceSpark", price: "420 500 ₸" },
  { id: 8, image: logo8, name: "BrillianceSpark", price: "420 500 ₸" },
];

const LogoDetails = ({ logo }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 items-start">
          
          <div className="col-span-1 flex flex-col justify-between mt-28">
            <div>
              <h1 className="text-4xl font-bold mb-4">{logo.name}</h1>
              <p className="text-xl text-gray-600 mb-4">Минимализм</p>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur. Vel pretium tristique laoreet neque ornare metus eu vitae.
                Ornare id mattis auctor libero nunc non ac elementum vestibulum. 
              </p>
            </div>
            <button className="bg-gray-300 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-400">
              Купить
            </button>
          </div>

          <div className="col-span-1 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4">{logo.name}</h2>
            <p className="text-2xl font-semibold text-gray-700 mb-6">{logo.price}</p>
            <div className="w-[80%] mb-6">
              <img src={logo.image} alt={logo.name} className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {relatedLogos.slice(0, 4).map((relatedLogo) => (
                <img key={relatedLogo.id} src={relatedLogo.image} alt={relatedLogo.name} className="w-16 h-16 rounded-lg cursor-pointer" />
              ))}
            </div>
          </div>

          <div className="col-span-1 mt-28">
            <h2 className="text-3xl font-bold mb-6">Что входит в покупку</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Векторный файл (.AI, .EPS, .SVG) для масштабирования</li>
              <li>Растровые файлы (.PNG, .JPG) для использования на веб-сайтах</li>
              <li>Альтернативные версии (монохромные, инвертированные)</li>
              <li>Описание и коды цветов (HEX, RGB, CMYK)</li>
              <li>Рекомендации по использованию логотипа</li>
              <li>Лицензия на коммерческое использование логотипа</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Возможно, вас заинтересует</h2>
          <div className="grid grid-cols-4 gap-6">
            {relatedLogos.map((relatedLogo) => (
              <div key={relatedLogo.id} className="bg-gray-100 p-12 rounded-lg relative cursor-pointer">
                <div className="absolute top-4 left-4 text-gray-700 font-semibold">{relatedLogo.name}</div>
                <img src={relatedLogo.image} alt={relatedLogo.name} className="w-full h-auto mb-4 rounded-lg" />
                <div className="absolute bottom-4 right-4 text-gray-900 font-bold">{relatedLogo.price}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogoDetails;
