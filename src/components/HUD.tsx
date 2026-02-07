import ProgressBar from "./ProgressBar";

type Props = {
  title: string;
  currentStep: number;
  totalSteps: number;
  onToggleMute?: () => void;
  muted?: boolean;
};

export default function HUD({ title, currentStep, totalSteps, onToggleMute, muted }: Props) {
  return (
    <div className="pointer-events-auto w-full rounded-2xl border border-white/20 bg-black/35 p-3 backdrop-blur">
      <div className="mb-2 flex items-center justify-between text-white">
        <h1 className="text-sm font-semibold tracking-wide">{title}</h1>
        <button
          onClick={onToggleMute}
          className="rounded-lg border border-white/20 px-2 py-1 text-xs hover:bg-white/10"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
      <ProgressBar current={currentStep} total={totalSteps} />
      <p className="mt-1 text-xs text-white/80">{currentStep} / {totalSteps}</p>
    </div>
  );
}
