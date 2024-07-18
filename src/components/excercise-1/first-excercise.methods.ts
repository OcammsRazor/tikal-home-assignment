import {DEFAULT_URL} from '../../api-clients/rick-and-morty';

export const stripResidentsToIds = (residentsUrl: string[]) => (residentsUrl.map((resident) => resident.split(`${DEFAULT_URL}/character/`)[1]));