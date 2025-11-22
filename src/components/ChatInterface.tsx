import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import QuickReplyButtons from "./QuickReplyButtons";
import PriceCard from "./PriceCard";
import ChatInput from "./ChatInput";
import { Message } from "@/types/chat";

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! 👋 I'm your AI bargain assistant. Let's get you the best deal on these headphones!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showPriceCard, setShowPriceCard] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    let response = "";
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("best price") || lowerMessage.includes("lowest")) {
      response = "I can offer you ₹4,299! That's an amazing ₹700 off the current price. Plus, I'll throw in free shipping! 🎁";
    } else if (lowerMessage.includes("discount") || lowerMessage.includes("more off")) {
      response = "Let me check what I can do... How about ₹4,199? That's a total of 47% off the original price! 🎉";
    } else if (lowerMessage.includes("combo") || lowerMessage.includes("bundle")) {
      response = "Great idea! I can bundle these headphones with a premium carrying case for just ₹4,599. That's a ₹3,900 saving! 📦";
    } else if (lowerMessage.includes("final") || lowerMessage.includes("deal")) {
      setShowPriceCard(true);
      response = "Perfect! Here's your personalized deal. This is the best price I can offer while maintaining quality! 🎯";
    } else {
      response = "I understand! Let me work on getting you a better deal. How about we try one of the quick options below? 💡";
    }
    
    setIsTyping(false);
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: "bot",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setShowPriceCard(false);
    simulateAIResponse(content);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center md:justify-end p-4">
      <div 
        className="bg-card w-full max-w-md h-[90vh] md:h-full rounded-2xl md:rounded-l-2xl md:rounded-r-none shadow-2xl flex flex-col animate-slide-in-right overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <h3 className="font-semibold">AI Bargain Bot</h3>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-primary-foreground hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30"
        >
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          {showPriceCard && <PriceCard />}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {!isTyping && (
          <QuickReplyButtons onReply={handleSendMessage} />
        )}

        {/* Input */}
        <ChatInput onSend={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatInterface;
