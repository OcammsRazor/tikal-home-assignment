import { CELL_SIZE } from "../graph.consts";
import styles from "./scale.module.scss";

type Props = {
  amount: number;
};

export const Scale = ({ amount }: Props) => {
  return (
    <div
      className={styles.scale}
      style={{
        bottom: `${amount * CELL_SIZE}px`,
      }}
    >
      <span className={styles.legend}>{amount}</span>
    </div>
  );
};
