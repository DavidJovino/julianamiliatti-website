import React from 'react';

const InstagramCarousel = () => {
  return (
    <div className="instagram-carousel-container">
      {/* LightWidget Instagram Carousel */}
      <iframe 
        src="https://cdn.lightwidget.com/widgets/b4e26726d2c05a4ba7e39f3df9a3b94a.html" 
        scrolling="no" 
        allowtransparency="true" 
        className="lightwidget-widget w-full rounded-2xl overflow-hidden shadow-sm" 
        style={{width: '100%', border: 0, height: '500px'}}
      ></iframe>
    </div>
  );
};

const ArticlesSection = ({ title, subtitle }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-light/50 to-secondary-light/50 cloud-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 cute-decoration">
          <h2 className="section-title">
            {title || "Artigos e Reflexões"}
          </h2>
          <p className="section-subtitle">
            {subtitle || "Conteúdos para ajudar você a compreender melhor suas emoções e desenvolver uma relação mais saudável consigo mesmo."}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card p-6 bg-white/80 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-primary mb-6 text-center">Últimas Publicações do Instagram</h3>
            <InstagramCarousel />
            <div className="text-center mt-8">
              <a 
                href="https://www.instagram.com/psi.julianamiliatti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Script para o LightWidget */}
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
    </section>
  );
};

export default ArticlesSection;
