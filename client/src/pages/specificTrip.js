import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import DayVote from "../components/DayVote";
import VotingMech from "../components/VotingMech";


function SpecificTrip(props) {
    const [trip, setTrip] = useState({});
    
    const {id} = useParams();

    useEffect(() => {
      API.getTrip(id)
        .then(res => setTrip(res.data))
        .then(`this is trip ${trip}`)
        .catch(err => console.log(err));
    })
  

    return (
        <div>
            <h1>{trip.trip_name}</h1>
            <VotingMech />
            <DayVote />
        </div>
    )
}

export default SpecificTrip;