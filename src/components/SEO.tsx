import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  url?: string;
  structuredData?: object;
}

export const SEO = ({
  title = "Le Goéland - Bar Café PMU - Créteil",
  description = "Bar café PMU chaleureux à Créteil avec espace jeux et moments de partage. Café, boissons, paris sportifs et ambiance conviviale.",
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://lovable.app",
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("Le Goéland") ? title : `${title} | Le Goéland`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined structured data for common page types
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "name": "Le Goéland",
  "image": "https://lovable.dev/opengraph-image-p98pqg.png",
  "description": "Bar café PMU chaleureux à Créteil avec espace jeux et moments de partage",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. du Général Pierre Billotte",
    "addressLocality": "Créteil",
    "postalCode": "94000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.7997998",
    "longitude": "2.4565649"
  },
  "telephone": "+33601392499",
  "email": "goeland94000@gmail.com",
  "url": "https://lovable.app",
  "priceRange": "€€",
  "servesCuisine": "Café, Bar",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "23:00"
    }
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "PMU - Paris sportifs"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Jeux FDJ"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Espace convivial"
    }
  ]
});

export const getRestaurantMenuSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Menu Le Goéland",
  "description": "Carte des boissons et snacks",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Boissons chaudes",
      "description": "Café, thé, chocolat chaud"
    },
    {
      "@type": "MenuSection",
      "name": "Boissons fraîches",
      "description": "Sodas, jus, eaux"
    },
    {
      "@type": "MenuSection",
      "name": "Alcools",
      "description": "Bières, vins, spiritueux"
    }
  ]
});

export const getEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate || event.startDate,
  "image": event.image,
  "location": {
    "@type": "Place",
    "name": "Le Goéland",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. du Général Pierre Billotte",
      "addressLocality": "Créteil",
      "postalCode": "94000",
      "addressCountry": "FR"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Le Goéland",
    "url": "https://lovable.app"
  }
});
