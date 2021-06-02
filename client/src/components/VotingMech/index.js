import React from 'react';
import ReactVote from 'react-vote';

const VotingMech = (props) => {

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

    function onUpvote(data, diff) {
        console.log(diff);
    }

    function onClose(data){
        console.log(data)
    }

    return (
        <div>
            <ReactVote data={dateData} onUpvote={onUpvote} onClose={onClose} isAdmin={true}/>
            <ReactVote data={LocationData} onUpvote={onUpvote} onClose={onClose}/>
            <ReactVote data={activityData} onUpvote={onUpvote} onClose={onClose}/>
            <ReactVote data={transportData} onUpvote={onUpvote} onClose={onClose}/>
        </div>
    )
}

export default VotingMech