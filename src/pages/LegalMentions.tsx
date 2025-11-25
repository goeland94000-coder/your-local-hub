import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Building, User, Mail, Phone } from "lucide-react";

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-foreground">
                Mentions Légales
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Informations légales et réglementaires
            </p>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Identification de l'établissement */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Building className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Identification de l'établissement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dénomination sociale</h3>
                  <p>Le Goéland - Bar Café PMU</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Forme juridique</h3>
                  <p>Établissement recevant du public (ERP)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p>
                    Av. du Général Pierre Billotte<br />
                    94000 Créteil, France
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">SIRET</h3>
                  <p>[À compléter]</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Licence de débit de boissons</h3>
                  <p>Catégorie [À compléter] - N° [À compléter]</p>
                </div>
              </div>
            </Card>

            {/* Directeur de publication */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Directeur de publication
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Nom du gérant :</span> [À compléter]
                </p>
                <p>
                  <span className="font-semibold text-foreground">Qualité :</span> Gérant de l'établissement
                </p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Nous contacter
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href="tel:+33601392499" className="hover:text-primary transition-colors">
                    06 01 39 24 99
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:goeland94000@gmail.com" className="hover:text-primary transition-colors">
                    goeland94000@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Hébergement du site */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Hébergement du site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Hébergeur :</span> Lovable (GPT Workspace Ltd)
                </p>
                <p>
                  <span className="font-semibold text-foreground">Adresse :</span> Wework, 10 York Road, Londres SE1 7ND, Royaume-Uni
                </p>
                <p>
                  <span className="font-semibold text-foreground">Site web :</span>{" "}
                  <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    lovable.dev
                  </a>
                </p>
              </div>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) 
                  est la propriété exclusive du Goéland, à l'exception des marques, logos ou contenus 
                  appartenant à d'autres sociétés partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication 
                  de ces différents éléments est strictement interdite sans l'accord exprès par écrit du Goéland.
                </p>
              </div>
            </Card>

            {/* Responsabilité */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes.
                </p>
                <p>
                  Le Goéland ne pourra être tenu responsable des dommages directs et indirects causés au 
                  matériel de l'utilisateur, lors de l'accès au site.
                </p>
                <p>
                  Les horaires, tarifs et disponibilités mentionnés sur ce site sont donnés à titre indicatif 
                  et peuvent être modifiés sans préavis.
                </p>
              </div>
            </Card>

            {/* Droit applicable */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Droit applicable
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le présent site est soumis au droit français. Tout litige relatif à l'utilisation de ce site 
                  sera de la compétence exclusive des tribunaux français.
                </p>
              </div>
            </Card>

            {/* Médiation */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Médiation de la consommation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Conformément à l'article L.612-1 du Code de la consommation, nous proposons un dispositif 
                  de médiation de la consommation. L'entité de médiation retenue est :
                </p>
                <p>
                  <span className="font-semibold text-foreground">Médiateur :</span> [À compléter]<br />
                  <span className="font-semibold text-foreground">Adresse :</span> [À compléter]<br />
                  <span className="font-semibold text-foreground">Site web :</span> [À compléter]
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalMentions;
