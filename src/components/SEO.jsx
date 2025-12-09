import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, author, schema }) => {
  const siteTitle = 'Psicóloga | Atendimento Humanizado';
  const defaultDescription = 'Psicóloga especializada em atendimento humanizado, oferecendo suporte emocional e terapia para ajudar você a encontrar equilíbrio e bem-estar.';
  const defaultKeywords = 'psicóloga, psicologia, terapia, saúde mental, bem-estar emocional, atendimento psicológico';
  const defaultImage = '/images/og-image.jpg';
  const siteUrl = 'https://www.psicologa.com.br';
  const defaultAuthor = 'Psicóloga';

  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${url || ''}`,
    author: author || defaultAuthor,
  };

  // Schema.org structured data for better SEO
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteTitle,
    "description": seo.description,
    "image": seo.image,
    "url": siteUrl,
    "telephone": "(00) 00000-0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Endereço do consultório",
      "addressLocality": "Cidade",
      "addressRegion": "Estado",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/psicologa",
      "https://www.facebook.com/psicologa"
    ]
  };

  // Use custom schema if provided, otherwise use default
  const schemaData = schema || defaultSchema;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      
      {/* Viewport for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
