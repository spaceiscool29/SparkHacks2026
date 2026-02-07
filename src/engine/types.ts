export type Choice = {
  id: string;
  text: string;
  nextId: string;
};

export type SceneFx = {
  ambient?: string[];
  overlay?: string[];
};

export type Scene = {
  id: string;
  title: string;
  speaker?: string;
  body?: string;
  theme?: string;
  choices?: Choice[];
  ending?: boolean;
  fx?: SceneFx;
};

export type StoryData = {
  title: string;
  startSceneId: string;
  scenes: Scene[];
};
