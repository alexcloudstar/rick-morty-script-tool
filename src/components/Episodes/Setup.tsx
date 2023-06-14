import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore, useSceneStore } from '../../store';
import { Button } from '../Button';
import { useResetValues } from '../../hooks/useResetValues';

const EpisodeSetup = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const setEpisode = useEpisodeStore(state => state.setEpisode);
  const setEditedEpisode = useEpisodeStore(state => state.setEditedEpisode);
  const setEditedScene = useSceneStore(state => state.setEditedScene);
  const { resetValues } = useResetValues();

  const onClick = () => {
    const id = uuidv4();

    setEpisode({
      id,
      title: `Episode ${episodesStore?.length ? episodesStore?.length + 1 : 1}`,
      scenes: [],
    });

    setEditedEpisode(id);
    setEditedScene('');
    resetValues();
  };

  return (
    <>
      <Button text='Add Episode' onClick={onClick} />
    </>
  );
};

export default EpisodeSetup;
