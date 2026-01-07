import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE;
  const crp = import.meta.env.VITE_CRP;
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-serif font-medium gradient-text flex items-center"
          >
            <span className="relative">
              Psicóloga – CRP {crp}
              <span className="absolute -top-1 -right-2 text-accent text-xs">✦</span>
            </span>
          </Link>

          {/* Espaçador para empurrar o botão */}
          <div className="ml-auto md:hidden">
            <button
              className="text-gray-700 text-2xl focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-2 ml-auto">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:shadow-md transition-all"
            >
              Agende uma Consulta
            </a>
          </nav>
        </div>

        {/* Menu mobile animado */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'} 
          `}
        >
          <div className="flex flex-col space-y-2 bg-white rounded-xl shadow-md p-4 transform transition-transform duration-300 items-center">
            <NavLink to="/" onClick={() => setOpen(false)}>Início</NavLink>
            <NavLink to="/sobre" onClick={() => setOpen(false)}>Sobre</NavLink>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 px-4 py-2 text-center bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-3 py-2 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-primary-light/20 text-sm"
    >
      {children}
    </Link>
  );
};

export default Header;