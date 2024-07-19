import { CharacterPopularity } from "../../second-excercise.types";
import styles from "./bar.module.scss";

type Props = {
  data: CharacterPopularity;
  index: number;
  color: string;
};

export const Bar = ({ data, index, color }: Props) => {
  return (
    <>
      <div
        className={styles.bar}
        style={{
          height: `${data.popularity * 5}px`,
          left: `${index * 100}px`,
          backgroundColor: color,
        }}
      >
        <p
          className={styles.legend}
          style={{ marginTop: `${data.popularity * 5}px` }}
        >
          {data.name}
        </p>
      </div>
    </>
  );
};
