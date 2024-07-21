import { CharacterPopularity } from "../second-excercise.types";
import { COLOR_MAP } from "./graph.consts";
import { Bar } from "./bar/Bar";
import { Scale } from "./scale/Scale";
import styles from "./graph.module.scss";
import { useScaleLevels } from "./graph.hooks";

type Props = {
  popularityData: CharacterPopularity[];
};

export const Graph = ({ popularityData }: Props) => {
  const scaleLevels = useScaleLevels(popularityData);

  return (
    <div className={styles.graph}>
      {scaleLevels.map((level) => (
        <Scale amount={level} key={`graph-lvls-${level}`} />
      ))}
      {popularityData.map((character, index) => (
        <Bar
          key={`${character}-${index}`}
          data={character}
          index={index}
          color={COLOR_MAP[index]}
        />
      ))}
    </div>
  );
};
