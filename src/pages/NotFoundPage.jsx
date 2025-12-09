import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Página não encontrada" 
        description="A página que você está procurando não foi encontrada."
        url="/404"
      />
      
      <section className="py-20 bg-gradient-to-r from-teal-50 to-purple-50 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-9xl font-bold text-teal-200">404</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img 
                    src="/images/cute-error.png" 
                    alt="Emoji triste" 
                    className="w-20 h-20"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 15h8M9 9h.01M15 9h.01"></path></svg>';
                    }}
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-medium text-teal-800 mb-4">
              Página não encontrada
            </h1>
            
            <p className="text-gray-600 mb-8">
              Ops! A página que você está procurando parece não existir. 
              Talvez você tenha digitado o endereço incorretamente ou a página foi movida.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
              >
                <Home size={18} className="mr-2" />
                Voltar para o início
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-teal-700 font-medium border border-teal-200 hover:bg-teal-50 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
