import { schoolInfo } from './schoolData';

// SEO Configuration and Data
export const seoConfig = {
  defaultTitle: `${schoolInfo.name} - ${schoolInfo.tagline}`,
  titleTemplate: `%s | ${schoolInfo.name}`,
  defaultDescription: `${schoolInfo.name} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Established in ${schoolInfo.stats.established}, providing quality education with ${schoolInfo.stats.faculty} dedicated faculty members serving ${schoolInfo.stats.students} students. ${schoolInfo.motto}.`,
  siteUrl: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:80',
  defaultImage: '/logo.jpg',
  twitterHandle: '@AristaSecondarySchool',
  facebookAppId: '',

  // Default keywords for all pages
  defaultKeywords: [
    'Arista Secondary School',
    'school in Gobichettipalayam',
    'education Erode',
    'Tamil Nadu school',
    'quality education',
    'primary school',
    'secondary school',
    'CBSE school',
    'Transport Nagar school',
    schoolInfo.contact.address.city,
    schoolInfo.contact.address.state,
    'Innovation In Education',
    'Excellence in Education'
  ],

  // Organization structured data
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": schoolInfo.name,
    "alternateName": "Arista Secondary School",
    "description": `${schoolInfo.name} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Established in ${schoolInfo.stats.established}, providing quality education with ${schoolInfo.stats.faculty} dedicated faculty members serving ${schoolInfo.stats.students} students.`,
    "url": typeof window !== 'undefined' ? window.location.origin : 'http://localhost:80',
    "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : 'http://localhost:80/logo.jpg',
    "image": typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : 'http://localhost:80/logo.jpg',
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
    "numberOfEmployees": schoolInfo.stats.faculty,
    "areaServed": {
      "@type": "Place",
      "name": `${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}, India`
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": schoolInfo.academicPrograms.map((program, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": program,
          "provider": {
            "@type": "EducationalOrganization",
            "name": schoolInfo.name
          }
        }
      }))
    }
  }
};

// Page-specific SEO data
export const pagesSEO = {
  home: {
    title: "Home",
    description: `Welcome to ${schoolInfo.name} - ${schoolInfo.tagline}. Established in ${schoolInfo.stats.established} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Providing quality education with ${schoolInfo.stats.faculty} dedicated faculty members serving ${schoolInfo.stats.students} students.`,
    keywords: ['home', 'welcome', 'school admission', 'quality education', 'Gobichettipalayam school', 'best school'],
    url: "/",
    image: "/logo.jpg"
  },

  about: {
    title: "About Us",
    description: `Learn about ${schoolInfo.name} - established in ${schoolInfo.stats.established} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Our mission is to provide quality education with ${schoolInfo.stats.faculty} dedicated faculty members. We serve ${schoolInfo.stats.students} students with excellence.`,
    keywords: ['about us', 'school history', 'mission', 'vision', 'faculty', 'facilities', 'leadership', 'principal'],
    url: "/about",
    image: "/logo.jpg"
  },

  gallery: {
    title: "Gallery",
    description: "Explore Arista Secondary School's photo gallery showcasing school life, facilities, events, sports activities, cultural programs, and memorable moments. View our modern classrooms, laboratories, library, and campus facilities.",
    keywords: ['school gallery', 'photos', 'school life', 'facilities', 'events', 'sports', 'cultural programs', 'campus', 'classrooms'],
    url: "/gallery",
    image: "/logo.jpg"
  },

  documents: {
    title: "Documents",
    description: "Download important school documents, certificates, and forms from Arista Secondary School. Access affiliation letters, trust certificates, NOC, academic calendars, fee structure, and more official documents.",
    keywords: ['school documents', 'certificates', 'download', 'affiliation letter', 'trust certificate', 'NOC', 'academic calendar', 'fee structure', 'PTA', 'SMC'],
    url: "/documents",
    image: "/logo.jpg"
  },

  contact: {
    title: "Contact Us",
    description: `Contact ${schoolInfo.name} in ${schoolInfo.contact.address.city}, ${schoolInfo.contact.address.state}. Get in touch with our principal, administration, or visit us at ${schoolInfo.contact.address.full}. Phone: ${schoolInfo.contact.phone.principal}, Email: ${schoolInfo.contact.email.school}`,
    keywords: ['contact us', 'school address', 'phone number', 'email', 'location', 'visit school', 'admission inquiry', 'principal contact'],
    url: "/contact",
    image: "/logo.jpg"
  },

  achievements: {
    title: "Achievements",
    description: "Discover the awards, recognitions, and achievements of Arista Secondary School. Celebrating excellence in academics, sports, and co-curricular activities.",
    keywords: ['achievements', 'awards', 'school results', 'sports championship', 'science olympiad', 'cleanest school', 'toppers'],
    url: "/achievements",
    image: "/logo.jpg"
  }
};

// Local Business Schema for better local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:80'}/#organization`,
  "name": schoolInfo.name,
  "image": typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : 'http://localhost:80/logo.jpg',
  "telephone": schoolInfo.contact.phone.principal,
  "email": schoolInfo.contact.email.school,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": schoolInfo.contact.address.street,
    "addressLocality": schoolInfo.contact.address.city,
    "addressRegion": schoolInfo.contact.address.state,
    "postalCode": schoolInfo.contact.address.pincode,
    "addressCountry": schoolInfo.contact.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4583",
    "longitude": "77.4333"
  },
  "url": typeof window !== 'undefined' ? window.location.origin : 'http://localhost:80',
  "sameAs": [
    schoolInfo.socialMedia.youtube
  ],
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
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$"
};

// FAQ Schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What classes does Arista Secondary School offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Arista Secondary School offers education from Pre-Primary (Nursery - UKG) to Secondary (Class IX - X). Our academic programs include: ${schoolInfo.academicPrograms.join(', ')}.`
      }
    },
    {
      "@type": "Question",
      "name": "Where is Arista Secondary School located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Arista Secondary School is located at ${schoolInfo.contact.address.full}.`
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Arista Secondary School?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `You can contact Arista Secondary School by calling ${schoolInfo.contact.phone.principal} (Principal) or ${schoolInfo.contact.phone.assistantOfficer} (Assistant Officer), or email us at ${schoolInfo.contact.email.school}.`
      }
    },
    {
      "@type": "Question",
      "name": "When was Arista Secondary School established?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Arista Secondary School was established in ${schoolInfo.stats.established} and has been providing quality education for over ${schoolInfo.stats.yearsOfExcellence} years.`
      }
    }
  ]
};

export default seoConfig;
