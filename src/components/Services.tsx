"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChartLine, FaCog, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Nuestros Servicios</h2>
        <p className="mb-12 text-lg">
          En Adquisición, ofrecemos soluciones personalizadas y efectivas para ayudarte a hacer crecer tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center justify-center mb-4 tooltip" data-tooltip="Consultoría de Crecimiento">
              <FaChartLine className="text-blue-500 text-4xl animate-bounce" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Consultoría de Crecimiento</h3>
            <p className="text-gray-700 mb-4">Implementa estrategias personalizadas para aumentar tus ingresos y expandir tu mercado.</p>
            <a href="#consulting" className="cta-button">¡Empieza tu Crecimiento Ahora!</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center justify-center mb-4 tooltip" data-tooltip="Optimización de Procesos">
              <FaCog className="text-green-500 text-4xl animate-spin" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Optimización de Procesos</h3>
            <p className="text-gray-700 mb-4">Optimiza tus operaciones para mejorar la eficiencia y reducir costos.</p>
            <a href="#optimization" className="cta-button">¡Optimiza Hoy!</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center justify-center mb-4 tooltip" data-tooltip="Marketing Digital">
              <FaBullhorn className="text-red-500 text-4xl animate-pulse" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Marketing Digital</h3>
            <p className="text-gray-700 mb-4">Desarrolla y ejecuta campañas de marketing digital para aumentar tu presencia en línea.</p>
            <a href="#marketing" className="cta-button">¡Aumenta tu Presencia Ahora!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
