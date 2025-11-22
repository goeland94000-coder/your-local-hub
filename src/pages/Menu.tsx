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

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Card className="p-8 bg-secondary">
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Formules disponibles :</span><br />
                Profitez de nos formules petit-déjeuner et happy hour.<br />
                N'hésitez pas à demander conseil à notre équipe !
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
