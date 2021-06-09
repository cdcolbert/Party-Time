import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import VotingMech from "../components/VotingMech";

function SpecificTrip(props) {
    const [trip, setTrip] = useState({});
    
    const {id} = useParams();

    useEffect(() => {
        API.getSpecificTrip({id: id})
        .then(res => console.log(res.data))
        .then(`this is trip ${trip}`)
        .catch(err => console.log(err));
    }, [])

    console.log(`this is the tripiD ${id}`)

    return (
        <div>
            <h1>{trip.trip_name}</h1>
            <h3>{trip.date_range}</h3>
            <VotingMech location_options={trip.location} activity_options={trip.activity} transport_options={trip.transport} dates={trip.possible_dates}/>
        </div>
    )
}

export default SpecificTrip;