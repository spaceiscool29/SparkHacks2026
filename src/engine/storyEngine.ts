import type { StoryData, Scene } from "./types";

/**
 * Returns one scene by id.
 */
export function getScene(data: StoryData, id: string): Scene | undefined {
  return data.scenes.find((scene) => scene.id === id);
}

/**
 * Safe helper to move to next scene from a choice.
 * (Optional now, useful later)
 */
export function getNextScene(
  data: StoryData,
  currentSceneId: string,
  choiceId: string
): Scene | undefined {
  const current = getScene(data, currentSceneId);
  if (!current || !current.choices) return undefined;

  const choice = current.choices.find((c) => c.id === choiceId);
  if (!choice) return undefined;

  return getScene(data, choice.nextId);
}

/**
 * Optional validator for debugging broken links in story.json.
 * Returns a list of missing scene IDs referenced by choices.
 */
export function validateStoryLinks(data: StoryData): string[] {
  const sceneIds = new Set(data.scenes.map((s) => s.id));
  const missing: string[] = [];

  for (const scene of data.scenes) {
    for (const choice of scene.choices ?? []) {
      if (!sceneIds.has(choice.nextId)) {
        missing.push(
          `Scene "${scene.id}" choice "${choice.id}" points to missing nextId "${choice.nextId}"`
        );
      }
    }
  }

  return missing;
}
