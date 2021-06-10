import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import VotingMech from "../components/VotingMech";
import { TripContext } from "../utils/TripContext";

function SpecificTrip(props) {
    const { currentTrip, setCurrentTrip } = useContext(TripContext);

    const { id } = useParams();

    useEffect(() => {
        console.log(`this is the tripiD ${id}`)
        API.getSpecificTrip(id)
            .then(res => setCurrentTrip(res.data))
            .then(`this is currentTrip ${currentTrip}`)
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <h1>{currentTrip.trip_name}</h1>
            <h3>{currentTrip.date_range}</h3>
            <VotingMech />
        </div>
    )
}

export default SpecificTrip;