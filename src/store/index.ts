import { create } from 'zustand';
import { Episode } from '../types';

interface EpisodeStore {
  episode: Episode | null;
  setEpisode: (episode: Episode) => void;
}

const useEpisodeStore = create<EpisodeStore>(set => ({
  episode: null,
  setEpisode: (episode: Episode) => set({ episode }),
}));
