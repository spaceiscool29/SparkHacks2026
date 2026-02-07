export type Choice = {
  id: string;
  text: string;
  nextId: string;
};

export type Scene = {
  id: string;
  title: string;
  body: string;
  speaker?: string;
  backgroundImage?: string;
  ambienceAudio?: string;
  theme?: "crash" | "wakeup" | "darkness" | "monster" | "guardian" | "endingSafe" | "endingRisk";
  choices?: Choice[];
  ending?: boolean;
};


export type StoryData = {
  title: string;
  startSceneId: string;
  scenes: Scene[];
};
