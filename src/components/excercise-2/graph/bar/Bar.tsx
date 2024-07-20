import { CharacterPopularity } from "../../second-excercise.types";
import { BAR_DISTANCE, CELL_SIZE } from "../graph.consts";
import styles from "./bar.module.scss";

type Props = {
  data: CharacterPopularity;
  index: number;
  color: string;
};

export const Bar = ({ data, index, color }: Props) => {
  return (
    <div
      className={styles.bar}
      style={{
        height: `${data.popularity * CELL_SIZE}px`,
        left: `${index * BAR_DISTANCE}px`,
        backgroundColor: color,
      }}
    >
      {/* to be removed */}
      <span>{data.popularity}</span>
      <p
        className={styles.legend}
        style={{ marginTop: `${data.popularity * CELL_SIZE}px` }}
      >
        {data.name}
      </p>
    </div>
  );
};
