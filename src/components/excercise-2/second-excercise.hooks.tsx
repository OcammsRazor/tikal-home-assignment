import { useEffect, useState } from "react";
import { rickAndMortyClient } from "../../api-clients/rick-and-morty";
import { CharacterPopularity } from "./second-excercise.types";
import { getPopularityByCharacters } from "./second-excercise.methods";

const client = rickAndMortyClient();

export const useGetCharacterPopularityByNames = (characterNames: string[]) => {
  const [charactersPopularity, setCharactersPopularity] = useState<
    CharacterPopularity[]
  >([]);

  useEffect(() => {
    const fetchCharactersByNames = async () => {
      try {
        const popularity = await Promise.all(
          characterNames.map(async (name) => {
            const res = await client.getCharacterByName(name);
            return {
              name: name,
              popularity: getPopularityByCharacters(res.data.results),
            };
          })
        );
        setCharactersPopularity(popularity);
      } catch (err) {
        console.error("failed to fetch characters by names: ", err);
      }
    };
    if (characterNames) fetchCharactersByNames();
  }, [characterNames]);

  return charactersPopularity;
};
