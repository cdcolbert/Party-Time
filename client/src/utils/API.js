import axios from "axios";

export default {
  // Gets the trip with the given id
  getTrips: function(userId) {
    return axios.get("/api/trips/" + userId);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id)
  },
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  },
  findOrCreate: function(userData) {
    return axios.post("/api/users/", userData)
  },
  getSpecificTrip: function(tripId) {
    return axios.get("/api/specificTrips/" + tripId)
  },
};
