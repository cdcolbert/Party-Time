import React from "react";
import MyTrips from "../components/MyTrips";

function LandingPage() {
    return (
        <div>
            This is the landing page
            <div>
                <a href="/myTrips">My Trips</a>
            </div>
            <div>
            <a href="/startNewTrip">Start New Trip</a>
            </div>

        </div>
    )
}

export default LandingPage;