import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Beer, Ticket } from "lucide-react";
import heroImage from "@/assets/hero-bar.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bar Café PMU - Ambiance conviviale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Coffee className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Ouvert tous les jours
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Votre bar convivial
              <span className="block text-primary mt-2">
                au cœur de la ville
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl">
              Un lieu chaleureux où se retrouver autour d'un café, d'un verre, d'un ticket à gratter ou d'un moment de convivialité.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-foreground/80">
                <Coffee className="h-5 w-5 text-primary" />
                <span className="font-medium">Café & Bar</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/80">
                <Ticket className="h-5 w-5 text-primary" />
                <span className="font-medium">PMU & Jeux</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/80">
                <Beer className="h-5 w-5 text-primary" />
                <span className="font-medium">Ambiance conviviale</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                <Link to="/reservation">
                  Réserver maintenant
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/menu">Voir le menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
