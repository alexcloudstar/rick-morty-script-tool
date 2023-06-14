import { EpisodesList, SceneSetup } from './components';
import EpisodeSetup from './components/Episodes/Setup';
import { useEpisodeStore } from './store';

function App() {
  const episodesStore = useEpisodeStore(state => state.episodes);

  return (
    <main className='h-full flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>Rick & Morty Script Tool</h1>
      <EpisodeSetup />
      {episodesStore?.length ? (
        <>
          <SceneSetup />
          <EpisodesList />
        </>
      ) : null}
    </main>
  );
}

export default App;
