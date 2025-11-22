import { Button } from "@/components/ui/button";

interface QuickReplyButtonsProps {
  onReply: (message: string) => void;
}

const quickReplies = [
  { id: "1", text: "Give me the best price", emoji: "💰" },
  { id: "2", text: "I want more discount", emoji: "🎯" },
  { id: "3", text: "Add combo offer", emoji: "📦" },
  { id: "4", text: "Show final deal", emoji: "✅" },
];

const QuickReplyButtons = ({ onReply }: QuickReplyButtonsProps) => {
  return (
    <div className="px-4 py-3 border-t border-border bg-card">
      <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
      <div className="flex flex-wrap gap-2">
        {quickReplies.map((reply) => (
          <Button
            key={reply.id}
            variant="outline"
            size="sm"
            onClick={() => onReply(reply.text)}
            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors animate-bounce-in"
            style={{ animationDelay: `${parseInt(reply.id) * 0.1}s` }}
          >
            <span className="mr-1">{reply.emoji}</span>
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplyButtons;
