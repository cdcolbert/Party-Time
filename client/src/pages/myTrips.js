import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

function MyTrips() {
    const { user, isAuthenticated } = useAuth0();
    const [usersTrips, setUsersTrips] = useState({});

    // useEffect(() => {
    //     API.getUser(user)
    //       .then(res => setUsersTrips(res.data))
    //       .then(`this is trip ${trip}`)
    //       .catch(err => console.log(err));
    //   })

    return (
        isAuthenticated && (
        <div>
            This is my trips page
            <h1>{user.sub}</h1>
            <div>
                <a href="/myTrips/1">Taco Tuesday</a>
            </div>
        </div>
        )
    )
}

export default MyTrips;