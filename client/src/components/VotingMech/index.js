import React from 'react';
import ReactVote from 'react-vote';

const VotingMech = () => {

    const reactVoteData = {
        title: "Title of the vote", // Title of vote
        items: [ // Array of vote options
            {
                title: "Option 1", // Title of option
            },
            {
                title: "Option 2", // Title of option
            },
            {
                title: "Option 3", // Title of option
            }
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: false, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }

    const reactLocationData = {
        title: "Title of the vote 2", // Title of vote
        items: [ // Array of vote options
            {
                title: "Option 1", // Title of option
            },
            {
                title: "Option 2", // Title of option
            },
            {
                title: "Option 3", // Title of option
            }
        ],
        closed: false, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
        multiple: false, // Whether voters can choose multiple options
        expansion: true, // Whether voters can add new option
        showTotal: true // Whether to show total votes in result view
    }

    return (
        <div>
            <ReactVote data={reactVoteData} />
            <ReactVote data={reactLocationData} />
        </div>
    )
}

export default VotingMech