import React from "react";

type Props = {
  theme?: string;
  camera?: string;
  fxOverlay?: string[];
  text?: string;
};

function keywordFx(text?: string): string[] {
  const t = (text || "").toLowerCase();
  const out: string[] = [];

  if (t.includes("wind") || t.includes("storm")) out.push("fx-wind");
  if (t.includes("blood")) out.push("fx-blood");
  if (t.includes("static") || t.includes("radio") || t.includes("signal")) out.push("fx-static");
  if (t.includes("beacon")) out.push("fx-beacon");
  if (t.includes("crash") || t.includes("impact")) out.push("fx-shake");
  if (t.includes("dark") || t.includes("black")) out.push("fx-vignette-heavy");

  return out;
}

function mapOverlayFx(fxOverlay?: string[]): string[] {
  if (!fxOverlay?.length) return [];

  const map: Record<string, string> = {
    screenShake: "fx-shake",
    hardShake: "fx-shake-hard",
    cameraJolt: "fx-jolt",
    warningFlash: "fx-warning-flash",
    sparks: "fx-sparks",
    debrisPass: "fx-debris",
    signalNoise: "fx-static",
    glitchLines: "fx-glitch-lines",
    blackoutPulse: "fx-blackout",
    beaconPulse: "fx-beacon",
    lightSweep: "fx-light-sweep",
    bloodDrip: "fx-blood",
    dustSweep: "fx-dust",
    frostEdge: "fx-frost",
    heavyVignette: "fx-vignette-heavy",
    longFade: "fx-long-fade",
    grainRise: "fx-grain",
    eyeGlow: "fx-eye-glow",
    questionPulse: "fx-question-pulse",
    decisionFlash: "fx-decision-flash",
    softPulse: "fx-soft-pulse",
    shadowDrift: "fx-shadow-drift",
    timeSlow: "fx-time-slow",
    edgeBlur: "fx-edge-blur",
    blinkShadow: "fx-blink-shadow",
    glitchBreath: "fx-glitch-breath",
    planetZoomHard: "fx-planet-zoom-hard",
    fadeToBlack: "fx-blackout"
  };

  return fxOverlay.map((k) => map[k]).filter(Boolean);
}

export default function CinematicBackground({
  theme = "crash_base",
  camera = "default",
  fxOverlay,
  text
}: Props) {
  const overlays = [...mapOverlayFx(fxOverlay), ...keywordFx(text)];

  return (
    <div className={`cinematic-bg theme-${theme} cam-${camera}`}>
  <div className="stars-layer stars-1" />
  <div className="stars-layer stars-2" />
  <div className="nebula" />
  <div className="planet" />
  <div className="meteor meteor-1" />
  <div className="meteor meteor-2" />
  <div className="fog" />
  <div className="vignette" />

  {overlays.map((cls, i) => (
    <div key={`${cls}-${i}`} className={`fx-layer ${cls}`} />
  ))}
</div>

  );
}
