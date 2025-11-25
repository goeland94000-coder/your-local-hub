import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { SEO } from "@/components/SEO";

const schedules = [
  { day: "Lundi - Vendredi", hours: "7h30 - 23h00" },
  { day: "Samedi", hours: "10h00 - 20h00" },
  { day: "Dimanche", hours: "10h00 - 23h00" },
];

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact"
        description="Contactez Le Goéland : adresse, téléphone, email, horaires. Av. du Général Pierre Billotte, 94000 Créteil. 06 01 39 24 99"
      />
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
                        Av. du Général Pierre Billotte<br />
                        94000 Créteil, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
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

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:goeland94000@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        goeland94000@gmail.com
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.700597987884!2d2.454375976780366!3d48.79979987130099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d3733221379%3A0x8892454522883490!2sBar%20Les%20Goelands%20Pmu!5e0!3m2!1sfr!2sfr!4v1700650000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Goéland"
              />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Contact;
