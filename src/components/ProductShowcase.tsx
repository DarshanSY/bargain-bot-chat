import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, MessageCircle } from "lucide-react";

interface ProductShowcaseProps {
  onNegotiateClick: () => void;
}

const ProductShowcase = ({ onNegotiateClick }: ProductShowcaseProps) => {
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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center h-80">
            <ShoppingCart className="w-32 h-32 text-primary" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Premium Wireless Headphones</h2>
            <p className="text-muted-foreground mb-4">
              High-quality sound, noise cancellation, and 30-hour battery life
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">₹4,999</span>
              <span className="text-xl text-muted-foreground line-through">₹7,999</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                38% OFF
              </span>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={onNegotiateClick} 
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Negotiate Price
              </Button>
              <Button variant="outline" className="flex-1">
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg animate-fade-in flex flex-col justify-center" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Start Negotiation</h4>
                <p className="text-sm text-muted-foreground">Click "Negotiate Price" to chat with our AI</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Chat & Bargain</h4>
                <p className="text-sm text-muted-foreground">Use quick replies or type your own offers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Get Best Deal</h4>
                <p className="text-sm text-muted-foreground">AI finds the best price with maximum value</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductShowcase;
