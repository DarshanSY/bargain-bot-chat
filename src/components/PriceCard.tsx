import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Package, DollarSign, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";

interface PriceCardProps {
  product: Product;
}

const PriceCard = ({ product }: PriceCardProps) => {
  const originalPrice = product.original_price;
  const negotiatedPrice = Math.round(originalPrice * (1 - (product.max_discount + 3) / 100));
  const savings = originalPrice - negotiatedPrice;
  const discountPercent = Math.round((savings / originalPrice) * 100);
  const profitMargin = Math.round(((negotiatedPrice - product.cost_price) / negotiatedPrice) * 100);

  return (
    <Card className="p-5 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-primary/20 animate-bounce-in shadow-lg">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-primary mb-1">🎉 Your Special Deal!</h3>
        <p className="text-xs text-muted-foreground">Exclusive negotiated price</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-card rounded-lg">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Original Price</span>
          </div>
          <span className="text-sm font-semibold line-through text-muted-foreground">
            ₹{originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Negotiated Price</span>
          </div>
          <span className="text-lg font-bold text-primary">₹{negotiatedPrice.toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">You Save</span>
          </div>
          <span className="text-sm font-bold text-secondary">
            ₹{savings.toLocaleString()} ({discountPercent}%)
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span className="text-xs text-muted-foreground">Seller Profit Margin</span>
          <span className="text-xs font-semibold">{profitMargin}% ✓</span>
        </div>
      </div>

      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Add to Cart - ₹{negotiatedPrice.toLocaleString()}
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-3">
        ✨ Price locked for 15 minutes
      </p>
    </Card>
  );
};

export default PriceCard;
