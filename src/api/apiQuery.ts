import gql from "graphql-tag";

export const getEpisodesQuery = gql`
  query getEpisodesQuery($page: Int!, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
      }
    }
  }
`;

export const getSingleEpisodeQuery = gql`
  query getEpisodesQuery($id: ID!) {
    episode(id: $id) {
      id
      name
      airDate
      characters {
        id
        name
        image
      }
    }
  }
`;

export const getCharactersQuery = gql`
  query getEpisodesQuery($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export const getSingleCharacterQuery = gql`
  query getEpisodesQuery($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
      episode {
        name
        id
      }
    }
  }
`;
