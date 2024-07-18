import {useFindLeastPopularCharacter, useGetLocationByName} from './first-excercise.hooks';

const LOCATION_NAME = 'Earth (C-137)';

export const FirstExcercise = () => {
    const locationData = useGetLocationByName(LOCATION_NAME);
    const leastPopular = useFindLeastPopularCharacter(locationData?.residentsIds);

    return (
        <div>
            <p>
            {JSON.stringify(leastPopular)}
            </p>
        </div>
    )
}