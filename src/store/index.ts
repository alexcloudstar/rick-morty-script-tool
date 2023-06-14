import { create } from 'zustand';
import { Character, Episode, Scene } from '../types';

interface EpisodeStore {
  episodes: Episode[] | null;
  editedId: Episode['id'] | null;
  setEpisode: (episode: Episode) => void;
  setEditedEpisode: (id: Episode['id'] | null) => void;
  removeEpisode: (id: Episode['id']) => void;
}

interface SceneStore {
  scenes: Scene[] | null;
  editedId: Scene['id'] | null;
  addScene: (scene: Scene) => void;
  editScene: (scene: Scene) => void;
  setEditedScene: (id: Scene['id'] | null) => void;
  removeScene: (id: Scene['id']) => void;
  removeCharacter: (id: Character['id']) => void;
}

export const useEpisodeStore = create<EpisodeStore>(set => ({
  episodes: null,
  editedId: null,
  setEpisode: (episode: Episode) =>
    set(state => ({
      episodes: state.episodes ? [...state.episodes, episode] : [episode],
    })),
  setEditedEpisode: (id: Episode['id'] | null) => set({ editedId: id }),
  removeEpisode: (id: Episode['id']) =>
    set(state => ({
      episodes: state.episodes
        ? state.episodes.filter(episode => episode.id !== id)
        : null,
    })),
}));

export const useSceneStore = create<SceneStore>(set => ({
  scenes: null,
  editedId: null,
  addScene: (scene: Scene) => {
    set(state => ({
      scenes: state.scenes ? [...state.scenes, scene] : [scene],
    }));
  },
  editScene: (scene: Scene) => {
    set(state => ({
      scenes: state.scenes
        ? state.scenes.map(s => (s.id === scene.id ? scene : s))
        : null,
    }));
  },
  setEditedScene: (id: Scene['id'] | null) => set({ editedId: id }),
  removeScene: (id: Scene['id']) => {
    set(state => ({
      scenes: state.scenes
        ? state.scenes.filter(scene => scene.id !== id)
        : null,
    }));
  },
  removeCharacter: (id: Character['id']) => {
    set(state => {
      if (!state.scenes || !state.editedId) return;
      const scenes = state.scenes.map(scene => {
        if (scene.id === state.editedId) {
          return {
            ...scene,
            characters: scene.characters
              ? scene.characters.filter(character => character.id !== id)
              : null,
          };
        }
        return scene;
      });
      return { scenes };
    });
  },
}));
