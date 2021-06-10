import React, { useEffect, useState } from 'react';
import ReactVote from 'react-vote';
import API from '../../utils/API';

const VotingMech = (props) => {

    const [dateVotes, setDateVotes] = useState({});
    const [locationVotes, setLocationVotes] = useState({});
    const [activityVotes, setActivityVotes] = useState({});
    const [transportVotes, setTransportVotes] = useState({});


    const dateData = {
        title: "Vote for your preffered dates", // Title of vote
        items: [ // Array of vote options
            {
                title: props.dates, // Title of option
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
                title: props.location_options, // Title of option
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
                title: props.activity_options, // Title of option
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
                title: props.transport_options, // Title of option
            },
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: false, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }
    useEffect(() => {
        // API.setVote(
        //     {
        //         voteData: dateData,
        //         locationData: LocationData,
        //         activityData: activityData,
        //         transportData: transportData,
        //         trip: props.tripId
        //     }
        // )
        //     .then(res => console.log(res.data))
        
    }, [])

    function onUpvoteDate(data, diff) {
        console.log(data)
        API.setVote(
            {
                voteData: data,
                trip: props.tripId
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteLocation(data, diff) {
        console.log(data)
        API.setVote(
            {
                locationData: data,
                trip: props.tripId
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteActivity(data, diff) {
        console.log(data)
        API.setVote(
            {
                activityData: data,
                trip: props.tripId
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteTransport(data, diff) {
        console.log(data)
        API.setVote(
            {
                transportData: data,
                trip: props.tripId
            }
        )
            .then(res => console.log(res.data))
    }

    function onClose(data){
        console.log(data)
    }

    return (
        <div>
            <ReactVote data={dateData} onUpvote={onUpvoteDate} onClose={onClose} isAdmin={true}/>
            <ReactVote data={LocationData} onUpvote={onUpvoteLocation} onClose={onClose}/>
            <ReactVote data={activityData} onUpvote={onUpvoteActivity} onClose={onClose}/>
            <ReactVote data={transportData} onUpvote={onUpvoteTransport} onClose={onClose}/>
        </div>
    )
}

export default VotingMech