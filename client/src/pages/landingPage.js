import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function LandingPage() {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                This is the landing page
                <div>
                    <a href={`/${user.sub}`}>My Trips</a>
                </div>
                <div>
                    <a href="/startNewTrip">Start New Trip</a>
                </div>

            </div>
        )
    )
}

export default LandingPage;