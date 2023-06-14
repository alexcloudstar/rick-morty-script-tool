import { useQuery } from '@apollo/client/react';
import { GET_LOCATIONS } from '../../../../graphql';
import { useSceneStore } from '../../../../store';
import { Location } from '../../../../types';
import { Dropdown } from '../../../Dropdown';

const Location = () => {
  const editedScene = useSceneStore(state => state.editedId);

  const editScene = useSceneStore(state => state.editScene);
  const scenes = useSceneStore(state => state.scenes);
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
  };

  if (loading) return <p>Loading...</p>;
  const locations: Location[] = data?.locations?.results;

  return (
    <Dropdown
      data={locations}
      onChange={onChange}
      placeholder='Please select location'
    />
  );
};

export default Location;
