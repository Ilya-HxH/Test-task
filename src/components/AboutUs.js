import React from 'react';
import logo1 from '../assets/fidelity-card.png';
import logo2 from '../assets/luxury-fashion.png';

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 gap-8">
        
        
        <div className="grid grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg">
          {/* Левый текстовый блок */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">О Нас: Вдохновение и Инновации в Каждой Детали</h2>
            <p className="text-lg text-gray-700">
              Мы — команда увлеченных профессионалов, стремящихся создать уникальные решения для вашего бизнеса. В нашем портфолио — разнообразные проекты, от элегантных логотипов до комплексных веб-дизайнов.
              <br />
              <br />
              Мы верим в силу креативности и внимательность к деталям, чтобы каждое наше произведение не только привлекало внимание, но и эффективно решало ваши задачи. Наша цель — помочь вам выделиться на фоне конкурентов и достичь новых высот. Позвольте нам стать частью вашего успеха!
            </p>
          </div>

          {/* Правое изображение */}
          <div className="flex justify-center items-center">
            <img src={logo1} alt="Fidelity Card Business" className="rounded-3xl shadow-lg w-11/12 h-auto" />
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg">
          {/* Левое изображение */}
          <div className="flex justify-center items-center ">
            <img src={logo2} alt="Luxury Fashion" className="rounded-3xl shadow-lg w-11/12 h-auto" />
          </div>

          {/* Правый текстовый блок */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur Euismod</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Volutpat ut pellentesque donec mauris auctor ultricies tempor laoreet. Nunc ut ornare vehicula viverra sed nibh orci morbi. Mauris turpis id mauris facilisis vel feugiat turpis blandit convallis. Duis scelerisque a suspendisse vulputate nec nulla varius.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur. Lorem sollicitudin nunc nisl nam aliquam. Sed faucibus sodales ac etiam sodales massa sit. Aenean feugiat integer cursus mauris faucibus enim. Vitae etiam euismod neque tincidunt sociis cras id cursus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
