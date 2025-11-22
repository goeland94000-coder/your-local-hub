import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import menuSnacksImage from "@/assets/menu-snacks.jpg";

const menuCategories = [
  {
    category: "Boissons chaudes",
    description: "Café de qualité torréfié artisanalement",
    items: [
      { name: "Café simple", price: "1,50 €" },
      { name: "Expresso", price: "2,00 €" },
      { name: "Cappuccino", price: "3,50 €" },
      { name: "Thé", price: "2,50 €" },
      { name: "Chocolat chaud", price: "3,00 €" },
    ],
  },
  {
    category: "Boissons froides",
    description: "Rafraîchissements et boissons sans alcool",
    items: [
      { name: "Sodas", price: "2,50 €" },
      { name: "Jus de fruits frais", price: "3,00 €" },
      { name: "Eau minérale", price: "2,00 €" },
      { name: "Bières sans alcool", price: "3,50 €" },
      { name: "Smoothies", price: "4,50 €" },
    ],
  },
  {
    category: "Bières & Cidres",
    description: "Sélection de bières pression et bouteilles",
    items: [
      { name: "Bière pression 25cl", price: "3,50 €" },
      { name: "Bière pression 50cl", price: "5,00 €" },
      { name: "Bières bouteilles", price: "4,00 €" },
      { name: "Bières spéciales", price: "5,50 €" },
      { name: "Cidre", price: "4,50 €" },
    ],
  },
  {
    category: "Vins & Alcools",
    description: "Carte des vins et spiritueux",
    items: [
      { name: "Vin rouge (verre)", price: "4,50 €" },
      { name: "Vin blanc (verre)", price: "4,50 €" },
      { name: "Vin rosé (verre)", price: "4,50 €" },
      { name: "Pastis", price: "3,50 €" },
      { name: "Whisky", price: "6,00 €" },
      { name: "Cocktails maison", price: "8,00 €" },
    ],
  },
  {
    category: "Snacks & Petite Restauration",
    description: "Pour accompagner vos boissons",
    items: [
      { name: "Croissant", price: "1,50 €" },
      { name: "Pain au chocolat", price: "1,50 €" },
      { name: "Sandwich", price: "5,00 €" },
      { name: "Croque-monsieur", price: "6,00 €" },
      { name: "Planche apéro", price: "12,00 €" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Notre Carte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez notre sélection de boissons et snacks
            </p>
          </div>

          {/* Image */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="overflow-hidden">
              <img
                src={menuSnacksImage}
                alt="Nos spécialités"
                className="w-full h-[300px] object-cover"
              />
            </Card>
          </div>

          {/* Menu Categories */}
          <div className="max-w-5xl mx-auto space-y-8">
            {menuCategories.map((category, index) => (
              <Card
                key={category.category}
                className="p-8 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {category.category}
                  </h2>
                  <p className="text-muted-foreground italic">
                    {category.description}
                  </p>
                </div>
                <div className="border-t-2 border-primary pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center py-3 px-4 hover:bg-secondary/50 rounded-lg transition-colors"
                      >
                        <span className="text-lg text-foreground font-medium">
                          {item.name}
                        </span>
                        <span className="text-lg text-primary font-bold ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Formules spéciales */}
          <div className="max-w-5xl mx-auto mt-12 space-y-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-8">Nos Formules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Formule Petit-Déjeuner</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Disponible de 7h à 11h</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Café + Croissant</span>
                    <span className="text-primary font-bold">2,50 €</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Café + Tartine beurre confiture</span>
                    <span className="text-primary font-bold">3,00 €</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground">Jus d'orange + Viennoiserie</span>
                    <span className="text-primary font-bold">4,00 €</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Happy Hour</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Tous les jours de 17h à 19h</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Bière pression 50cl</span>
                    <span className="text-accent font-bold">4,00 € <span className="line-through text-muted-foreground text-sm">5,00 €</span></span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Cocktails maison</span>
                    <span className="text-accent font-bold">6,00 € <span className="line-through text-muted-foreground text-sm">8,00 €</span></span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground">Verre de vin</span>
                    <span className="text-accent font-bold">3,50 € <span className="line-through text-muted-foreground text-sm">4,50 €</span></span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-secondary text-center">
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Informations :</span><br />
                Tous nos prix sont affichés TTC. Les formules ne sont pas cumulables avec d'autres promotions.<br />
                N'hésitez pas à demander conseil à notre équipe pour découvrir nos suggestions du jour !
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
