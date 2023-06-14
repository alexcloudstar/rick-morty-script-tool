import { useInputStore, useSceneStore } from '../../store';

const Textarea = () => {
  const [value, setValue] = useInputStore(state => [
    state.value,
    state.setValue,
  ]);

  const editedScene = useSceneStore(state => state.editedId);
  const editScene = useSceneStore(state => state.editScene);
  const scenes = useSceneStore(state => state.scenes);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!editedScene) return console.error('No scene selected');

    const scene = scenes?.find(scene => scene.id === editedScene);

    if (!scene) return console.error('No scene found');

    editScene({
      ...scene,
      id: editedScene,
      description: e.target.value,
    });
    setValue(e.target.value);
  };

  return (
    <textarea
      placeholder='Enter scene description'
      className='outline-0 resize-none border border-[#97ce4c]
			h-[50px] w-full p-2 rounded-md my-4
			'
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
