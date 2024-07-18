import {useGetLocationByName} from './first-excercise.hooks';

const DEFAULT_LOCATION = 'Earth (C-137)';

export const FirstExcercise = () => {
    const locationData = useGetLocationByName(DEFAULT_LOCATION);


    return (
        <div>
            <p>
            {JSON.stringify(locationData)}
            </p>
        </div>
    )
}