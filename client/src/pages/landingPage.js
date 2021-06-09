import React, { useContext, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from "../utils/UserContext";
import API from "../utils/API";
import { Link } from "react-router-dom";

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
                <div className="user-name">Welcome back, {currentUser.name}</div>
                <div>
                    <Link to="/allTrips/">My Trips</Link>
                </div>
                <div>
                    <Link to="/startNewTrip">Start New Trip</Link>
                </div>

            </div>
        )
    )
}

export default LandingPage;