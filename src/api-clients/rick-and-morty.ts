import axios from "axios";

export const DEFAULT_URL = "https://rickandmortyapi.com/api";

export const rickAndMortyClient = (baseUrl = DEFAULT_URL) => {
  const client = axios.create({ baseURL: baseUrl });

  return {
    getLocationByName: (locationName: string) =>
      client.get(`/location?name=${locationName}`),
    getCharactersData: (characterIds: string[]) =>
      client.get(`/character/${characterIds.toString()}`),
    getCharacterByName: (characterName: string) =>
      client.get(`/character?name=${characterName}`),
  };
};
