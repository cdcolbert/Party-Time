import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import LandingPage from "./pages/landingPage";
import Nav from './components/NavBar';
import MyTrips from './pages/myTrips';
import SpecificTrip from './pages/specificTrip';
import StartNewTrip from './pages/startNewTrip';
import { UserContext } from './utils/UserContext';


function App() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    email: "",
    auth0Id: ""
});

  return (
    <div className="wrapper">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/allTrips/">
              <MyTrips />
            </Route>
            <Route path="/startNewTrip">
              <StartNewTrip />
            </Route>
            <Route path="/myTrips/:id">
              <SpecificTrip />
            </Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
