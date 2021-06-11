import React, { useContext, useEffect, useState } from 'react';
import ReactVote from 'react-vote';
import API from '../../utils/API';
import { TripContext } from '../../utils/TripContext';
import { UserContext } from '../../utils/UserContext';

const VotingMech = (props) => {

    const { currentTrip } = useContext(TripContext);
    const { currentUser } = useContext(UserContext);

    function onCreateDate(data){
        API.setVote(
            {
                voteData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteDate(data, diff) {
        setDateVotes(data);
        console.log(data)
        API.setVote(
            {
                voteData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
            console.log(`this is dateVotes ${dateVotes.dateVote}`)
    }

    function onResetDate(data) {
        API.setVote(
            {
                voteData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCloseDate(data) {
        API.setVote(
            {
                voteData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCreateLocation(data){
        API.setVote(
            {
                locationData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteLocation(data, diff) {
        console.log(data)
        API.setVote(
            {
                locationData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onResetLocation(data) {
        API.setVote(
            {
                locationData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCloseLocation(data) {
        API.setVote(
            {
                locationData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCreateActivity(data){
        API.setVote(
            {
                activityData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteActivity(data, diff) {
        console.log(data)
        API.setVote(
            {
                activityData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onResetActivity(data) {
        API.setVote(
            {
                activityData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCloseActivity(data) {
        API.setVote(
            {
                activityData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCreateTransport(data){
        API.setVote(
            {
                transportData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onUpvoteTransport(data, diff) {
        console.log(data)
        API.setVote(
            {
                transportData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onResetTransport(data) {
        API.setVote(
            {
                transportData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    function onCloseTransport(data) {
        API.setVote(
            {
                transportData: data,
                trip: currentTrip.id
            }
        )
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <h3>Dates:</h3>
            <h4>You can vote on as many dates as you would like. This were preset by the creator.</h4>
            <ReactVote onCreate={onCreateDate} onUpvote={onUpvoteDate} onClose={onCloseDate} onReset={onResetDate} isAdmin={true} clientId={currentUser.id} />
            <h3>Locations:</h3>
            <h4>You can only vote for one location.</h4>
            <ReactVote onCreate={onCreateLocation} onUpvote={onUpvoteLocation} onClose={onCloseLocation} onReset={onResetLocation} clientId={currentUser.id} />
            <h3>Activities:</h3>
            <h4>You can vote on as many activities as you would like, and even add your own!</h4>
            <ReactVote onCreate={onCreateActivity} onUpvote={onUpvoteActivity} onClose={onCloseActivity} onReset={onResetActivity} clientId={currentUser.id} />
            <h3>Mode of Transport:</h3>
            <h4>You can only vote for one mode of transport.</h4>
            <ReactVote onCreate={onCreateTransport} onUpvote={onUpvoteTransport} onClose={onCloseTransport} onReset={onResetTransport} clientId={currentUser.id} />
        </div>
    )
}

export default VotingMech