import React from "react";
import NavBar from "../components/NavBar";
import { Input, TextArea, FormBtn } from "../components/Form";

function startNewTrip() {
    return (
        <div>
            <div>
                <form>
                    <Input
                        //onChange={handleInputChange}
                        name="trip_name"
                        placeholder="Trip Name"
                    />
                    <Input
                        //onChange={handleInputChange}
                        name="location"
                        placeholder="Potential Locations"
                    />
                    <Input
                        //onChange={handleInputChange}
                        name="activity"
                        placeholder="Potential Things To Do"
                    />
                    <Input
                        //onChange={handleInputChange}
                        name="transport"
                        placeholder="Potential Transportation"
                    />
                    <Input
                        //onChange={handleInputChange}
                        name="date_range"
                        placeholder="Date Range (MM/DD/YYYY - MM/DD/YYYY)"
                    />
                    <button
                    //disabled={!(formObject.tripname && formObject.potdates)}
                    //onClick={handleFormSubmit}
                    >
                        Create Trip
              </button>
                </form>
            </div>
        </div>
    )
}

export default startNewTrip;