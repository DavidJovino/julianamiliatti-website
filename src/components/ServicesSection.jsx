import React from 'react';
import { Heart, Star } from 'lucide-react';

const ServiceCard = ({ title, description, icon, color = 'teal' }) => {
  const colorClasses = {
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
  };
  
  const iconBgClasses = {
    teal: 'bg-teal-100',
    pink: 'bg-pink-100',
    purple: 'bg-purple-100',
    amber: 'bg-amber-100',
    blue: 'bg-blue-100',
  };

  return (
    <div className={`rounded-2xl p-6 border-2 ${colorClasses[color]} hover:shadow-md transition-shadow`}>
      <div className={`w-12 h-12 rounded-full ${iconBgClasses[color]} flex items-center justify-center mb-4`}>
        {icon || <Heart className="text-rose-500" />}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = ({ title, subtitle, services }) => {
  const defaultServices = [
    {
      title: 'Terapia Individual',
      description: 'O atendimento individual pode ser realizado on-line ou presencialmente, conforme a necessidade e preferência da pessoa. Em ambas as modalidades, o objetivo é oferecer um espaço seguro e acolhedor, no qual o paciente possa falar livremente sobre sua vida emocional, suas dores, dúvidas e processos de amadurecimento.',
      icon: <Heart className="text-rose-500" />,
      color: 'purple'
    },
    {
      title: 'Terapia on-line:',
      description: 'A terapia on-line oferece a possibilidade de manter um espaço clínico estável e suficientemente bom mesmo à distância. As sessões são realizadas por videoconferência, garantindo sigilo, cuidado e presença.',
      icon: <Heart className="text-rose-500" />,
      color: 'pink'
    },
/*{
      title: 'Orientação Parental',
      description: 'Suporte para pais enfrentando desafios na educação e relacionamento com os filhos.',
      icon: <Star className="text-amber-500" />,
      color: 'teal'
    },
    {
      title: 'Terapia Online',
      description: 'Atendimento psicológico à distância, com a mesma qualidade do presencial.',
      icon: <Star className="text-amber-500" />,
      color: 'amber'
    } */
  ];

  const displayServices = services || defaultServices;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-teal-800 mb-4">
            {title || "Tratamentos"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle || "Conheça as abordagens terapêuticas disponíveis para ajudar você em sua jornada de autoconhecimento e bem-estar emocional."}
          </p>
        </div>
        {/* Caso queira 4 cards mudar o grid-cols-2 para grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> 
          {displayServices.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
