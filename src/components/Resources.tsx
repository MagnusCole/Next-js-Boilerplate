"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFileAlt, FaPlayCircle, FaRegFileAlt } from 'react-icons/fa';

const resources = [
  {
    type: 'article',
    title: 'Estrategias de Crecimiento para 2024',
    summary: 'Descubre las mejores estrategias de crecimiento empresarial para el próximo año.',
    imageUrl: '/ruta/a/imagen1.jpg',
    link: '/blog/estrategias-crecimiento-2024'
  },
  {
    type: 'guide',
    title: 'Guía de Crecimiento Empresarial',
    summary: 'Descarga nuestra guía completa sobre cómo hacer crecer tu negocio.',
    imageUrl: '/ruta/a/imagen2.jpg',
    link: '/recursos/guia-crecimiento-empresarial'
  },
  {
    type: 'video',
    title: 'Webinar: Estrategias de Crecimiento',
    summary: 'Aprende de los expertos en nuestro webinar sobre estrategias de crecimiento empresarial.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    link: '/videos/webinar-estrategias-crecimiento'
  },
  {
    type: 'article',
    title: 'Cómo Optimizar tus Procesos de Negocio',
    summary: 'Aprende a mejorar la eficiencia de tus operaciones con estos consejos.',
    imageUrl: '/ruta/a/imagen3.jpg',
    link: '/blog/optimizar-procesos-negocio'
  },
  {
    type: 'guide',
    title: 'Plantilla de Optimización de Procesos',
    summary: 'Obtén nuestra plantilla para optimizar los procesos de tu empresa.',
    imageUrl: '/ruta/a/imagen4.jpg',
    link: '/recursos/plantilla-optimizacion-procesos'
  },
  {
    type: 'video',
    title: 'Tutorial: Optimización de Procesos',
    summary: 'Sigue nuestro tutorial paso a paso para optimizar los procesos de tu empresa.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    link: '/videos/tutorial-optimizacion-procesos'
  },
];

const Resources = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Recursos y Blog</h2>
        <p className="mb-12 text-lg">
          Mantente al día con las últimas tendencias y estrategias para hacer crecer tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-left transform hover:scale-105 transition-transform duration-300">
              {resource.type === 'video' ? (
                <div className="mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src={resource.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={resource.title}
                    className="rounded-md"
                  ></iframe>
                </div>
              ) : (
                <img src={resource.imageUrl} alt={resource.title} className="mb-4 rounded-md w-full h-48 object-cover" />
              )}
              <div className="flex items-center mb-2">
                {resource.type === 'article' && <FaFileAlt className="text-blue-500 mr-2" />}
                {resource.type === 'guide' && <FaRegFileAlt className="text-green-500 mr-2" />}
                {resource.type === 'video' && <FaPlayCircle className="text-red-500 mr-2" />}
                <h3 className="text-2xl font-semibold">{resource.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{resource.summary}</p>
              <a href={resource.link} className="cta-button">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
