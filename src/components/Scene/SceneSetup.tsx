import { Textarea } from '..';
import { Location } from './components';
import { Characters } from './components/Characters';

const SceneSetup = () => {
  return (
    <>
      <Location />
      <Characters />
      <Textarea />
    </>
  );
};

export default SceneSetup;
