import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Coffee, Heart, Users, Award } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";
import { SEO } from "@/components/SEO";

const values = [
  {
    icon: Heart,
    title: "Convivialité",
    description: "Un accueil chaleureux et une ambiance familiale où chacun se sent chez soi",
  },
  {
    icon: Users,
    title: "Partage",
    description: "Un lieu de rencontre et d'échanges au cœur de votre quartier",
  },
  {
    icon: Coffee,
    title: "Qualité",
    description: "Des produits sélectionnés avec soin et un service irréprochable",
  },
  {
    icon: Award,
    title: "Tradition",
    description: "L'authenticité d'un bar de quartier avec le confort moderne",
  },
];

const About = () => {
  return (
    <>
      <SEO 
        title="À propos"
        description="Découvrez l'histoire du Goéland, votre bar café PMU de quartier à Créteil. Convivialité, partage et ambiance chaleureuse."
      />
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              À propos de nous
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bienvenue dans votre bar café PMU de quartier, un lieu où la convivialité et le partage sont au cœur de notre philosophie.
            </p>
          </div>

          {/* Image Section */}
          <div className="max-w-5xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="overflow-hidden">
              <img
                src={aboutTeamImage}
                alt="Notre équipe vous accueille"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <Card className="p-8 md:p-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Depuis notre ouverture, nous nous efforçons de créer un espace chaleureux où chacun peut se sentir comme chez soi. Que vous veniez pour un café matinal, un verre entre amis, ou pour tenter votre chance au PMU, notre équipe est là pour vous accueillir avec le sourire.
                </p>
                <p>
                  Notre établissement combine l'ambiance traditionnelle d'un café français avec les services modernes que vous attendez : wifi gratuit, écrans pour suivre les événements sportifs, et un espace confortable pour se détendre.
                </p>
                <p>
                  Plus qu'un simple bar, nous sommes un lieu de vie où se tissent des liens, où les habitués se retrouvent et où les nouveaux venus deviennent rapidement des amis.
                </p>
              </div>
            </Card>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Ce qui nous définit et guide notre quotidien
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <Card className="p-8 md:p-12 bg-secondary">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Une équipe à votre service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionnés par notre métier, nous mettons tout en œuvre pour vous offrir une expérience unique à chaque visite. Notre équipe est formée pour vous conseiller, vous servir avec le sourire et créer cette ambiance conviviale qui fait notre réputation.
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default About;
