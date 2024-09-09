import React from 'react';

const Footer = () => {
  return (
    <>
      
      <footer className="bg-black text-white py-8 rounded-lg mx-auto my-2 px-8" style={{ maxWidth: '1480px' }}>
        <div className="flex justify-between">
          
          <div className="w-1/3">
            <div className="text-2xl font-bold mb-4">
              <span className="border-l border-r border-white px-2">SPOT</span>
            </div>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Nibh ut urna sapien faucibus. Lorem euismod dui amet et orci consequat dolor. Pellentesque pulvinar in a pretium et viverra. Amet tortor sollicitudin eget at libero. Non volutpat pretium hendrerit etiam in non amet massa at. Ut sapien sed neque eu maecenas.
            </p>
          </div>

          
          <div className="w-1/3 flex justify-between">
            
            <div className="space-y-4">
              <h4 className="font-semibold">Email</h4>
              <p>spot.shop@gmail.com</p>
              <h4 className="font-semibold">Номер</h4>
              <p>+7 (555) 123-4567</p>
            </div>

            
            <div className="space-y-4">
              <h4 className="font-semibold">Соц.сети</h4>
              <ul>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      
      <div className="flex justify-between text-gray-400 text-sm mt-[-20px] px-8 pb-4" style={{ maxWidth: '1480px', margin: '0 auto' }}>
        <p>© Copyright 2024 Spot. Все права защищены.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Политика конфиденциальности</a>
          <a href="#" className="hover:underline">Публичная Оферта</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
