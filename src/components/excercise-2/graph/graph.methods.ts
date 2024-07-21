import { CharacterPopularity } from "../second-excercise.types";
import { SCALE_THRESHOLD } from "./graph.consts";

export const calculateScaleLevels = (
  popularityData: CharacterPopularity[]
): number[] => {
  const highestValue = findMostPopularValue(popularityData);
  const scaleLevels = [
    ...Array(Math.floor(highestValue / SCALE_THRESHOLD)),
  ].map((_, index) => (index + 1) * SCALE_THRESHOLD);

  // add a threshold above highest value
  scaleLevels.push(scaleLevels[scaleLevels.length - 1] + 10);

  return scaleLevels;
};

const findMostPopularValue = (popularityData: CharacterPopularity[]) =>
  Math.max(...popularityData.map((character) => character.popularity));
