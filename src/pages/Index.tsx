import { useState } from "react";
import ProductShowcase from "@/components/ProductShowcase";
import ChatInterface from "@/components/ChatInterface";
import { Product } from "@/types/product";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNegotiateClick = (product: Product) => {
    setSelectedProduct(product);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <ProductShowcase onNegotiateClick={handleNegotiateClick} />
      <ChatInterface 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Index;
