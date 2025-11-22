import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, MessageCircle, Package } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types/product";
import { useToast } from "@/hooks/use-toast";

interface ProductShowcaseProps {
  onNegotiateClick: (product: Product) => void;
}

const ProductShowcase = ({ onNegotiateClick }: ProductShowcaseProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast({
        title: "Error",
        description: "Failed to load products. Please refresh the page.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateDiscountedPrice = (originalPrice: number, maxDiscount: number) => {
    return Math.round(originalPrice * (1 - maxDiscount / 100));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AI Bargain Bot
        </h1>
        <p className="text-xl text-muted-foreground">
          Negotiate the best deals with our AI assistant
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const discountedPrice = calculateDiscountedPrice(product.original_price, product.max_discount);
            return (
              <Card
                key={product.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center h-48">
                  <Package className="w-20 h-20 text-primary" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-primary">₹{discountedPrice.toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.original_price.toLocaleString()}
                    </span>
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      {product.max_discount}% OFF
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => onNegotiateClick(product)}
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Negotiate
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
