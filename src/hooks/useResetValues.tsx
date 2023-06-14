import { useInputStore, useSelectCharacter, useSelectLocation } from '../store';

export const useResetValues = () => {
  const [_location, setLocationValue] = useSelectLocation(state => [
    state.value,
    state.setValue,
  ]);
  const [_characters, setCharactersDropdownValue] = useSelectCharacter(
    state => [_, state.setValue]
  );

  const [_input, setInputValueStore] = useInputStore(state => [
    state.value,
    state.setValue,
  ]);

  const resetValues = () => {
    setLocationValue('Please select location');
    setCharactersDropdownValue('Please select characters');
    setInputValueStore('');
  };

  return {
    resetValues,
  };
};
