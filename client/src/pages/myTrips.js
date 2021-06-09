import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";


function MyTrips() {

    const { currentUser } = useContext(UserContext);
    const { isAuthenticated } = useAuth0();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getTrips();
    }, [])

    function getTrips() {
        API.getTrips(currentUser.id)
        .then(res => setTrips(res.data.trips))
        .then(`this is trip ${trips[0]}`)
        .catch(err => console.log(err));
    }
    

    console.log(`this is the current User id ${currentUser.id}`);
    console.log(`these are my trips ${trips}`)
    return (
        isAuthenticated && (
            <div>
            {trips.map(trip => 
              <button key={trip.id}>
                <Link to={"/myTrips/" + trip.id}>
                  <strong>
                    {trip.trip_name}
                  </strong>
                </Link>
              </button>
            )}
          </div>
        )
    )
}

export default MyTrips;