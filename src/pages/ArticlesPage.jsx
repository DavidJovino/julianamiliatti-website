import React, { useState } from 'react';
import SEO from '../components/SEO';
import ArticlesSection from '../components/ArticlesSection';

const ArticlesPage = () => {
  const allArticles = [
    {
      title: 'Como lidar com a ansiedade no dia a dia',
      excerpt: 'Descubra técnicas práticas para gerenciar os sintomas de ansiedade e recuperar o controle emocional.',
      date: '10 Abr 2025',
      readTime: 5,
      author: 'Psicóloga',
      image: '/images/article1.jpg',
      slug: 'como-lidar-com-ansiedade',
      category: 'Ansiedade'
    },
    {
      title: 'A importância do autocuidado para a saúde mental',
      excerpt: 'Entenda por que dedicar tempo para cuidar de si mesmo é fundamental para manter o equilíbrio emocional.',
      date: '02 Abr 2025',
      readTime: 4,
      author: 'Psicóloga',
      image: '/images/article2.jpg',
      slug: 'importancia-do-autocuidado',
      category: 'Autoestima'
    },
    {
      title: 'Relacionamentos saudáveis: como construir e manter',
      excerpt: 'Aprenda os pilares fundamentais para construir relacionamentos equilibrados e duradouros.',
      date: '25 Mar 2025',
      readTime: 6,
      author: 'Psicóloga',
      image: '/images/article3.jpg',
      slug: 'relacionamentos-saudaveis',
      category: 'Relacionamentos'
    },
    {
      title: 'Sinais de alerta para depressão: quando buscar ajuda',
      excerpt: 'Conheça os principais sinais que podem indicar depressão e saiba quando é hora de procurar ajuda profissional.',
      date: '18 Mar 2025',
      readTime: 5,
      author: 'Psicóloga',
      image: '/images/article4.jpg',
      slug: 'sinais-de-alerta-depressao',
      category: 'Depressão'
    },
    {
      title: 'Como ajudar alguém com transtorno de ansiedade',
      excerpt: 'Dicas práticas para apoiar pessoas próximas que estão enfrentando transtornos de ansiedade.',
      date: '10 Mar 2025',
      readTime: 4,
      author: 'Psicóloga',
      image: '/images/article5.jpg',
      slug: 'como-ajudar-alguem-com-ansiedade',
      category: 'Ansiedade'
    },
    {
      title: 'A influência dos pensamentos nas emoções',
      excerpt: 'Entenda como nossos pensamentos afetam diretamente nossas emoções e comportamentos.',
      date: '02 Mar 2025',
      readTime: 5,
      author: 'Psicóloga',
      image: '/images/article6.jpg',
      slug: 'influencia-pensamentos-emocoes',
      category: 'Autoconhecimento'
    }
  ];

  const [articles, setArticles] = useState(allArticles);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Ansiedade', 'Depressão', 'Relacionamentos', 'Autoestima', 'Autoconhecimento'];

  const filterArticles = (category) => {
    setActiveCategory(category);
    if (category === 'Todos') {
      setArticles(allArticles);
    } else {
      setArticles(allArticles.filter(article => article.category === category));
    }
  };

  return (
    <>
      <SEO 
        title="Artigos" 
        description="Artigos e reflexões sobre psicologia, saúde mental, relacionamentos e desenvolvimento pessoal para ajudar em sua jornada de autoconhecimento."
        keywords="artigos psicologia, saúde mental, ansiedade, depressão, relacionamentos, autoestima, autoconhecimento"
        url="/artigos"
      />
      
      <section className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-teal-800 mb-4">
              Artigos e Reflexões
            </h1>
            <p className="text-lg text-gray-600">
              Conteúdos para ajudar você a compreender melhor suas emoções e desenvolver uma relação mais saudável consigo mesmo.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterArticles(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-teal-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  {article.category && (
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
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
                
                <div className="p-5">
                  <h3 className="text-xl font-medium text-gray-800 mb-2 line-clamp-2">
                    <a href={`/artigos/${article.slug}`} className="hover:text-teal-600 transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    {article.date && (
                      <div className="flex items-center">
                        <span>{article.date}</span>
                      </div>
                    )}
                    
                    {article.readTime && (
                      <div className="flex items-center">
                        <span>{article.readTime} min de leitura</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesPage;
