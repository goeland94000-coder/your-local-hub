import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-8 animate-fade-in">
              À propos de nous
            </h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Bienvenue dans votre bar café PMU de quartier, un lieu où la convivialité et le partage sont au cœur de notre philosophie.
              </p>
              <p className="leading-relaxed">
                Depuis notre ouverture, nous nous efforçons de créer un espace chaleureux où chacun peut se sentir comme chez soi. Que vous veniez pour un café matinal, un verre entre amis, ou pour tenter votre chance au PMU, notre équipe est là pour vous accueillir avec le sourire.
              </p>
              <p className="leading-relaxed">
                Notre établissement combine l'ambiance traditionnelle d'un café français avec les services modernes que vous attendez : wifi gratuit, écrans pour suivre les événements sportifs, et un espace confortable pour se détendre.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
