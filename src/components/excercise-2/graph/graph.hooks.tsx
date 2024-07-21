import { useEffect, useState } from "react";
import { CharacterPopularity } from "../second-excercise.types";
import { calculateScaleLevels } from "./graph.methods";

export const useScaleLevels = (popularityData: CharacterPopularity[]) => {
  const [scaleLevels, setScaleLevels] = useState<number[]>([]);

  useEffect(() => {
    if (popularityData.length) {
      const levels = calculateScaleLevels(popularityData);
      setScaleLevels(levels);
    }
  }, [popularityData]);

  return scaleLevels;
};
