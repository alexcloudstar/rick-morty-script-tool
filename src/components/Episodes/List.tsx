import { useEpisodeStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';

const List = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const editedEpisode = useEpisodeStore(state => state.editedId);
  const setEditedEpisode = useEpisodeStore(state => state.setEditedEpisode);
  const removeEpisode = useEpisodeStore(state => state.removeEpisode);

  const onSetEdit = (episodeId: Episode['id']) => setEditedEpisode(episodeId);

  const onRemove = (episodeId: Episode['id']) => removeEpisode(episodeId);

  return (
    <div>
      <h5>Episodes</h5>
      <div className='flex flex-row items-center gap-24 flex-wrap'>
        {episodesStore?.map((episode: Episode) => (
          <div key={episode.id} className='relative'>
            {episode.id === editedEpisode && (
              <div className='absolute top-[-5px] left-[-5px] bg-green-500 w-4 h-4 rounded-full' />
            )}
            <img src='https://placehold.co/600x400' alt='' />
            {episode.title}{' '}
            <Button
              text='Edit'
              onClick={() => onSetEdit(episode.id)}
              scheme='secondary'
            />
            <Button
              text='Remove'
              onClick={() => onRemove(episode.id)}
              scheme='secondary'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
