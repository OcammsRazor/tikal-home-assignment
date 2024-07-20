import { Character } from "../../api-clients/rick-and-morty.types";

export const getPopularityByCharacters = (character: Character[]) =>
  character.reduce((popularity, { episode }) => popularity + episode.length, 0);
