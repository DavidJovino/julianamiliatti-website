import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ArticlesSection from '../components/ArticlesSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Início" 
        description="Psicóloga especializada em atendimento humanizado, oferecendo suporte emocional e terapia para ajudar você a encontrar equilíbrio e bem-estar."
        keywords="psicóloga, psicologia, terapia, saúde mental, bem-estar emocional, atendimento psicológico"
        url="/"
      />
      
      <Hero 
        title="Um espaço seguro para seu bem-estar emocional"
        subtitle="Atendimento humanizado e acolhedor para ajudar você a reconectar-se consigo mesmo e encontrar equilíbrio."
        quote="Um dia, quando olhares para trás, verás que os dias mais belos foram aqueles em que lutaste."
        author="Sigmund Freud"
        buttonText="Agende uma Consulta"
        buttonLink="#contato"
      />
      
      <ServicesSection 
        title="Formas de cuidado"
        subtitle="Conheça as abordagens terapêuticas disponíveis para ajudar você em sua jornada de autoconhecimento e bem-estar emocional."
      />
      
      <ArticlesSection 
        title="Artigos e Reflexões"
        subtitle="Conteúdos para ajudar você a compreender melhor suas emoções e desenvolver uma relação mais saudável consigo mesmo."
      />
      
      <ContactSection id="contato" />
    </>
  );
};

export default HomePage;
