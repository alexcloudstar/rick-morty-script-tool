import { useQuery } from '@apollo/client/react';
import { GET_CHARACTERS } from '../../../../graphql';
import { useSceneStore } from '../../../../store';
import { Character } from '../../../../types';
import { Dropdown } from '../../../Dropdown';
import { Button } from '../../../Button';
import { v4 as uuidv4 } from 'uuid';

const Characters = () => {
  const editedScene = useSceneStore(state => state.editedId);
  const onRemoveCharacter = useSceneStore(state => state.removeCharacter);
  const editScene = useSceneStore(state => state.editScene);
  const scenes = useSceneStore(state => state.scenes);
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editedScene) return console.error('No scene selected');

    const scene = scenes?.find(scene => scene.id === editedScene);
    editScene({
      ...scene,
      id: editedScene,
      episodeId: scene?.episodeId || '',
      location: scene?.location || '',
      characters: scene?.characters
        ? [...scene.characters, { id: uuidv4(), name: e.target.value }]
        : [{ id: uuidv4(), name: e.target.value }],
      description: scene?.description || '',
    });
  };

  const onRemove = (id: string) => onRemoveCharacter(id);

  if (loading) return <p>Loading...</p>;
  const characters: Character[] = data?.characters?.results;

  return (
    <>
      <Dropdown data={characters} onChange={onChange} />
    </>
  );
};

export default Characters;
