import React from 'react';
import { Button } from '../Button';
import { useEpisodeStore } from '../../store';

const EpisodeSetup = () => {
  const setEpisode = useEpisodeStore(state => state.setEpisode);

  const onClick = () => {
    setEpisode({
      id: '1',
      title: 'Episode 1',
      scenes: [],
    });
  };

  return <Button text='Add Episode' onClick={onClick} />;
};

export default EpisodeSetup;
