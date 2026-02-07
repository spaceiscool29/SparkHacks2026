import type { StoryData, StoryNode } from "./types";

export function getNode(data: StoryData, id: string): StoryNode | undefined {
  return data.nodes.find((n) => n.id === id);
}

export function applyEffects(
  state: Record<string, number | boolean>,
  effects?: Record<string, number | boolean>
) {
  if (!effects) return state;
  const next = { ...state };

  for (const [key, value] of Object.entries(effects)) {
    if (typeof value === "number") {
      const current = typeof next[key] === "number" ? (next[key] as number) : 0;
      next[key] = current + value;
    } else {
      next[key] = value;
    }
  }

  return next;
}
