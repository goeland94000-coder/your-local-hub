import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { InfoSection } from "@/components/home/InfoSection";
import { SEO, getLocalBusinessSchema } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO structuredData={getLocalBusinessSchema()} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
