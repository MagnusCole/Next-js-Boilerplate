"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const testimonials = [
    {
      video: 'path/to/testimonial1.mp4',
      text: 'Gracias a Adquisición, nuestras ventas han aumentado un 50% en solo tres meses.',
      name: 'Juan Pérez',
      title: 'CEO de Empresa X',
      cta: 'Aprende más sobre nuestros servicios',
      ctaLink: '/services'
    },
    {
      video: 'path/to/testimonial2.mp4',
      text: 'La optimización de procesos implementada por Adquisición nos ha permitido ahorrar un 20% en costos operativos.',
      name: 'María López',
      title: 'Gerente de Operaciones en Empresa Y',
      cta: 'Contacta con nosotros ahora',
      ctaLink: '/contact'
    },
    {
      video: 'path/to/testimonial3.mp4',
      text: 'Las campañas de marketing digital de Adquisición han aumentado nuestra presencia en línea significativamente.',
      name: 'Carlos Sánchez',
      title: 'Director de Marketing en Empresa Z',
      cta: 'Descubre nuestros casos de éxito',
      ctaLink: '/case-studies'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Testimonios y Casos de Éxito</h2>
        <p className="mb-12 text-lg">Historias de Clientes que Han Transformado sus Negocios con Nosotros</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6" data-aos="fade-in">
              <video width="100%" controls>
                <source src={testimonial.video} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <p className="text-gray-800 mt-4">{testimonial.text}</p>
              <p className="font-bold mt-2">{testimonial.name}, {testimonial.title}</p>
              <a href={testimonial.ctaLink} className="cta-button mt-4">{testimonial.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
