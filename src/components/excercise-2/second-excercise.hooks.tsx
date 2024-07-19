import { useEffect, useState } from "react";
import { rickAndMortyClient } from "../../api-clients/rick-and-morty";
import { CharacterPopularity } from "./second-excercise.types";
import { getPopularityByCharacters } from "./second-excercise.methods";

const client = rickAndMortyClient();

export const useGetCharacterPopularityByNames = (characterNames: string[]) => {
  const [characters, setCharacters] = useState<CharacterPopularity[]>([]);

  useEffect(() => {
    const fetchCharactersByNames = async () => {
      try {
        const result = characterNames.map(async (name) => {
          const res = await client.getCharacterByName(name);
          console.log(res.data.results);
        });
      } catch (err) {
        console.error("failed to fetch characters by names: ", err);
      }
    };
    if (characterNames) fetchCharactersByNames();
  }, [characterNames]);

  return characters;
};
