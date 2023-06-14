import { create } from 'zustand';
import { Episode } from '../types';

interface EpisodeStore {
  episodes: Episode[] | null;
  setEpisode: (episode: Episode) => void;
}

export const useEpisodeStore = create<EpisodeStore>(set => ({
  episodes: null,
  setEpisode: (episode: Episode) =>
    set(state => ({
      episodes: state.episodes ? [...state.episodes, episode] : [episode],
    })),
}));
