import {useFindLeastPopularCharacter, useGetLocationByName} from './first-excercise.hooks';
import texts from './first-excercise.texts.json';

const LOCATION_NAME = 'Earth (C-137)';

export const FirstExcercise = () => {
    const locationData = useGetLocationByName(LOCATION_NAME);
    const leastPopular = useFindLeastPopularCharacter(locationData?.residentsIds);

    return (
        <div>
            <h3>{texts.title}</h3>
            <div>
                table should be here
            </div>
        </div>
    )
}