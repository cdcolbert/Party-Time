import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import LandingPage from "./pages/landingPage";
import Nav from './components/NavBar';
import MyTrips from './pages/myTrips';
import SpecificTrip from './pages/specificTrip';
import StartNewTrip from './pages/startNewTrip';
import { UserContext } from './utils/UserContext';
import { TripContext } from './utils/TripContext';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentTrip, setCurrentTrip] = useState({});

  return (
    <div className="wrapper">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <TripContext.Provider value={{ currentTrip, setCurrentTrip }}>
            <Nav />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/allTrips/" component={MyTrips} />
              <Route path="/startNewTrip" component={StartNewTrip} />
              <Route path="/myTrips/:id" component={SpecificTrip} />
            </Switch>
          </TripContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
