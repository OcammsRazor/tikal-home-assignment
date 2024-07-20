import { CharacterPopularity } from "../second-excercise.types";
import { COLOR_MAP, SCALE_LEVELS } from "./graph.consts";
import { Bar } from "./bar/Bar";
import { Scale } from "./scale/Scale";
import styles from "./graph.module.scss";

type Props = {
  popularityData: CharacterPopularity[];
};

export const Graph = ({ popularityData }: Props) => {
  return (
    <div className={styles.graph}>
      {SCALE_LEVELS.map((level) => (
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
