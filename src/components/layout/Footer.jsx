import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const whats_phone = import.meta.env.VITE_WHATSAPP_PHONE;
  const phone = import.meta.env.VITE_PHONE;
  const crp = import.meta.env.VITE_CRP;
  return (
    <footer className="py-8 bg-gradient-to-r from-primary-light/70 to-secondary-light/70">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">Sobre</h3>
              <p className="text-gray-700 mb-4">
                Psicóloga dedicada a promover o amadurecimento emocional no seu tempo, fundamentada na Psicologia Winnicottiana, que valoriza o cuidado, a escuta sensível e a construção de um espaço seguro para que o indivíduo possa ser quem é.
              </p>
              <p className="text-gray-700 font-medium">
                CRP: {crp}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-700 hover:text-primary transition-colors">Início</a>
                </li>
                <li>
                  <a href="/sobre" className="text-gray-700 hover:text-primary transition-colors">Sobre</a>
                </li>
                <li>
                  {/*<a href="/tratamentos" className="text-gray-700 hover:text-primary transition-colors">Tratamentos</a>*/}
                </li>
                <li>
                  {/*<a href="/artigos" className="text-gray-700 hover:text-primary transition-colors">Artigos</a>*/}
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`https://wa.me/${whats_phone}`} className="text-gray-700 hover:text-primary transition-colors">{phone}</a>
                </li>
                <li>
                  <a href="mailto:contato@psicologa.com" className="text-gray-700 hover:text-primary transition-colors">contato@psicologa.com</a>
                </li>
                <li className="text-gray-700">
                  Limeira - São Paulo
                </li>
                <li>
                  <a href="https://www.instagram.com/psi.julianamiliatti" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">@psicologa</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-purple-100 text-center">
            <p className="text-gray-600 flex items-center justify-center">
              © {new Date().getFullYear()} David Jovino. Todos os direitos reservados.
              <span className="inline-block ml-2 text-primary animate-pulse">
                <Heart size={14} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
