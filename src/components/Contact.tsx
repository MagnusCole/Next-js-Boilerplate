"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCommentDots, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Hablemos</h2>
        <p className="mb-12 text-lg">
          ¿Prefieres hablar por teléfono, enviar un mensaje, chatear en vivo, comunicarte por WhatsApp, o agendar una consulta? Estamos aquí para ayudarte.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mb-12">
          <a
            href="tel:+51123456789"
            className="flex items-center bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaPhoneAlt className="mr-2" /> Llamar Ahora
          </a>
          <a
            href="mailto:contacto@adquisicion.site"
            className="flex items-center bg-gray-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <FaEnvelope className="mr-2" /> Enviar Correo
          </a>
          <a
            href="https://wa.me/51123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="#live-chat"
            className="flex items-center bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300"
          >
            <FaCommentDots className="mr-2" /> Chat en Vivo
          </a>
          <a
            href="https://calendly.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          >
            <FaCalendarAlt className="mr-2" /> Agendar Consulta
          </a>
        </div>
        <div id="contact-form" className="mt-12 max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border rounded-lg"
                rows="4"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="mt-12 text-left">
          <p className="text-lg flex items-center justify-center">
            <FaEnvelope className="mr-2" /> contacto@adquisicion.site
          </p>
          <p className="text-lg flex items-center justify-center">
            <FaPhoneAlt className="mr-2" /> +51 123 456 789
          </p>
          <p className="text-lg flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" /> Lima, Perú
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
