import { useInputStore, useSelectCharacter, useSelectLocation } from '../store';

export const useResetValues = () => {
  const setLocationValue = useSelectLocation(state => state.setValue);
  const setCharactersDropdownValue = useSelectCharacter(
    state => state.setValue
  );
  const setInputValueStore = useInputStore(state => state.setValue);

  const resetValues = () => {
    setLocationValue('Please select location');
    setCharactersDropdownValue('Please select characters');
    setInputValueStore('');
  };

  return {
    resetValues,
  };
};
