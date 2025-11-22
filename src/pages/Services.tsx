import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesComponent } from "@/components/home/Services";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos prestations pour vous offrir la meilleure expérience
          </p>
        </div>
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
