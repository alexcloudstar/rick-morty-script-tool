import { v4 as uuidv4 } from 'uuid';
import { useEpisodeStore } from '../../store';
import { Button } from '../Button';

const EpisodeSetup = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const setEpisode = useEpisodeStore(state => state.setEpisode);

  const onClick = () => {
    setEpisode({
      id: uuidv4(),
      title: `Episode ${episodesStore?.length ? episodesStore?.length + 1 : 1}`,
      scenes: [],
    });
  };

  return <Button text='Add Episode' onClick={onClick} />;
};

export default EpisodeSetup;
