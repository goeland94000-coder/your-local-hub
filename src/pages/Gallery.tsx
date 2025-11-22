import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
            Galerie Photos
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Découvrez l'ambiance de notre établissement
          </p>
          <div className="text-center text-muted-foreground">
            <p>La galerie sera bientôt disponible avec des photos de notre établissement</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
