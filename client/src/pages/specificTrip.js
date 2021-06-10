import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import VotingMech from "../components/VotingMech";

function SpecificTrip(props) {
    const [trip, setTrip] = useState({});
    const [dateVote, setDateVote] = useState({});

    const { id } = useParams();

    const dateData = {
        title: "Vote for your preffered dates", // Title of vote
        items: [ // Array of vote options
            {
                title: trip.possible_dates, // Title of option
            },
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: true, // Whether voters can choose multiple options
        expansion: false, // Whether voters can add new option
        showTotal: true, // Whether to show total votes in result view,
    }

    const LocationData = {
        title: "Vote for your preffered location", // Title of vote
        items: [ // Array of vote options
            {
                title: trip.location, // Title of option
            },
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: false, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }

    const activityData = {
        title: "Vote for your preffered activities", // Title of vote
        items: [ // Array of vote options
            {
                title: trip.activity, // Title of option
            },
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: true, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }

    const transportData = {
        title: "Vote for your preffered mode of transport", // Title of vote
        items: [ // Array of vote options
            {
                title: trip.transport, // Title of option
            },
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: false, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }

    useEffect(() => {
        console.log(`this is the tripiD ${id}`)
        API.getSpecificTrip(id)
            .then(res => setTrip(res.data))
            .then(`this is trip ${trip}`)
            .then(setVote())
            .catch(err => console.log(err));
    }, [])

    function setVote() {
        API.setVote(
            {
                voteData: dateData,
                locationData: LocationData,
                activityData: activityData,
                transportData: transportData,
                trip: id
            }
        )
            .then(res => console.log(res.data))
    }


    return (
        <div>
            <h1>{trip.trip_name}</h1>
            <h3>{trip.date_range}</h3>
            <VotingMech tripId={id} location_options={trip.location} activity_options={trip.activity} transport_options={trip.transport} dates={trip.possible_dates} />
        </div>
    )
}

export default SpecificTrip;