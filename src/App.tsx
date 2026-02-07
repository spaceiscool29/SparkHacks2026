import { useMemo, useState } from "react";
import "./App.css";
import storyDataRaw from "./data/story.json";
import { getScene } from "./engine/storyEngine";
import type { StoryData } from "./engine/types";
import CinematicBackground from "./components/CinematicBackground";
import BackgroundAudio from "./components/BackgroundAudio";
import TypewriterText from "./components/TypewriterText";

const storyData: StoryData = storyDataRaw as unknown as StoryData;

type CharacterMode = "none" | "both" | "boyOnly" | "girlOnly" | "fadeGirl" | "fadeBoth";

function getCharacterMode(sceneId: string): CharacterMode {
  if (sceneId === "wake_alone") return "boyOnly";
  if (sceneId === "path_divert_death") return "fadeBoth";
  if (sceneId === "end_bad") return "fadeGirl";
  return "both";
}

function getCamera(sceneId: string): string {
  const sceneCameraMap: Record<string, string> = {
    intro_impact: "shakeClose",
    path_bulkhead: "planetZoomHard",
    path_divert_death: "spinTilt",
    path_transmit_crash: "slowPush",
    wake_alone: "groundStill",
    end_good: "hopeLift",
    end_bad: "fadeOut",
  };
  return sceneCameraMap[sceneId] ?? "default";
}

function CharacterLayer({ sceneId }: { sceneId?: string }) {
  const mode = getCharacterMode(sceneId ?? "");

  const showBoy = mode === "both" || mode === "boyOnly" || mode === "fadeGirl" || mode === "fadeBoth";
  const showGirl = mode === "both" || mode === "girlOnly" || mode === "fadeGirl" || mode === "fadeBoth";

  const boyExtra = mode === "fadeBoth" ? "fade-out" : "";
  const girlExtra =
    mode === "fadeGirl" || mode === "fadeBoth"
      ? "fade-out"
      : mode === "boyOnly"
      ? "hidden"
      : "";

  return (
    <div className="character-layer" aria-hidden="true">
      {showBoy && (
        <div className={`char boy ${boyExtra}`}>
          <div className="helmet" />
          <div className="char-head">
            <span className="eye left" />
            <span className="eye right" />
            <span className="mask" />
          </div>
          <div className="char-body" />
          <div className="char-arm arm-left" />
          <div className="char-arm arm-right" />
          <div className="char-leg leg-left" />
          <div className="char-leg leg-right" />
        </div>
      )}

      {showGirl && (
        <div className={`char girl ${girlExtra}`}>
          <div className="hair girl-hair" />
          <div className="helmet" />
          <div className="char-head">
            <span className="eye left" />
            <span className="eye right" />
            <span className="mask" />
          </div>
          <div className="char-body" />
          <div className="char-arm arm-left" />
          <div className="char-arm arm-right" />
          <div className="char-leg leg-left" />
          <div className="char-leg leg-right" />
        </div>
      )}
    </div>
  );
}

function App() {
  const [currentId, setCurrentId] = useState(storyData.startSceneId);
  const [path, setPath] = useState<string[]>([storyData.startSceneId]);

  const scene = useMemo(() => getScene(storyData, currentId), [currentId]);

  if (!scene) {
    return (
      <div className="app app-shell theme-wakeup">
        <p>Scene not found.</p>
      </div>
    );
  }

  const sceneTheme = scene.theme ?? "crash_base";
  const camera = getCamera(scene.id);

  const handleChoice = (nextId: string) => {
    setCurrentId(nextId);
    setPath((prev) => [...prev, nextId]);
  };

  const restart = () => {
    setCurrentId(storyData.startSceneId);
    setPath([storyData.startSceneId]);
  };

  return (
    <>
      <BackgroundAudio
        audioFile="/krasnoshchok-horror-scary-dark-music-413504.mp3"
        volume={0.3}
        loop={true}
      />

      <div className={`app app-shell theme-${sceneTheme}`}>
        <CinematicBackground theme={sceneTheme} camera={camera} />
        <CharacterLayer sceneId={scene.id} />

        <main className="scene-panel">
          <h1 className="scene-title">{scene.title}</h1>
          {scene.speaker && <h2 className="scene-speaker">{scene.speaker}</h2>}

          {/* typewriter text replaces plain <p>{scene.body}</p> */}
          <TypewriterText text={scene.body ?? ""} speed={20} className="story-body" />

          {!scene.ending && scene.choices?.length ? (
            <div className="choices">
              {scene.choices.map((choice) => (
                <button
                  key={choice.id}
                  className="choice-btn"
                  onClick={() => handleChoice(choice.nextId)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="choices">
              <button className="choice-btn" onClick={restart}>
                Restart Story
              </button>
            </div>
          )}

          <div className="path-text">Path: {path.join(" → ")}</div>
        </main>
      </div>
    </>
  );
}

export default App;
