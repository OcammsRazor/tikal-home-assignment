import { DEFAULT_URL } from "../../api-clients/rick-and-morty";
import { Character } from "../../api-clients/rick-and-morty.types";

export const stripResidentsToIds = (residentsUrl: string[]) =>
  residentsUrl.map(
    (resident) => resident.split(`${DEFAULT_URL}/character/`)[1]
  );

export const sortCharactersByName = (characters: Character[]) =>
  characters.sort((character, nextCharacter) =>
    character.name.localeCompare(nextCharacter.name)
  );

export const findLeastPopularCharacter = (characters: Character[]) =>
  characters.reduce((prevCharacter, character) =>
    prevCharacter.episode.length > character.episode.length
      ? character
      : prevCharacter
  );
