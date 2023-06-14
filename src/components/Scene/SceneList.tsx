import { useSceneStore } from '../../store';
import { Episode, Scene } from '../../types';
import { Button } from '../Button';

const SceneList = ({ episodeId }: { episodeId: Episode['id'] }) => {
  const scenes = useSceneStore(state => state.scenes);
  const onSetEditedScene = useSceneStore(state => state.setEditedScene);
  const editedScene = useSceneStore(state => state.editedId);

  const onEditScene = (sceneId: Scene['id']) => onSetEditedScene(sceneId);

  console.log(scenes);

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
            onClick={() => onEditScene(scene.id)}
            scheme='secondary'
          />
        </div>
        <span>{scene.location}</span>
        <span>{scene.description}</span>
      </div>
    ));
};

export default SceneList;
