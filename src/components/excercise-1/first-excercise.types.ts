type Location = {
    name: string;
    url: string;
}

export type LocationData = {
    residentsIds: string[],
    name: string;
    dimension: string;
}

export type Character = {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: Location;
    name: string;
    origin: Location;
    species: string;
    status: string;
    url: string;
}