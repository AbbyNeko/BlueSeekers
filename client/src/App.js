import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import SavedJobs from "./pages/SavedJobs";
import MyAccount from "./pages/MyAccount";
import NoMatch from "./pages/NoMatch";

function App() {
  return (

     <Router>
        <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/saved-pages" component={SavedJobs} />
                <Route exact path="/my-account" component={MyAccount} />
                <Route component={NoMatch} />
        </Switch>
     </Router>

  );
}

export default App;
