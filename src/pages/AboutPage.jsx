import React from 'react';
import SEO from '../components/SEO';
import fotoJuliana from '../images/Psicologa-Juliana-Miliatti.jpg';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="Sobre" 
        description="Conheça mais sobre minha formação, abordagem terapêutica Winnicott e como posso ajudar você em sua jornada de autoconhecimento e bem-estar emocional."
        keywords="psicóloga, sobre, formação, Winnicott, abordagem terapêutica, experiência profissional"
        url="/sobre"
      />
      
      <section className="py-16 bg-gradient-to-r from-primary-light/50 to-secondary-light/50 cloud-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">
              Sobre
            </h1>
            
            <div className="card bg-white/80 backdrop-blur-sm p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                <div className="w-full md:w-1/3">
                  <div className="relative cute-decoration">
                    <div className="absolute -inset-2 bg-primary-light rounded-full opacity-20 blur-xl"></div>
                    <img 
                      src={fotoJuliana} 
                      alt="Psicóloga Juliana Miliatti" 
                      className="w-full h-auto rounded-2xl shadow-md relative z-10"
                    />
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent rounded-full opacity-60 z-0"></div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-medium text-primary mb-4">
                    Psicóloga Juliana Miliatti
                  </h2>
                  
                  <p className="text-gray-700 mb-4">
                    Sou Juliana Miliatti, psicóloga formada pela Universidade Metodista. Tenho especializações em Psico-Oncologia pelo Centro de Oncologia em Campinas, em Saúde da Mulher e em Teoria Psicanalítica pelo IPEP – Instituto de Psicanálise nos espaços públicos.
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    Atualmente, participo de grupos de estudo sobre feminismo e sou membro do IBPW – Instituto Winnicott, buscando sempre aprofundar meu olhar sobre a relação terapêutica e a escuta acolhedora.
                  </p>
                  <p className="text-gray-700">
                    Além da psicologia, sou apaixonada por artesanatos, encontrando na criação manual uma forma de expressão, cuidado e conexão com o presente. Seja no cuidado com as pessoas ou nas minhas criações, acredito na importância de transformar experiências em algo significativo e sensível.
                  </p>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-medium text-primary mb-4">
                  Minha Abordagem - Winnicott
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Minha prática clínica é fundamentada na teoria de Donald Winnicott, psicanalista inglês que 
                  desenvolveu conceitos fundamentais sobre o desenvolvimento emocional primitivo e a importância 
                  do ambiente facilitador para o desenvolvimento saudável.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Acredito que o espaço terapêutico deve ser um "ambiente suficientemente bom", onde o paciente 
                  possa se sentir seguro para explorar suas questões emocionais. Através do "holding" (sustentação) 
                  terapêutico, busco criar condições para que cada pessoa possa desenvolver seu verdadeiro self e 
                  encontrar seu próprio caminho de crescimento.
                </p>
                
                <p className="text-gray-700">
                  Na abordagem winnicottiana, valorizo a espontaneidade, a criatividade e o brincar como elementos 
                  essenciais do processo terapêutico, permitindo a integração de aspectos fragmentados da personalidade 
                  e o desenvolvimento de um senso de continuidade do ser.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-4">
                  Formação e Especialização
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Graduação em Psicologia - Universidade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Pós-graduação em Psicologia Clínica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Especialização em Teoria Winnicottiana</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Formação em Psicanálise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Cursos de atualização em diversas áreas da Psicologia</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-white/80 backdrop-blur-sm p-8 cute-decoration">
              <h3 className="text-xl font-medium text-primary mb-4 text-center">
                "É no brincar, e somente no brincar, que o indivíduo, criança ou adulto, pode ser criativo e utilizar sua personalidade integral."
              </h3>
              <p className="text-right text-gray-500 italic">- Donald Winnicott</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
