import React from 'react';
import { Star, Cloud } from 'lucide-react';
import fotoJuliana from '../images/titulo-juliana.jpg';



const Hero = () => {
  const whats_phone = import.meta.env.VITE_WHATSAPP_PHONE;
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#E3C8C8] to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-accent animate-twinkle">
        <Star size={20} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 left-10 text-white/30 animate-float">
        <Cloud size={30} fill="currentColor" />
      </div>
      <div className="absolute top-1/3 left-1/4 text-white/20 animate-float" style={{animationDelay: '1s'}}>
        <Cloud size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-accent/70 animate-twinkle" style={{animationDelay: '1.5s'}}>
        <Star size={15} fill="currentColor" />
      </div> 
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            {/*<h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Um espaço seguro para seu bem-estar emocional
            </h1>
            
            <p className="text-lg text-white/90 mb-8">
              Atendimento humanizado e acolhedor para ajudar você a reconectar-se consigo mesmo e encontrar equilíbrio.
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/30 shadow-sm">
              <p className="text-white italic">
                "Um dia, quando olhares para trás, verás que os dias mais belos foram aqueles em que lutaste."
              </p>
              <p className="text-white/80 text-right mt-2">
                - Sigmund Freud
              </p>*/}
            </div>

          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-3xl"></div>
            <img 
              src={fotoJuliana} 
              alt="Espaço terapêutico acolhedor" 
              className="rounded-3xl shadow-lg relative z-10 border-4 border-white/30"
            /> 
            {/*           
            <a 
              href={`https://wa.me/${whats_phone}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Agende uma Consulta
            </a>
            */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-accent/30 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      {/*</div>*/}
    </section>
  );
};

export default Hero;
