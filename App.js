import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, NewAccount, Login } from "./components";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/new-account" exact component={() => <NewAccount />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
