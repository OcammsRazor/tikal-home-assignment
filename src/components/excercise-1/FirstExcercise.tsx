import {
  useFindLeastPopularCharacter,
  useGetLocationByName,
} from "./first-excercise.hooks";
import { TableRow } from "./table-row/TableRow";
import texts from "./first-excercise.texts.json";
import styles from "./first-excercise.module.scss";

const LOCATION_NAME = "Earth (C-137)";

export const FirstExcercise = () => {
  const locationData = useGetLocationByName(LOCATION_NAME);
  const leastPopular = useFindLeastPopularCharacter(locationData?.residentsIds);

  const tableData = {
    name: leastPopular?.name,
    location: `${locationData?.name} & ${locationData?.dimension}`,
    status: leastPopular?.status,
    species: leastPopular?.species,
    gender: leastPopular?.gender,
    popularity: leastPopular?.episode.length,
  };

  return (
    <div className={styles.firstExcercise}>
      <h3>{texts.title}</h3>
      <div className={styles.table}>
        <img src={leastPopular?.image} />
        <div className={styles.tableContent}>
          {texts.tableFields.map((field, index) => (
            <TableRow category={field.title} value={tableData[field.apiKey as keyof typeof tableData]} key={`${field.apiKey}-${index}`}/>
          ))}
        </div>
      </div>
    </div>
  );
};
