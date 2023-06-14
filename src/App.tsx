import { EpisodesList, SceneSetup } from './components';
import EpisodeSetup from './components/Episodes/Setup';
import { useEpisodeStore, useSceneStore } from './store';

function App() {
  const episodesStore = useEpisodeStore(state => state.episodes);
  const scenesStore = useSceneStore(state => state.scenes);

  return (
    <main className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold font-ram text-[#97ce4c] my-7'>
        Rick & Morty Script Tool
      </h1>
      <EpisodeSetup />
      {scenesStore?.length ? <SceneSetup /> : null}
      {episodesStore?.length ? <EpisodesList /> : null}
    </main>
  );
}

export default App;
