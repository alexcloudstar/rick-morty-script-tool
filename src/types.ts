export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: unknown[];
  url: string;
  // created: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'unknown' | 'Genderless';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Scene = {
  id: string;
  characters?: Character;
  location: string;
  test?: string;
  description: string;
  episodeId: string;
};

export type Episode = {
  id: string;
  title: string;
  scenes: Scene[];
};
