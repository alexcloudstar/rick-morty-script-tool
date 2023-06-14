import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore, useSceneStore } from '../../store';
import { Button } from '../Button';
import { useResetValues } from '../../hooks/useResetValues';

const EpisodeSetup = () => {
  const [episodes, setEpisode, setEditedEpisode] = useEpisodeStore(state => [
    state.episodes,
    state.setEpisode,
    state.setEditedEpisode,
  ]);

  const setEditedScene = useSceneStore(state => state.setEditedScene);

  const { resetValues } = useResetValues();

  const onClick = () => {
    const id = uuidv4();

    setEpisode({
      id,
      title: `Episode ${episodes?.length ? episodes?.length + 1 : 1}`,
      scenes: [],
    });

    setEditedEpisode(id);
    setEditedScene('');
    resetValues();
  };

  return (
    <div className='my-5'>
      <Button text='Add Episode' onClick={onClick} />
    </div>
  );
};

export default EpisodeSetup;
