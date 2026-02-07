type Props = {
  theme?: string;
  camera?: string;
};

export default function CinematicBackground({
  theme = "crash_base",
  camera = "default",
}: Props) {
  return (
    <div className={`cinematic-bg theme-${theme} cam-${camera}`} aria-hidden="true">
      <div className="stars-layer stars-1" />
      <div className="stars-layer stars-2" />
      <div className="nebula" />
      <div className="planet" />
      <div className="meteor meteor-1" />
      <div className="meteor meteor-2" />
      <div className="fog" />
      <div className="vignette" />
    </div>
  );
}
