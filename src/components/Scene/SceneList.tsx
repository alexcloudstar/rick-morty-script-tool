import {
  useEpisodeStore,
  useInputStore,
  useSceneStore,
  useSelectLocation,
} from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';
import { v4 as uuidv4 } from 'uuid';

const SceneList = ({ episodeId }: { episodeId: Episode['id'] }) => {
  const [setValue] = useInputStore(state => [state.setValue]);
  const [setEditedEpisode] = useEpisodeStore(state => [state.setEditedEpisode]);
  const [setLocationValue] = useSelectLocation(state => [state.setValue]);

  const [scenes, setEditedScene, removeScene, removeCharacter, editedScene] =
    useSceneStore(state => [
      state.scenes,
      state.setEditedScene,
      state.removeScene,
      state.removeCharacter,
      state.editedId,
    ]);

  const onSetEditedScene = (sceneId: string) => {
    const findedScene = scenes?.find(scene => scene.id === sceneId);

    setEditedScene(sceneId);
    setEditedEpisode(episodeId);
    setValue(findedScene?.description || '');
    setLocationValue(findedScene?.location || '');
  };

  return scenes
    ?.filter(scene => scene.episodeId === episodeId)
    .map((scene, index) => (
      <div key={uuidv4()}>
        <div className='flex items-center'>
          {scene.id === editedScene && (
            <div className='mr-2 bg-green-500 w-4 h-4 rounded-full' />
          )}
          <h5>Scene {index + 1}</h5>
          <Button
            text='Edit scene'
            onClick={() => onSetEditedScene(scene.id)}
            scheme='secondary'
          />
          <Button
            text='Remove scene'
            onClick={() => removeScene(scene.id)}
            scheme='secondary'
          />
        </div>
        {scene.location && <p>Location: {scene.location}</p>}
        {scene.characters?.length ? (
          <p>
            Characters:{' '}
            {scene.characters.map(char => (
              <>
                {char.name}
                <button
                  className='text-red-500 font-bold text-2xl mx-2'
                  onClick={() => removeCharacter(char.id)}
                >
                  x
                </button>
              </>
            ))}
          </p>
        ) : null}
        {scene.description && <p>Description: {scene.description}</p>}
      </div>
    ));
};

export default SceneList;
