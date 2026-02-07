type Props = { current: number; total: number };

export default function ProgressBar({ current, total }: Props) {
  const pct = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
  return (
    <div className="h-2 w-full rounded-full bg-white/20">
      <div className="h-2 rounded-full bg-white/80 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}
