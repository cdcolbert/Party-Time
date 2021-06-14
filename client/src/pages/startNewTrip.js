import React, { useContext, useState } from "react";
import AddFriends from "../components/addFriends";
import DayVote from "../components/DayVote";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import { UserContext } from "../utils/UserContext";


function StartNewTrip(props) {
    const { currentUser } = useContext(UserContext);
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {

        event.preventDefault();
        console.log(formObject.trip_name)

        if (formObject.trip_name) {
            API.saveTrip({
                trip_name: formObject.trip_name
            })
                .then(res => addAssociation(res.data.id))
        }
    };

    function addAssociation(newTripId) {
        API.addAssociation({
            trip_id: newTripId,
            user_id: currentUser.id,
            admin: true
        })
            .then(res => console.log(res.data))
            .then(setFormObject({
                trip_name: ""
            }))
            .then(console.log(`this is the form object after reset ${formObject.trip_name}`))
    }

    return (

        <div className="row">
            <div className="columns large-6">
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="trip_name"
                        placeholder="Trip Name"
                    />
                    <FormBtn
                        //disabled={!(formObject.trip_name && formObject.date_range)}
                        onClick={handleFormSubmit}
                    >
                        Create Trip
                    </FormBtn>
                </form>
            </div>
        </div>
    )
}

export default StartNewTrip;