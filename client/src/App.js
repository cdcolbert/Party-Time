import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from "./pages/landingPage";
import Nav from './components/NavBar';
import MyTrips from './pages/myTrips';
import SpecificTrip from './pages/specificTrip';
import StartNewTrip from './pages/startNewTrip';


function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/allTrips/:id">
            <MyTrips />
          </Route>
          <Route path="/startNewTrip">
            <StartNewTrip />
          </Route>
          <Route path="/myTrips/:id">
            <SpecificTrip />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
