import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from "./pages/login";
import LandingPage from "./pages/landingPage";
import Nav from './components/NavBar';
import MyTrips from './pages/myTrips';
import SpecificTrip from './pages/specificTrip';
import CreateTrip from "./components/CreateTrip"
import StartNewTrip from './pages/startNewTrip';


function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landingPage">
            <LandingPage />
          </Route>
          <Route exact path="/myTrips">
            <MyTrips />
          </Route>
          <Route path="/startNewTrip">
            <StartNewTrip />
          </Route>
          <Route exact path="/myTrips/:id">
            <SpecificTrip />
          </Route>
          <Route path="/createTrip">
            <CreateTrip />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
