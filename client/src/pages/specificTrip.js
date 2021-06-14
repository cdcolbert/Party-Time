import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import VotingMech from "../components/VotingMech";
import { TripContext } from "../utils/TripContext";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";


function SpecificTrip(props) {
    const { currentTrip, setCurrentTrip } = useContext(TripContext);
    const { currentUser } = useContext(UserContext)

    const { id } = useParams();

    useEffect(() => {
        console.log(`this is the tripiD ${id}`)
        API.getSpecificTrip(id)
            .then(res => setCurrentTrip(res.data))
            .then(`this is currentTrip ${currentTrip}`)
            .catch(err => console.log(err));
    }, [])

    console.log(`this is the current trip ${currentTrip.id}`)

    return (
        <div>
            <h1>{currentTrip.trip_name}</h1>
            <h3>{currentTrip.date_range}</h3>
            <Link to={"/myFriends/" + currentTrip.id}>
                Add Friends
            </Link>
            <VotingMech tripId={id} user={currentUser.id} />
        </div>
    )
}

export default SpecificTrip;