import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

export default function TypewriterText({ text, speed = 20, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;
    const t = window.setTimeout(() => setIndex((v) => v + 1), speed);
    return () => window.clearTimeout(t);
  }, [index, text, speed]);

  return (
    <p className={className}>
      {text.slice(0, index)}
      {index < text.length && <span className="tw-caret">|</span>}
    </p>
  );
}
