import React, { useContext, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from "../utils/UserContext";
import API from "../utils/API";
import { Link } from "react-router-dom";
import HomepageHeader from "../components/HomepageHeader";
import HowItWorks from "../components/HowItWorks";
import Planners from "../components/Planners";


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
    if (isAuthenticated) {
        return (
            isAuthenticated && (
                <container>
                    <h1 className="user-name">Welcome back, {currentUser.name}</h1>
                    <div class="primary button-group hollow">
                        <a class="button secondary"><Link to="/allTrips/">My Trips</Link></a>
                        <a class="button"><Link to="/startNewTrip">Start New Trip</Link></a>
                    </div>
                </container>
            )
        )
    }
    return (
        <div>
            <HomepageHeader />
            <HowItWorks />
            <Planners />
        </div>)
}

export default LandingPage;