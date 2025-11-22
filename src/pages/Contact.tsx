import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InfoSection } from "@/components/home/InfoSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            N'hésitez pas à nous contacter pour toute question
          </p>
        </div>
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
