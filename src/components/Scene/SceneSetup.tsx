import { Textarea } from '..';
import { Location } from './components';
import { Characters } from './components/Characters';

const SceneSetup = () => {
  return (
    <div className='flex flex-col items-start my-5'>
      <div className='flex gap-3'>
        <Location />
        <Characters />
      </div>
      <Textarea />
    </div>
  );
};

export default SceneSetup;
