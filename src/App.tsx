import { useMemo, useState } from "react";
import "./App.css";
import storyDataRaw from "./data/story.json";
import { applyEffects, getNode } from "./engine/storyEngine";
import type { StoryData } from "./engine/types";


const storyData = storyDataRaw as StoryData;

function App() {
  const [currentId, setCurrentId] = useState(storyData.startId);
  const [state, setState] = useState<Record<string, number | boolean>>({});
  const [path, setPath] = useState<string[]>([storyData.startId]);

  const node = useMemo(() => getNode(storyData, currentId), [currentId]);

  if (!node) {
    return <div className="app"><p>Story node not found.</p></div>;
  }

  const handleChoice = (choiceText: string, nextId: string, effects?: Record<string, number | boolean>) => {
    setState((prev) => applyEffects(prev, effects));
    setCurrentId(nextId);
    setPath((prev) => [...prev, nextId]);
    console.log("Choice:", choiceText, "State:", state);
  };

  const restart = () => {
    setCurrentId(storyData.startId);
    setState({});
    setPath([storyData.startId]);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>{node.title}</h1>
        <p>{node.text}</p>

        {!node.ending && node.choices && (
          <div className="choices">
            {node.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice.text, choice.nextId, choice.effects)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}

        {node.ending && (
          <div className="ending">
            <button onClick={restart}>Restart Story</button>
            <p className="path">Path: {path.join(" → ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
