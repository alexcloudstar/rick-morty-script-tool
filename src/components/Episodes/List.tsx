import { useEpisodeStore } from '../../store';
import { Episode } from '../../types';
import SceneList from '../Scene/SceneList';
import Header from './Header';

const List = () => {
  const episodes = useEpisodeStore(state => state.episodes);

  return (
    <>
      <div className='flex flex-row items-start gap-24 flex-wrap mx-5'>
        {episodes?.map((episode: Episode) => (
          <div key={episode.id} className='relative'>
            <Header id={episode.id} title={episode.title} />
            <SceneList episodeId={episode.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
