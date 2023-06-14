import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore } from '../../store';
import { Button } from '../Button';

const EpisodeSetup = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const setEpisode = useEpisodeStore(state => state.setEpisode);
  const setEditedEpisode = useEpisodeStore(state => state.setEditedEpisode);

  const onClick = () => {
    const id = uuidv4();

    setEpisode({
      id,
      title: `Episode ${episodesStore?.length ? episodesStore?.length + 1 : 1}`,
      scenes: [],
    });

    setEditedEpisode(id);
  };

  return (
    <>
      <Button text='Add Episode' onClick={onClick} />
    </>
  );
};

export default EpisodeSetup;
