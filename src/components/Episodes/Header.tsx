import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore, useSceneStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';
import { useResetValues } from '../../hooks/useResetValues';

const Header = ({
  id,
  title,
}: {
  id: Episode['id'];
  title: Episode['title'];
}) => {
  const { resetValues } = useResetValues();

  const [editedEpisode, removeEpisode] = useEpisodeStore(state => [
    state.editedId,
    state.setEditedEpisode,
    state.removeEpisode,
  ]);

  const [addScene, setEditedScene] = useSceneStore(state => [
    state.addScene,
    state.setEditedScene,
  ]);

  const onAddScene = (episodeId: Episode['id']) => {
    const id = uuidv4();
    addScene({
      id,
      description: '',
      episodeId,
      location: '',
      characters: [],
    });

    setEditedScene(id);
    resetValues();
  };

  return (
    <div className='flex items-center'>
      {id === editedEpisode && (
        <div className='mr-2 bg-green-500 w-4 h-4 rounded-full' />
      )}
      {title} <Button text='Add scene' onClick={() => onAddScene(id)} />
      <Button text='Remove' onClick={() => removeEpisode(id)} />
    </div>
  );
};

export default Header;
