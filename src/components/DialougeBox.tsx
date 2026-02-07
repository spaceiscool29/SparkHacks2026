import { useEffect, useMemo, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character
  onDone?: () => void;
};

export default function DialogueBox({ text, speed = 24, onDone }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
  }, [text]);

  useEffect(() => {
    if (!text) return;
    if (visibleCount >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setVisibleCount((v) => v + 1), speed);
    return () => clearTimeout(t);
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
