import { create } from 'zustand';
import { Character, Scene } from '../types';

export interface SceneStore {
  scenes: Scene[] | null;
  editedId: Scene['id'] | null;
  addScene: (scene: Scene) => void;
  editScene: (scene: Scene) => void;
  setEditedScene: (id: Scene['id'] | null) => void;
  removeScene: (id: Scene['id']) => void;
  removeCharacter: (id: Character['id']) => void;
}

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
  removeCharacter(id) {
    set(state => ({
      scenes: state.scenes
        ? state.scenes.map(scene => ({
            ...scene,
            characters: scene.characters.filter(
              character => character.id !== id
            ),
          }))
        : null,
    }));
  },
}));
