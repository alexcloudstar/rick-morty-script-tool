import { useEpisodeStore } from '../../store';
import { Episode } from '../../types';

const List = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);

  return (
    <div>
      <h5>Episodes</h5>
      <div className='flex flex-row items-center gap-24 flex-wrap'>
        {episodesStore?.map((episode: Episode) => (
          <div key={episode.id}>
            <img src='https://placehold.co/600x400' alt='' />
            {episode.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
