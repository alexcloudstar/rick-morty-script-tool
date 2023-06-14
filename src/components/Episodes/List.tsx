import { useEpisodeStore, useSceneStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';
import SceneList from '../Scene/SceneList';
import { v4 as uuidv4 } from 'uuid';

const List = () => {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const editedEpisode = useEpisodeStore(state => state.editedId);
  const setEditedEpisode = useEpisodeStore(state => state.setEditedEpisode);
  const removeEpisode = useEpisodeStore(state => state.removeEpisode);
  const addScene = useSceneStore(state => state.addScene);
  const setEditedScene = useSceneStore(state => state.setEditedScene);

  const onSetEdit = (episodeId: Episode['id']) => setEditedEpisode(episodeId);
  const onRemove = (episodeId: Episode['id']) => removeEpisode(episodeId);
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
            <Button text='Add scene' onClick={() => onAddScene(episode.id)} />
            <Button text='Edit' onClick={() => onSetEdit(episode.id)} />
            <Button text='Remove' onClick={() => onRemove(episode.id)} />
            <SceneList episodeId={episode.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
