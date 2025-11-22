import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const menuCategories = [
  {
    category: "Boissons chaudes",
    items: [
      { name: "Café simple", price: "1,50 €" },
      { name: "Expresso", price: "2,00 €" },
      { name: "Cappuccino", price: "3,50 €" },
      { name: "Thé", price: "2,50 €" },
    ],
  },
  {
    category: "Boissons froides",
    items: [
      { name: "Sodas", price: "2,50 €" },
      { name: "Jus de fruits", price: "3,00 €" },
      { name: "Eau minérale", price: "2,00 €" },
      { name: "Bières bouteilles", price: "4,00 €" },
    ],
  },
  {
    category: "Alcools & Cocktails",
    items: [
      { name: "Vin (verre)", price: "4,50 €" },
      { name: "Pastis", price: "3,50 €" },
      { name: "Bières pression", price: "5,00 €" },
      { name: "Cocktails maison", price: "8,00 €" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
              Notre Carte
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Découvrez notre sélection de boissons
            </p>

            <div className="space-y-8">
              {menuCategories.map((category, index) => (
                <Card
                  key={category.category}
                  className="p-8 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center py-2 hover:bg-secondary/50 px-4 rounded-lg transition-colors"
                      >
                        <span className="text-lg text-foreground font-medium">
                          {item.name}
                        </span>
                        <span className="text-lg text-primary font-bold">
                          {item.price}
                        </span>
                      </div>
                    ))}
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

export default Menu;
