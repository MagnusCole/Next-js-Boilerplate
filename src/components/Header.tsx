"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCommentDots } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-500 bg-opacity-50 backdrop-blur-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" legacyBehavior>
          <a className="text-white text-3xl font-bold flex items-center">
            <Image src="/logo.png" alt="Agencia Adquisición" width={40} height={40} />
            <span className="ml-3">Agencia Adquisición</span>
          </a>
        </Link>
        <nav className="flex space-x-8">
          <Link href="/" legacyBehavior>
            <a
              className={`text-white hover:text-gray-300 transition duration-300 ${activeLink === '/' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleSetActiveLink('/')}
            >
              Inicio
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className={`text-white hover:text-gray-300 transition duration-300 ${activeLink === '/about' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleSetActiveLink('/about')}
            >
              Acerca de
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a
              className={`text-white hover:text-gray-300 transition duration-300 ${activeLink === '/services' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleSetActiveLink('/services')}
            >
              Servicios
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`text-white hover:text-gray-300 transition duration-300 ${activeLink === '/contact' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleSetActiveLink('/contact')}
            >
              Contacto
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
