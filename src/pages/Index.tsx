import { useState } from "react";
import ProductShowcase from "@/components/ProductShowcase";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ProductShowcase onNegotiateClick={() => setIsChatOpen(true)} />
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
