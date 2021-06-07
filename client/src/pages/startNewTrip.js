import React, { useState } from "react";
import DayVote from "../components/DayVote";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";


function StartNewTrip(props) {
    const [formObject, setFormObject] = useState({});
    // useEffect(() => {
    //     API.saveTrip(id)
    //       .then(res => saveTrip(res.data))
    //       .catch(err => console.log(err));
    //   })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formObject.trip_name)
        console.log(formObject.location)
        console.log(formObject.activity)
        console.log(formObject.transport)

        if (formObject.location) {
          API.saveTrip({
            trip_name: formObject.trip_name,
            location: formObject.location,
            activity: formObject.activity,
            transport: formObject.transport,
            //date_range: formObject.date_range
          })
        }
      };

    return (
        <div>
            <div>
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="trip_name"
                        placeholder="Trip Name"
                    />
                    <Input
                        onChange={handleInputChange}
                        name="location"
                        placeholder="Potential Locations"
                    />
                    <Input
                        onChange={handleInputChange}
                        name="activity"
                        placeholder="Potential Things To Do"
                    />
                    <Input
                        onChange={handleInputChange}
                        name="transport"
                        placeholder="Potential Transportation"
                    />
                    <DayVote
                        onChange={handleInputChange}
                        name="date_range"
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