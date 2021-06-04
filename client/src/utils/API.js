import axios from "axios";

export default {
  // Gets the trip with the given id
  getTrip: function(id) {
    return axios.get("/api/trips/" + id);
  },
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  }
};
