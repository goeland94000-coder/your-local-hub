import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import eventsSportsImage from "@/assets/events-sports.jpg";

const events = [
  {
    title: "Soirée Quiz",
    date: "15 Décembre 2025",
    time: "20h00",
    description: "Venez tester vos connaissances lors de notre soirée quiz mensuelle. Ambiance garantie et lots à gagner ! Inscriptions par équipe de 2 à 4 personnes.",
    capacity: "12 équipes maximum",
  },
  {
    title: "Match de Coupe",
    date: "22 Décembre 2025",
    time: "18h00",
    description: "Retransmission en direct sur grand écran. Ambiance de stade garantie ! Venez supporter votre équipe dans une atmosphère conviviale.",
    capacity: "Places limitées",
  },
  {
    title: "Tournoi de Belote",
    date: "5 Janvier 2026",
    time: "14h00",
    description: "Tournoi amical de belote ouvert à tous les niveaux. Inscription gratuite, prix pour les gagnants et bonne humeur assurée.",
    capacity: "16 équipes",
  },
];

const regularEvents = [
  {
    icon: Tv,
    title: "Retransmissions sportives",
    description: "Tous les grands matchs diffusés en direct",
    schedule: "Selon calendrier sportif",
  },
  {
    icon: Users,
    title: "Happy Hour",
    description: "Tarifs préférentiels sur une sélection de boissons",
    schedule: "Lundi au vendredi, 17h-19h",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Événements
            </h1>
            <p className="text-xl text-muted-foreground">
              Retrouvez nos soirées, animations et événements spéciaux
            </p>
          </div>

          {/* Image */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="overflow-hidden">
              <img
                src={eventsSportsImage}
                alt="Ambiance événements"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Événements à venir
            </h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={event.title}
                  className="p-6 md:p-8 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-5 w-5 mr-2 text-primary" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-5 w-5 mr-2 text-primary" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          <span className="font-medium">{event.capacity}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <Button 
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground lg:self-center"
                      size="lg"
                    >
                      <Link to="/reservation">Réserver</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Events */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Animations régulières
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularEvents.map((event, index) => (
                <Card
                  key={event.title}
                  className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <event.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <p className="text-primary font-semibold">
                    {event.schedule}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Envie d'organiser votre événement ?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Nous pouvons privatiser notre espace pour vos événements privés, anniversaires, ou réunions d'entreprise.
              </p>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
