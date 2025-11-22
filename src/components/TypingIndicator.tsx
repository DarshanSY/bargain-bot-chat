const TypingIndicator = () => {
  return (
    <div className="flex gap-2 justify-start animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm">
        🤖
      </div>
      <div className="bg-card text-card-foreground rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot" />
          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing-dot" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
