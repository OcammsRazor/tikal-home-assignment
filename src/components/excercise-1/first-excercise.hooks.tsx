import { useEffect, useState } from "react";
import { LocationData } from "./first-excercise.types";
import {
  findLeastPopularCharacter,
  sortCharactersByName,
  stripResidentsToIds,
} from "./first-excercise.methods";
import { rickAndMortyClient } from "../../api-clients/rick-and-morty";
import { Character } from "../../api-clients/rick-and-morty.types";

const client = rickAndMortyClient();

export const useGetLocationByName = (locationName: string) => {
  const [locationData, setLocationData] = useState<LocationData>();

  useEffect(() => {
    const fetchLocationByName = async () => {
      try {
        const res = await client.getLocationByName(locationName);
        const data = res.data.results[0];
        setLocationData({
          name: data.name,
          residentsIds: stripResidentsToIds(data.residents),
          dimension: data.dimension,
        });
      } catch (err) {
        console.error("failed to fetch locations by name: ", err);
      }
    };
    fetchLocationByName();
  }, []);

  return locationData;
};

export const useFindLeastPopularCharacter = (
  characterIds: string[] | undefined
) => {
  const [leastPopularCharacter, setLeastPopularCharacter] =
    useState<Character>();

  useEffect(() => {
    const fetchLeastPopularCharacter = async () => {
      if (characterIds) {
        try {
          const res = await client.getCharactersData(characterIds);
          const sortedCharacters = sortCharactersByName(res.data);
          setLeastPopularCharacter(findLeastPopularCharacter(sortedCharacters));
        } catch (err) {
          console.error("failed to fetch characters", err);
        }
      }
    };
    fetchLeastPopularCharacter();
  }, [characterIds]);

  return leastPopularCharacter;
};
