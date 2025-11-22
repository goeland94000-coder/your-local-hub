import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Soirée Quiz",
    date: "15 Décembre 2025",
    time: "20h00",
    description: "Venez tester vos connaissances lors de notre soirée quiz mensuelle. Ambiance garantie et lots à gagner !",
  },
  {
    title: "Match de Coupe",
    date: "22 Décembre 2025",
    time: "18h00",
    description: "Retransmission en direct sur grand écran. Ambiance de stade garantie !",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
              Événements
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Retrouvez nos soirées, animations et événements spéciaux
            </p>

            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={event.title}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Réserver
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
