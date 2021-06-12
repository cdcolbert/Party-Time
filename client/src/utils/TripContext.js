import {createContext} from 'react';

export const TripContext = createContext({
    id: "",
    trip_name: "",
    possible_dates: "",
    location: "",
    activity: "",
    transport: ""
});