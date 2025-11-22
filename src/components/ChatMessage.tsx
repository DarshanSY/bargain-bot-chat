import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === "bot";
  
  return (
    <div
      className={cn(
        "flex gap-2 animate-fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm">
          🤖
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 shadow-sm",
          isBot
            ? "bg-card text-card-foreground rounded-tl-none"
            : "bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-tr-none"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
        <p
          className={cn(
            "text-xs mt-1.5 opacity-70",
            isBot ? "text-muted-foreground" : "text-primary-foreground"
          )}
        >
          {message.timestamp.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
      
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 text-sm">
          👤
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
