import { Coffee, Beer, Ticket, Users, Wifi, Tv } from "lucide-react";
import { Card } from "@/components/ui/card";
import cafeImage from "@/assets/cafe-service.jpg";
import pmuImage from "@/assets/pmu-service.jpg";
import convivialiteImage from "@/assets/convivialite-service.jpg";

const services = [
  {
    icon: Coffee,
    title: "Bar & Café",
    description: "Ambiance conviviale, boissons chaudes et fraîches, service de qualité dans un cadre chaleureux.",
    image: cafeImage,
    features: ["Café artisanal", "Boissons fraîches", "Service rapide"],
  },
  {
    icon: Ticket,
    title: "PMU & Jeux",
    description: "Paris sportifs, courses hippiques, jeux de grattage FDJ dans un espace dédié et confortable.",
    image: pmuImage,
    features: ["Paris en direct", "Jeux FDJ", "Espace dédié"],
  },
  {
    icon: Users,
    title: "Espace convivialité",
    description: "Un lieu pour se retrouver, discuter et partager des moments ensemble dans une ambiance détendue.",
    image: convivialiteImage,
    features: ["Ambiance chaleureuse", "Écran TV", "Wifi gratuit"],
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez tout ce que nous vous proposons pour passer un moment agréable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-secondary">
            <Wifi className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Wifi gratuit</h4>
            <p className="text-sm text-muted-foreground">Connexion haut débit</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary">
            <Tv className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Écrans TV</h4>
            <p className="text-sm text-muted-foreground">Sports et événements</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-secondary">
            <Coffee className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Service continu</h4>
            <p className="text-sm text-muted-foreground">Toute la journée</p>
          </div>
        </div>
      </div>
    </section>
  );
};
