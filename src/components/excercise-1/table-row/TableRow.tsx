import styles from "./table-row.module.scss";

type Props = {
  category: string;
  value?: string | number;
  key: string;
};

export const TableRow = ({ category, value, key }: Props) => {
  return (
    <div className={styles.tableRow} key={key}>
      <div className={styles.rowContent}>
        <span className={styles.title}>{category}</span>
        <span className={styles.divider}> | </span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};
