import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Confirmation immédiate",
    description: "Recevez une confirmation par email",
  },
  {
    icon: Users,
    title: "Places garanties",
    description: "Votre table vous attend",
  },
  {
    icon: Calendar,
    title: "Flexibilité",
    description: "Modifiez votre réservation facilement",
  },
];

const Reservation = () => {
  return (
    <>
      <SEO 
        title="Réserver une table"
        description="Réservez facilement votre table au Goéland. Convivialité garantie pour vos soirées, événements ou moments entre amis."
      />
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Réserver une table
            </h1>
            <p className="text-xl text-muted-foreground">
              Réservez votre place facilement et profitez de notre ambiance conviviale
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center">
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <form className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground pb-2 border-b-2 border-primary">
                    Vos informations
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
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
                </div>

                {/* Reservation Details */}
                <div className="space-y-6 pt-6">
                  <h2 className="text-2xl font-bold text-foreground pb-2 border-b-2 border-primary">
                    Détails de la réservation
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Heure *
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      Nombre de personnes *
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le nombre de personnes" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(20)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? "personne" : "personnes"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Type de réservation</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="table">Table standard</SelectItem>
                        <SelectItem value="event">Événement spécial</SelectItem>
                        <SelectItem value="birthday">Anniversaire</SelectItem>
                        <SelectItem value="business">Professionnel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Demandes particulières (optionnel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Allergie alimentaire, emplacement préféré, etc."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Confirmer la réservation
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    * Champs obligatoires
                  </p>
                </div>
              </form>
            </Card>

            {/* Additional Info */}
            <Card className="mt-8 p-6 bg-secondary text-center">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Besoin d'aide ?</span><br />
                Appelez-nous au <a href="tel:+33123456789" className="text-primary font-semibold hover:underline">01 23 45 67 89</a> ou envoyez un email à <a href="mailto:contact@barcafe.fr" className="text-primary font-semibold hover:underline">contact@barcafe.fr</a>
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

export default Reservation;
