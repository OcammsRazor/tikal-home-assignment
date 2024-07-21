import { Graph } from "./graph/Graph";
import { useGetCharacterPopularityByNames } from "./second-excercise.hooks";
import texts from "./second-excercise.texts.json";

const CHARCTER_NAMES = [
  "Abradolf Lincler",
  "Arcade Alien",
  "Morty Smith",
  "Birdperson",
  "Mr. Meeseeks",
];

export const SecondExcercise = () => {
  const popularityData = useGetCharacterPopularityByNames(CHARCTER_NAMES);

  return (
    <div>
      <h3>{texts.title}</h3>
      <h4>{texts.subtitle}</h4>
      <Graph popularityData={popularityData} />
    </div>
  );
};
