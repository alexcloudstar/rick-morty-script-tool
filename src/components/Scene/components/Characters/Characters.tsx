import { useQuery } from '@apollo/client/react';
import { v4 as uuidv4 } from 'uuid';
import { GET_CHARACTERS } from '../../../../graphql';

import { useSceneStore, useSelectCharacter } from '../../../../store';
import { Character } from '../../../../types';
import { Dropdown } from '../../../Dropdown';

const Characters = () => {
  const [value, setValue] = useSelectCharacter(state => [
    state.value,
    state.setValue,
  ]);

  const [scenes, editScene, editedScene] = useSceneStore(state => [
    state.scenes,
    state.editScene,
    state.editedId,
  ]);

  const { loading, data } = useQuery(GET_CHARACTERS);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editedScene) return console.error('No scene selected');

    const scene = scenes?.find(scene => scene.id === editedScene);

    if (!scene) return console.error('No scene found');

    editScene({
      ...scene,
      id: editedScene,
      characters: scene?.characters
        ? [...scene.characters, { id: uuidv4(), name: e.target.value }]
        : [{ id: uuidv4(), name: e.target.value }],
    });

    setValue(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  const characters: Character[] = data?.characters?.results;

  return <Dropdown data={characters} onChange={onChange} value={value} />;
};

export default Characters;
