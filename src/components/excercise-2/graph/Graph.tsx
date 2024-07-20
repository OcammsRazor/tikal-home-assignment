import { CharacterPopularity } from "../second-excercise.types";
import { COLOR_MAP } from "./graph.consts";
import { Bar } from "./bar/Bar";
import { Scale } from "./scale/Scale";
import styles from "./graph.module.scss";

type Props = {
  popularityData: CharacterPopularity[];
};

const scaleLevels = [10, 20, 30, 40, 50, 60, 70];

export const Graph = ({ popularityData }: Props) => {
  return (
    <div className={styles.graph}>
      {scaleLevels.map((level, index) => (
        <Scale amount={level} key={`graph-lvls-${level}-${index}`} />
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
