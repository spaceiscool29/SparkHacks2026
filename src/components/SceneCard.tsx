import { motion } from "framer-motion";

type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

export default function ChoiceButton({ text, onClick, disabled }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left text-white backdrop-blur
                 transition hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed
                 focus:outline-none focus:ring-2 focus:ring-cyan-300"
    >
      {text}
    </motion.button>
  );
}
