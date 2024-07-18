import { useEffect, useState } from "react";
import { Character, LocationData } from "./first-excercise.types";
import {
  findLeastPopularCharacter,
  sortCharactersByName,
  stripResidentsToIds,
} from "./first-excercise.methods";
import { rickAndMortyClient } from "../../api-clients/rick-and-morty";

const client = rickAndMortyClient();

export const useGetLocationByName = (locationName: string) => {
  const [locationData, setLocationData] = useState<LocationData>();

  useEffect(() => {
    const fetchLocationByName = async () => {
      const res = await client.getLocationByName(locationName);
      const data = res.data.results[0];
      setLocationData({
        name: data.name,
        residentsIds: stripResidentsToIds(data.residents),
        dimension: data.dimension,
      });
    };
    fetchLocationByName();
  }, []);

  return locationData;
};

export const useFindLeastPopularCharacter = (
  characterIds: string[] | undefined
) => {
  const [leastPopularCharacter, setLeastPopularCharacter] = useState<Character>();

  useEffect(() => {
    const fetchLeastPopularCharacter = async () => {
      if (characterIds) {
        const res = await client.getCharactersData(characterIds);
        const sortedCharacters = sortCharactersByName(res.data);
        setLeastPopularCharacter(findLeastPopularCharacter(sortedCharacters));
      }
    };
    fetchLeastPopularCharacter();
  }, [characterIds]);

  return leastPopularCharacter;
};
