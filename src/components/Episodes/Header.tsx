import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore, useSceneStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';

const Header = ({
  id,
  title,
}: {
  id: Episode['id'];
  title: Episode['title'];
}) => {
  const editedEpisode = useEpisodeStore(state => state.editedId);
  const setEditedEpisode = useEpisodeStore(state => state.setEditedEpisode);
  const removeEpisode = useEpisodeStore(state => state.removeEpisode);
  const addScene = useSceneStore(state => state.addScene);
  const setEditedScene = useSceneStore(state => state.setEditedScene);

  const onAddScene = (episodeId: Episode['id']) => {
    const id = uuidv4();
    addScene({
      id,
      description: '',
      episodeId,
      location: '',
    });

    setEditedScene(id);
  };

  return (
    <div className='flex items-center'>
      {id === editedEpisode && (
        <div className='mr-2 bg-green-500 w-4 h-4 rounded-full' />
      )}
      {title} <Button text='Add scene' onClick={() => onAddScene(id)} />
      <Button text='Edit' onClick={() => setEditedEpisode(id)} />
      <Button text='Remove' onClick={() => removeEpisode(id)} />
    </div>
  );
};

export default Header;
