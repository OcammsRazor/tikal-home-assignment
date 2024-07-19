import { CharacterPopularity } from "../second-excercise.types";
import { COLOR_MAP } from "./graph.consts";
import { Bar } from "./bar/Bar";
import styles from "./graph.module.scss";

type Props = {
  popularityData: CharacterPopularity[];
};

export const Graph = ({ popularityData }: Props) => {
  return (
    <div className={styles.graph}>
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
