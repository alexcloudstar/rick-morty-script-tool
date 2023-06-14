import { useSceneStore } from '../../store';
import { Episode } from '../../types';
import { Button } from '../Button';
import { v4 as uuidv4 } from 'uuid';

const SceneList = ({ episodeId }: { episodeId: Episode['id'] }) => {
  const [scenes, setEditedScene, removeScene, removeCharacter, editedScene] =
    useSceneStore(state => [
      state.scenes,
      state.setEditedScene,
      state.removeScene,
      state.removeCharacter,
      state.editedId,
    ]);

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
            onClick={() => setEditedScene(scene.id)}
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
