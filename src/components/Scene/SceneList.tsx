import { useSceneStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';

const SceneList = ({ episodeId }: { episodeId: Episode['id'] }) => {
  const scenes = useSceneStore(state => state.scenes);
  const onSetEditedScene = useSceneStore(state => state.setEditedScene);
  const onRemoveScene = useSceneStore(state => state.removeScene);
  const editedScene = useSceneStore(state => state.editedId);

  return scenes
    ?.filter(scene => scene.episodeId === episodeId)
    .map((scene, index) => (
      <div key={scene.id}>
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
            onClick={() => onRemoveScene(scene.id)}
            scheme='secondary'
          />
        </div>
        {scene.location && <p>Location:{scene.location}</p>}
        {scene.description && <p>Description: {scene.description}</p>}
      </div>
    ));
};

export default SceneList;