import { useQuery } from '@apollo/client/react';
import { GET_LOCATIONS } from '../../../../graphql';
import { useSceneStore, useSelectLocation } from '../../../../store';
import { Location } from '../../../../types';
import { Dropdown } from '../../../Dropdown';

const Location = () => {
  const [value, setValue] = useSelectLocation(state => [
    state.value,
    state.setValue,
  ]);

  const [scenes, editScene, editedScene] = useSceneStore(state => [
    state.scenes,
    state.editScene,
    state.editedId,
  ]);

  const { loading, data } = useQuery(GET_LOCATIONS);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editedScene) return console.error('No scene selected');

    const scene = scenes?.find(scene => scene.id === editedScene);

    if (!scene) return console.error('No scene found');

    editScene({
      ...scene,
      id: editedScene,
      location: e.target.value,
    });

    setValue(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  const locations: Location[] = data?.locations?.results;

  return <Dropdown data={locations} onChange={onChange} value={value} />;
};

export default Location;
