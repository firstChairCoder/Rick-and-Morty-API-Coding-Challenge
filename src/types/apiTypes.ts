/* eslint-disable camelcase */
export interface getEpisodesQueryType {
  episodes: {
    info: dataInfoType;
    results: episodesItemType[];
  };
}
export interface dataInfoType {
  count: number;
  pages: number;
  next: null | number;
  prev: null | number;
}

export interface getSingleEpisodeType {
  episode: {
    id: string;
    name: string;
    air_date: string;
    characters: charactersItemType[];
  };
}

export interface getCharactersQueryType {
  characters: {
    info: dataInfoType;
    results: charactersItemType[];
  };
}

export interface getSingleCharacterType {
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    gender: string;
    status: string;
    episode: episodesItemType[];
  };
}

export interface episodesItemType {
  name: string;
  id: string;
}
export interface charactersItemType {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}
