import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import LandingPage from "./pages/landingPage";
import Nav from './components/NavBar';
import MyTrips from './pages/myTrips';
import SpecificTrip from './pages/specificTrip';
import StartNewTrip from './pages/startNewTrip';
import { UserContext } from './utils/UserContext';


function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="wrapper">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/allTrips/" component={MyTrips} />
            <Route path="/startNewTrip" component={StartNewTrip} />
            <Route path="/myTrips/:id" component={SpecificTrip} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
