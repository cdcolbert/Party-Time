import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";
import { TripContext } from "../utils/TripContext";


function MyTrips() {

  const { currentUser } = useContext(UserContext);
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

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
        <ul className="accordion" data-accordion>
          {trips.map(trip =>
            <li key={trip.id} className="accordion-item is-active" data-accordion-item>
              <Link className="accordion-title" to={"/myTrips/" + trip.id}>
                {trip.trip_name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  )
}

export default MyTrips;