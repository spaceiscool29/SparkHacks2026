import { useEffect, useMemo, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character
  onDone?: () => void;
};

export default function DialogueBox({ text, speed = 24, onDone }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  // Typing animation ONLY - no reset logic
  useEffect(() => {
    if (!text || visibleCount >= text.length) {
      if (visibleCount >= text.length && text.length > 0) {
        onDone?.();
      }
      return;
    }
    
    const timer = setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, speed);
    
    return () => clearTimeout(timer);
  }, [visibleCount, text, speed, onDone]);

  const visibleText = useMemo(() => text.slice(0, visibleCount), [text, visibleCount]);
  const isDone = visibleCount >= text.length;

  return (
    <div className="dialogue-box">
      <p className="story-body typewriter">{visibleText}</p>
      {!isDone && <span className="typing-caret">▋</span>}
    </div>
  );
}