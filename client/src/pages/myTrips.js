import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../utils/UserContext";


function MyTrips() {

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const { user, isAuthenticated } = useAuth0();

    // useEffect(() => {
    //     // if (user) {
    //     //     getTrips()
    //     }
    // }, (user))

    // function getTrips() {
    //     API.getTrip(id)
    //     .then(res => setTrip(res.data))
    //     .then(`this is trip ${trip}`)
    //     .catch(err => console.log(err));
    // }
    

    console.log(`this is the current User ${currentUser}`);
    return (
        isAuthenticated && (
            <div>
                <h1>{currentUser.name}</h1>
            This is my trips page
                <div>
                    <a href={`/myTrips/1`}>Taco Tuesday</a>
                </div>
            </div>
        )
    )
}

export default MyTrips;