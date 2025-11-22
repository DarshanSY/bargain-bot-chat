import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Package, DollarSign, ShoppingCart } from "lucide-react";

const PriceCard = () => {
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
          <span className="text-sm font-semibold line-through text-muted-foreground">₹7,999</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Negotiated Price</span>
          </div>
          <span className="text-lg font-bold text-primary">₹4,199</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">You Save</span>
          </div>
          <span className="text-sm font-bold text-secondary">₹3,800 (47%)</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span className="text-xs text-muted-foreground">Seller Profit Margin</span>
          <span className="text-xs font-semibold">18% ✓</span>
        </div>
      </div>

      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-md">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Add to Cart - ₹4,199
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-3">
        ✨ Price locked for 15 minutes
      </p>
    </Card>
  );
};

export default PriceCard;
