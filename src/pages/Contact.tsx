import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const schedules = [
  { day: "Lundi - Vendredi", hours: "7h00 - 22h00" },
  { day: "Samedi", hours: "8h00 - 23h00" },
  { day: "Dimanche", hours: "9h00 - 21h00" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-muted-foreground">
              N'hésitez pas à nous contacter pour toute question ou demande d'information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Envoyez-nous un message
                  </h2>
                </div>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Horaires */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Horaires d'ouverture
                  </h2>
                </div>
                <div className="space-y-4">
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
                </div>
              </Card>

              {/* Contact Details */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Coordonnées
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        123 Rue de la Convivialité<br />
                        75000 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                      <a
                        href="tel:+33123456789"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        01 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
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
                </div>
              </Card>

              {/* Quick Info */}
              <Card className="p-8 bg-secondary">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Besoin d'une réservation rapide ?
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Réservez directement en ligne en quelques clics
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <a href="/reservation">Réserver une table</a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-6xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Nous trouver
            </h2>
            <Card className="overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674896!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
