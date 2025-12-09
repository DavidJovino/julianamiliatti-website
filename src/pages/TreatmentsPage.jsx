import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const TreatmentsPage = () => {
  const treatments = [
    {
      title: 'Terapia Individual',
      description: 'Atendimento personalizado para ajudar você a lidar com questões emocionais, comportamentais e relacionais, promovendo autoconhecimento e bem-estar.',
      icon: null,
      color: 'teal'
    },
    {
      title: 'Terapia para Casais',
      description: 'Auxílio para melhorar a comunicação, resolver conflitos e fortalecer o vínculo no relacionamento, criando uma relação mais saudável e satisfatória.',
      icon: null,
      color: 'pink'
    },
    {
      title: 'Orientação Parental',
      description: 'Suporte para pais enfrentando desafios na educação e relacionamento com os filhos, desenvolvendo estratégias eficazes de comunicação e disciplina positiva.',
      icon: null,
      color: 'purple'
    },
    {
      title: 'Terapia Online',
      description: 'Atendimento psicológico à distância, com a mesma qualidade do presencial, oferecendo flexibilidade para quem não pode comparecer ao consultório.',
      icon: null,
      color: 'amber'
    },
    {
      title: 'Ansiedade e Depressão',
      description: 'Tratamento especializado para transtornos de ansiedade e depressão, ajudando a reduzir sintomas e desenvolver estratégias de enfrentamento eficazes.',
      icon: null,
      color: 'blue'
    },
    {
      title: 'Autoconhecimento',
      description: 'Processo terapêutico focado no desenvolvimento pessoal, ajudando você a compreender melhor seus padrões de pensamento, emoções e comportamentos.',
      icon: null,
      color: 'teal'
    },
    {
      title: 'Gestão de Estresse',
      description: 'Técnicas e estratégias para lidar com o estresse do dia a dia, promovendo equilíbrio emocional e melhor qualidade de vida.',
      icon: null,
      color: 'pink'
    },
    {
      title: 'Desenvolvimento Pessoal',
      description: 'Apoio para identificar e desenvolver potencialidades, superar limitações e alcançar objetivos pessoais e profissionais.',
      icon: null,
      color: 'purple'
    }
  ];

  return (
    <>
      <SEO 
        title="Tratamentos" 
        description="Conheça os tratamentos e abordagens terapêuticas disponíveis para ajudar você em sua jornada de autoconhecimento e bem-estar emocional."
        keywords="tratamentos psicológicos, terapia individual, terapia para casais, ansiedade, depressão, autoconhecimento"
        url="/tratamentos"
      />
      
      <section className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-teal-800 mb-4">
              Tratamentos
            </h1>
            <p className="text-lg text-gray-600">
              Conheça as abordagens terapêuticas disponíveis para ajudar você em sua jornada de autoconhecimento e bem-estar emocional.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-medium text-teal-700 mb-6 text-center">
              Abordagem Terapêutica
            </h2>
            
            <p className="text-gray-700 mb-4">
              Minha abordagem terapêutica é integrativa, combinando elementos da psicanálise, terapia cognitivo-comportamental e outras técnicas, 
              sempre adaptadas às necessidades específicas de cada pessoa. Acredito que cada indivíduo é único e, portanto, 
              o processo terapêutico deve ser personalizado.
            </p>
            
            <p className="text-gray-700 mb-4">
              O objetivo principal é criar um espaço seguro e acolhedor onde você possa explorar seus pensamentos, 
              sentimentos e comportamentos, desenvolvendo maior autoconhecimento e encontrando caminhos para superar 
              desafios e alcançar bem-estar.
            </p>
            
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 mt-8">
              <h3 className="text-xl font-medium text-teal-700 mb-3">
                Como funciona o processo terapêutico?
              </h3>
              
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-700 font-medium">1</div>
                  <div>
                    <span className="font-medium">Acolhimento inicial:</span> Primeiro contato para entender suas necessidades e expectativas.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-700 font-medium">2</div>
                  <div>
                    <span className="font-medium">Avaliação:</span> Compreensão mais profunda das questões a serem trabalhadas.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-700 font-medium">3</div>
                  <div>
                    <span className="font-medium">Definição de objetivos:</span> Estabelecimento conjunto das metas terapêuticas.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-700 font-medium">4</div>
                  <div>
                    <span className="font-medium">Processo terapêutico:</span> Sessões regulares para trabalhar as questões identificadas.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-700 font-medium">5</div>
                  <div>
                    <span className="font-medium">Avaliação contínua:</span> Revisão periódica do progresso e ajustes quando necessário.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection 
        title="Especialidades"
        subtitle="Conheça as áreas em que posso ajudar você a encontrar equilíbrio e bem-estar emocional."
        services={treatments}
      />
    </>
  );
};

export default TreatmentsPage;
