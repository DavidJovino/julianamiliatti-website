import React from 'react';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  
  // Simulação de dados de artigo - em um site real, isso viria de uma API ou CMS
  const articles = {
    'como-lidar-com-ansiedade': {
      title: 'Como lidar com a ansiedade no dia a dia',
      content: `
        <p>A ansiedade é uma resposta natural do nosso organismo a situações de estresse, medo ou preocupação. Em níveis moderados, ela pode até ser benéfica, nos ajudando a ficar alertas e preparados para enfrentar desafios. No entanto, quando se torna excessiva e persistente, pode afetar significativamente nossa qualidade de vida.</p>
        
        <h2>Sinais de ansiedade</h2>
        <p>Os sintomas da ansiedade podem variar de pessoa para pessoa, mas geralmente incluem:</p>
        <ul>
          <li>Preocupação excessiva</li>
          <li>Inquietação ou sensação de estar "com os nervos à flor da pele"</li>
          <li>Fadiga</li>
          <li>Dificuldade de concentração</li>
          <li>Irritabilidade</li>
          <li>Tensão muscular</li>
          <li>Problemas para dormir</li>
          <li>Sintomas físicos como palpitações, sudorese e tremores</li>
        </ul>
        
        <h2>Estratégias para gerenciar a ansiedade</h2>
        
        <h3>1. Pratique técnicas de respiração</h3>
        <p>A respiração profunda e consciente é uma das formas mais eficazes de acalmar o sistema nervoso. Experimente a técnica 4-7-8: inspire pelo nariz contando até 4, segure a respiração contando até 7 e expire pela boca contando até 8. Repita este ciclo por alguns minutos.</p>
        
        <h3>2. Mantenha uma rotina de exercícios físicos</h3>
        <p>A atividade física regular libera endorfinas, os "hormônios do bem-estar", que ajudam a reduzir a tensão e melhorar o humor. Encontre uma atividade que você goste e tente praticá-la pelo menos 3 vezes por semana.</p>
        
        <h3>3. Limite o consumo de cafeína e álcool</h3>
        <p>Estas substâncias podem intensificar os sintomas de ansiedade. Tente reduzir ou eliminar o consumo, especialmente em momentos de maior estresse.</p>
        
        <h3>4. Pratique mindfulness</h3>
        <p>A atenção plena nos ajuda a focar no momento presente, reduzindo preocupações com o futuro ou ruminações sobre o passado. Dedique alguns minutos diários para práticas de mindfulness, como meditação ou simplesmente prestar atenção consciente às atividades cotidianas.</p>
        
        <h3>5. Estabeleça limites saudáveis</h3>
        <p>Aprenda a dizer "não" quando necessário e estabeleça limites claros em suas relações pessoais e profissionais. Sobrecarregar-se de responsabilidades pode aumentar significativamente os níveis de ansiedade.</p>
        
        <h3>6. Busque apoio profissional</h3>
        <p>Se a ansiedade estiver afetando significativamente sua vida, não hesite em buscar ajuda de um psicólogo ou psiquiatra. A terapia cognitivo-comportamental tem se mostrado particularmente eficaz no tratamento de transtornos de ansiedade.</p>
        
        <h2>Lembre-se: você não está sozinho</h2>
        <p>A ansiedade é uma das condições de saúde mental mais comuns, afetando milhões de pessoas em todo o mundo. Reconhecer que você está enfrentando ansiedade e buscar ajuda é um importante primeiro passo para recuperar o controle e o bem-estar emocional.</p>
        
        <p>Se você está enfrentando sintomas persistentes de ansiedade, considere agendar uma consulta para conversarmos sobre estratégias personalizadas que podem ajudar em seu caso específico.</p>
      `,
      date: '10 Abr 2025',
      readTime: 5,
      author: 'Psicóloga',
      image: '/images/article1.jpg',
      category: 'Ansiedade'
    },
    'importancia-do-autocuidado': {
      title: 'A importância do autocuidado para a saúde mental',
      content: `
        <p>O autocuidado vai muito além de momentos de relaxamento ou indulgências ocasionais. Trata-se de um compromisso contínuo com práticas que promovem nossa saúde física, mental e emocional. Em um mundo cada vez mais acelerado e exigente, dedicar tempo para cuidar de si mesmo não é um luxo, mas uma necessidade fundamental.</p>
        
        <h2>O que é autocuidado?</h2>
        <p>Autocuidado refere-se a qualquer ação que tomamos deliberadamente para cuidar da nossa saúde física, mental e emocional. É um processo ativo e contínuo que requer consciência e intencionalidade. Não se trata apenas de evitar doenças, mas de promover bem-estar e qualidade de vida.</p>
        
        <h2>Por que o autocuidado é importante para a saúde mental?</h2>
        
        <h3>1. Reduz o estresse e a ansiedade</h3>
        <p>Práticas regulares de autocuidado ajudam a reduzir os níveis de cortisol (hormônio do estresse) no organismo, promovendo uma sensação de calma e equilíbrio emocional.</p>
        
        <h3>2. Previne o esgotamento (burnout)</h3>
        <p>Quando negligenciamos nossas necessidades básicas em favor de responsabilidades externas, corremos o risco de esgotamento físico e emocional. O autocuidado funciona como uma medida preventiva contra o burnout.</p>
        
        <h3>3. Melhora a autoestima e o autoconhecimento</h3>
        <p>Dedicar tempo para si mesmo envia uma mensagem poderosa ao seu subconsciente: "Eu sou importante e mereço cuidado". Esta prática fortalece a autoestima e promove maior autoconhecimento.</p>
        
        <h3>4. Aumenta a produtividade e criatividade</h3>
        <p>Quando estamos bem cuidados e descansados, nossa capacidade cognitiva melhora significativamente, resultando em maior produtividade, foco e criatividade.</p>
        
        <h2>Dimensões do autocuidado</h2>
        
        <h3>Autocuidado físico</h3>
        <ul>
          <li>Alimentação equilibrada</li>
          <li>Exercícios regulares</li>
          <li>Sono adequado (7-8 horas por noite)</li>
          <li>Checkups médicos preventivos</li>
          <li>Hidratação adequada</li>
        </ul>
        
        <h3>Autocuidado emocional</h3>
        <ul>
          <li>Reconhecer e expressar emoções de forma saudável</li>
          <li>Praticar autocompaixão</li>
          <li>Estabelecer limites em relacionamentos</li>
          <li>Buscar apoio quando necessário</li>
          <li>Cultivar pensamentos positivos</li>
        </ul>
        
        <h3>Autocuidado social</h3>
        <ul>
          <li>Manter conexões significativas</li>
          <li>Passar tempo com pessoas que nos fazem bem</li>
          <li>Participar de atividades comunitárias</li>
          <li>Equilibrar tempo social e tempo sozinho</li>
        </ul>
        
        <h3>Autocuidado espiritual</h3>
        <ul>
          <li>Meditação ou mindfulness</li>
          <li>Conexão com a natureza</li>
          <li>Práticas religiosas ou espirituais (se aplicável)</li>
          <li>Reflexão sobre propósito e significado</li>
        </ul>
        
        <h2>Como incorporar o autocuidado na rotina diária</h2>
        
        <p>O segredo para um autocuidado efetivo é a consistência. Pequenas práticas diárias têm um impacto muito maior do que grandes gestos ocasionais. Algumas sugestões:</p>
        
        <ul>
          <li>Reserve 10-15 minutos pela manhã para uma prática que te conecte consigo mesmo (meditação, journaling, alongamento)</li>
          <li>Faça pausas regulares durante o dia de trabalho</li>
          <li>Estabeleça limites claros entre trabalho e vida pessoal</li>
          <li>Crie um ritual relaxante antes de dormir</li>
          <li>Pratique dizer "não" quando necessário</li>
          <li>Desconecte-se periodicamente da tecnologia</li>
        </ul>
        
        <h2>Lembre-se: autocuidado não é egoísmo</h2>
        
        <p>Muitas pessoas, especialmente aquelas habituadas a cuidar dos outros, sentem culpa ao dedicar tempo para si mesmas. É importante lembrar que o autocuidado não é egoísmo, mas uma necessidade fundamental. Como a analogia da máscara de oxigênio nos aviões nos ensina: precisamos cuidar de nós mesmos primeiro para poder cuidar efetivamente dos outros.</p>
        
        <p>Se você está enfrentando dificuldades para incorporar práticas de autocuidado em sua rotina ou se sente que sua saúde mental está comprometida, considere buscar apoio profissional. Juntos, podemos desenvolver estratégias personalizadas que se adequem à sua realidade e necessidades específicas.</p>
      `,
      date: '02 Abr 2025',
      readTime: 4,
      author: 'Psicóloga',
      image: '/images/article2.jpg',
      category: 'Autoestima'
    }
  };
  
  const article = articles[slug] || {
    title: 'Artigo não encontrado',
    content: '<p>O artigo que você está procurando não está disponível.</p>',
    date: '',
    readTime: 0,
    author: '',
    image: '/images/article-placeholder.jpg',
    category: ''
  };

  return (
    <>
      <SEO 
        title={article.title} 
        description={`${article.title} - Leia este artigo sobre ${article.category} e descubra insights valiosos para seu bem-estar emocional.`}
        keywords={`${article.category.toLowerCase()}, psicologia, saúde mental, bem-estar emocional, ${article.title.toLowerCase()}`}
        url={`/artigos/${slug}`}
      />
      
      <section className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/artigos" className="inline-flex items-center text-teal-700 hover:text-teal-600 transition-colors mb-8">
              <ArrowLeft size={18} className="mr-2" />
              Voltar para artigos
            </Link>
            
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="relative h-64 md:h-80">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {article.category && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    article.category === 'Ansiedade' ? 'bg-purple-100 text-purple-800' :
                    article.category === 'Depressão' ? 'bg-blue-100 text-blue-800' :
                    article.category === 'Relacionamentos' ? 'bg-pink-100 text-pink-800' :
                    article.category === 'Autoestima' ? 'bg-amber-100 text-amber-800' :
                    'bg-teal-100 text-teal-800'
                  }`}>
                    {article.category}
                  </span>
                )}
              </div>
              
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-8">
                  {article.date && (
                    <div className="flex items-center">
                      <span>{article.date}</span>
                    </div>
                  )}
                  
                  {article.readTime > 0 && (
                    <div className="flex items-center">
                      <span>{article.readTime} min de leitura</span>
                    </div>
                  )}
                  
                  {article.author && (
                    <div className="flex items-center">
                      <span>Por: {article.author}</span>
                    </div>
                  )}
                </div>
                
                <div 
                  className="prose prose-teal max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetailPage;
