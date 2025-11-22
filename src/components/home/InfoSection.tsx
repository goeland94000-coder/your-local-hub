import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const schedules = [
	  { day: "Lundi - Vendredi", hours: "7h30 - 23h00" },
	  { day: "Samedi", hours: "10h00 - 20h00" },
	  { day: "Dimanche", hours: "10h00 - 23h00" },
];

export const InfoSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Horaires & Contact */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 flex items-center">
                <Clock className="h-8 w-8 text-primary mr-3" />
                Horaires d'ouverture
              </h2>
              <Card className="p-6 space-y-4">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-primary font-semibold">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations de contact
              </h3>
              <Card className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      Av. du Général Pierre Billotte<br />
                      94000 Créteil, France<br />
                      <span className="text-sm italic">Métro : Créteil - Préfecture (Ligne 8)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                    <a
                      href="tel:+33601392499"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      06 01 39 24 99
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:contact@barcafe.fr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@barcafe.fr
                    </a>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nous trouver
            </h2>
            <Card className="overflow-hidden h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.700597987884!2d2.454375976780366!3d48.79979987130099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d3733221379%3A0x8892454522883490!2sBar%20Les%20Goelands%20Pmu!5e0!3m2!1sfr!2sfr!4v1700650000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Bar Café PMU"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
