export type Location = {
  id: string;
  name: string;
};

export type Character = {
  id: string;
  name: string;
};

export type Scene = {
  id: string;
  characters?: Character[];
  location: Location['name'];
  description: string;
  episodeId: string;
};

export type Episode = {
  id: string;
  title: string;
  scenes: Scene[];
};
