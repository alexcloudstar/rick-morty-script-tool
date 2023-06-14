import { useEpisodeStore } from '../../store';
import { Episode } from '../../types';
import SceneList from '../Scene/SceneList';
import Header from './Header';

const List = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);

  return (
    <div>
      <div className='flex flex-row items-start gap-24 flex-wrap'>
        {episodesStore?.map((episode: Episode) => (
          <div key={episode.id} className='relative'>
            <img src='https://placehold.co/600x400' alt='' />
            <Header id={episode.id} title={episode.title} />
            <SceneList episodeId={episode.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
