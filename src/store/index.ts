import { create } from 'zustand';
import { Episode } from '../types';

interface EpisodeStore {
  episodes: Episode[] | null;
  editedId: Episode['id'] | null;
  setEpisode: (episode: Episode) => void;
  setEditedEpisode: (id: Episode['id'] | null) => void;
}

export const useEpisodeStore = create<EpisodeStore>(set => ({
  episodes: null,
  editedId: null,
  setEpisode: (episode: Episode) =>
    set(state => ({
      episodes: state.episodes ? [...state.episodes, episode] : [episode],
    })),
  setEditedEpisode: (id: Episode['id'] | null) => set({ editedId: id }),
}));
