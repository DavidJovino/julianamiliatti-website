import React from 'react';
import { Helmet } from 'react-helmet-async';

// Componente para adicionar metadados de performance
const PerformanceOptimization = () => {
  return (
    <Helmet>
      {/* Preconnect para domínios externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload de fontes críticas */}
      <link 
        rel="preload" 
        href="/fonts/main-font.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Meta tags para mobile */}
      <meta name="theme-color" content="#4DB6AC" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Helmet>
  );
};

export default PerformanceOptimization;
