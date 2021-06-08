import React, { useContext, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from "../utils/UserContext";
import API from "../utils/API";

function LandingPage() {
    const { user, isAuthenticated } = useAuth0();

    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    useEffect(() => {
        if (user) {
            saveUser();
        }
    }, [user])

    function saveUser() {
        API.findOrCreate({
            name: user.name,
            email: user.email,
            authOId: user.sub
        })
            .then(res => setCurrentUser(res.data[0]))
            .then(`the user has been saved`)
            .catch(err => console.log(err));
    }

    return (
        isAuthenticated && (
            <div>
                <div className="user-name">{user.name}</div>
                <div>
                    <a href={`/allTrips/`}>My Trips</a>
                </div>
                <div>
                    <a href="/startNewTrip">Start New Trip</a>
                </div>

            </div>
        )
    )
}

export default LandingPage;