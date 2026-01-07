import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE;
  const crp = import.meta.env.VITE_CRP;
  return (
    <header className="py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-serif font-medium gradient-text flex items-center">
              <span className="relative">
                Psicóloga - CRP {crp}
                <span className="absolute -top-1 -right-2 text-accent text-xs">✦</span>
              </span>
            </Link>
          </div>
          
          {/*<div className="hidden md:block">
            <a href="tel:+5500000000000" className="text-primary hover:text-secondary transition-colors">
              (00) 00000-0000
            </a>
          </div>*/}
          
          <nav className="flex items-center space-x-1 md:space-x-2">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            {/*<NavLink to="/tratamentos">Tratamentos</NavLink>*/}
            {/*<NavLink to="/artigos">Artigos</NavLink>*/}
            <a 
              href={`https://wa.me/${phone}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary ml-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:shadow-md transition-all transform hover:-translate-y-1 " //Quando tiver cheio adicionar hidden md:block para desaparecer
            >
              Agende uma Consulta
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-primary-light/20 text-sm md:text-base"
    >
      {children}
    </Link>
  );
};

export default Header;
