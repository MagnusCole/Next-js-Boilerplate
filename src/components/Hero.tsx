"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative h-screen bg-dark-blue">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/path/to/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center text-white flex flex-col justify-center h-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">Transforma tu Negocio y Aumenta tus Ingresos</h1>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">Estrategias Personalizadas y Efectivas para el Crecimiento Empresarial</p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a href="#consultation" className="bg-blue-500 py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mr-4">
            Agenda tu Consulta Gratis
          </a>
          <a href="#case-studies" className="bg-gray-500 py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
            Conocer Casos de Éxito
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="600">
          <span className="flex items-center space-x-2">
            <span className="text-2xl">✅</span>
            <span className="text-lg">Incrementa tus ventas</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-2xl">✅</span>
            <span className="text-lg">Optimiza tus procesos</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-2xl">✅</span>
            <span className="text-lg">Aumenta tu presencia en el mercado</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
