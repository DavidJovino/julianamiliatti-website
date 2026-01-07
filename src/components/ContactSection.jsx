import React from 'react';
import { MessageCircle, Calendar, Clock, Instagram } from 'lucide-react';

const ContactSection = () => {
  const phone = import.meta.env.VITE_PHONE;
  const whats_phone = import.meta.env.VITE_WHATSAPP_PHONE;
  return (
    <section className="py-16 bg-gradient-to-r from-primary-light to-secondary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 cute-decoration">
            <h2 className="section-title">
              Fale Comigo
            </h2>
            <p className="section-subtitle">
              Estou aqui para acompanhar você em sua jornada de reconhecimento de si, oferecendo um espaço seguro e suficientemente bom para que suas experiências possam ser acolhidas e elaboradas no seu tempo. Entre em contato para agendar uma consulta ou esclarecer suas dúvidas.
            </p>
          </div>
          
          <div className="card bg-white/80 backdrop-blur-sm p-8 cloud-bg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-medium text-primary mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1">
                      <MessageCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">WhatsApp</h4>
                      <p className="text-gray-600">{phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Horário de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Duração da Sessão</h4>
                      <p className="text-gray-600">50 minutos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium text-primary mb-6">Fale Diretamente</h3>
                
                <div className="space-y-4">
                  <a 
                    href={`https://wa.me/${whats_phone}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Fale comigo no WhatsApp
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/psi.julianamiliatti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center"
                  >
                    <Instagram size={20} className="mr-2" />
                    Abrir no Instagram
                  </a>
                  
                  <a 
                    href="instagram://user?username=psi.julianamiliatti" 
                    className="text-sm text-center text-primary hover:text-secondary transition-colors mt-2"
                  >
                    Abrir no app do Instagram (dispositivos móveis)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
