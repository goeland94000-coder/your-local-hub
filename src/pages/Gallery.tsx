import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImage from "@/assets/hero-bar.jpg";
import cafeImage from "@/assets/cafe-service.jpg";
import pmuImage from "@/assets/pmu-service.jpg";
import convivialiteImage from "@/assets/convivialite-service.jpg";
import { SEO } from "@/components/SEO";
import aboutTeamImage from "@/assets/about-team.jpg";

const galleryImages = [
  {
    src: gallery1,
    alt: "Terrasse extérieure du bar",
    category: "Extérieur",
  },
  {
    src: heroImage,
    alt: "Intérieur chaleureux du bar",
    category: "Ambiance",
  },
  {
    src: gallery2,
    alt: "Ambiance nocturne",
    category: "Soirée",
  },
  {
    src: cafeImage,
    alt: "Service café",
    category: "Café",
  },
  {
    src: gallery3,
    alt: "Bières pression",
    category: "Boissons",
  },
  {
    src: pmuImage,
    alt: "Espace PMU",
    category: "PMU",
  },
  {
    src: convivialiteImage,
    alt: "Moments de partage",
    category: "Convivialité",
  },
  {
    src: aboutTeamImage,
    alt: "Notre équipe",
    category: "Équipe",
  },
];

const Gallery = () => {
  return (
    <>
      <SEO 
        title="Galerie Photos"
        description="Découvrez l'ambiance chaleureuse du Goéland en images : notre bar, l'espace PMU, le café et les moments de convivialité."
      />
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Galerie Photos
            </h1>
            <p className="text-xl text-muted-foreground">
              Découvrez l'ambiance chaleureuse de notre établissement en images
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 bg-secondary">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plongez dans l'atmosphère unique de notre bar café. Des moments de convivialité partagés autour d'un verre, l'ambiance chaleureuse de notre intérieur, et tous les détails qui font notre identité.
              </p>
            </Card>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                          {image.category}
                        </span>
                        <p className="text-foreground font-medium mt-2">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Venez découvrir notre ambiance
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Ces photos ne rendent pas justice à l'atmosphère unique qui règne dans notre établissement. Venez nous rendre visite pour vivre l'expérience par vous-même !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/reservation"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                >
                  Réserver une table
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-lg transition-colors"
                >
                  Nous contacter
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Gallery;
