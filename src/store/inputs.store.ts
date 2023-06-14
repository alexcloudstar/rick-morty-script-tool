import { create } from 'zustand';

export type InputState = {
  value: string;
  setValue: (value: string) => void;
};

export const useInputStore = create<InputState>(set => ({
  value: '',
  setValue: (value: string) => set({ value }),
}));

export const useSelectLocation = create<InputState>(set => ({
  value: 'selectValue',
  setValue: (value: string) => set({ value }),
}));

export const useSelectCharacter = create<InputState>(set => ({
  value: 'selectValue',
  setValue: (value: string) => set({ value }),
}));
