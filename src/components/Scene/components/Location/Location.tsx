import { useQuery } from '@apollo/client/react';
import { GET_LOCATIONS } from '../../../../graphql/location';
import { useSceneStore } from '../../../../store';
import { Location } from '../../../../types';

const Location = () => {
  const editedScene = useSceneStore(state => state.editedId);

  const editScene = useSceneStore(state => state.editScene);
  const scenes = useSceneStore(state => state.scenes);
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!editedScene) return console.error('No scene selected');

    const scene = scenes?.find(scene => scene.id === editedScene);
    editScene({
      ...scene,
      id: editedScene,
      episodeId: scene?.episodeId || '',
      location: e.target.value,
      description: scene?.description || '',
    });
  };

  if (loading) return <p>Loading...</p>;
  const locations: Location[] = data?.locations?.results;

  return (
    <div>
      <select className='border border-[#97ce4c] w-1/2' onChange={onChange}>
        {locations?.map((location: Location) => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Location;
