import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function MyTrips() {

    const [userData, setUserData] = useState({});
    const { user, isAuthenticated } = useAuth0();

    const { id } = useParams();

    useEffect(() => {
        API.getUser(id)
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(`this is the id ${id}`);
    return (
        isAuthenticated && (
            <div>
                {user.name}
            This is my trips page
                <div>
                    <a href={`/myTrips/1`}>Taco Tuesday</a>
                </div>
            </div>
        )
    )
}

export default MyTrips;