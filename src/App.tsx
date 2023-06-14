import { EpisodesList, SceneSetup } from './components';
import EpisodeSetup from './components/Episodes/Setup';

function App() {
  return (
    <main className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>Rick & Morty Script Tool</h1>

      {/* <SceneSetup /> */}
      <EpisodeSetup />
      <EpisodesList />
    </main>
  );
}

export default App;
