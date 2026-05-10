import React from 'react';
import { Helmet } from 'react-helmet-async';
import { schoolInfo } from '../data/schoolData';
import { seoConfig, localBusinessSchema, faqSchema } from '../data/seoData';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  article = null,
  noindex = false,
  canonical = null
}) => {
  // Default values from SEO config
  const defaultTitle = seoConfig.defaultTitle;
  const defaultDescription = seoConfig.defaultDescription;
  const defaultKeywords = seoConfig.defaultKeywords;
  const defaultImage = seoConfig.defaultImage;
  const siteUrl = seoConfig.siteUrl;

  // Construct final values
  const finalTitle = title ? `${title} | ${schoolInfo.name}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;
  const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
  const finalUrl = url ? `${siteUrl}${url}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : finalUrl;

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": schoolInfo.name,
    "alternateName": "Arista Secondary School",
    "description": finalDescription,
    "url": siteUrl,
    "logo": finalImage,
    "image": finalImage,
    "foundingDate": schoolInfo.stats.established,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolInfo.contact.address.street,
      "addressLocality": schoolInfo.contact.address.city,
      "addressRegion": schoolInfo.contact.address.state,
      "postalCode": schoolInfo.contact.address.pincode,
      "addressCountry": schoolInfo.contact.address.country
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": schoolInfo.contact.phone.principal,
        "contactType": "Principal",
        "email": schoolInfo.contact.email.school
      },
      {
        "@type": "ContactPoint",
        "telephone": schoolInfo.contact.phone.assistantOfficer,
        "contactType": "Assistant Officer",
        "email": schoolInfo.contact.email.school
      }
    ],
    "sameAs": [
      schoolInfo.socialMedia.youtube
    ],
    "numberOfStudents": schoolInfo.stats.students,
    "numberOfEmployees": schoolInfo.stats.faculty
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ]
  };

  // Add current page to breadcrumb if not home
  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    pathSegments.forEach((segment, index) => {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1),
        "item": `${siteUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      });
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={schoolInfo.name} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content={schoolInfo.name} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content={`${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}`} />
      <meta name="geo.position" content="11.4583;77.4333" />
      <meta name="ICBM" content="11.4583, 77.4333" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#54078f" />
      <meta name="msapplication-TileColor" content="#54078f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {/* Add FAQ schema only on home page */}
      {(!title || title === 'Home') && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
