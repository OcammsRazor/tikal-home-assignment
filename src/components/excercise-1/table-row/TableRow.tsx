import styles from "./table-row.module.scss";

type Props = {
  category: string;
  value?: string | number;
};

export const TableRow = ({ category, value }: Props) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.rowContent}>
        <span className={styles.title}>{category}</span>
        <span className={styles.divider}> | </span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};
