export type Choice = {
  text: string;
  nextId: string;
  effects?: Record<string, number | boolean>;
};

export type StoryNode = {
  id: string;
  title: string;
  text: string;
  choices?: Choice[];
  ending?: boolean;
};

export type StoryData = {
  startId: string;
  nodes: StoryNode[];
};
