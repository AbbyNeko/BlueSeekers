import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import SavedJobs from "./pages/SavedJobs";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";

function App() {
  return (

     <Router>
        <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={Register} />
                <Route exact path="/saved-jobs" component={SavedJobs} />
                <Route exact path="/my-account" component={MyAccount} />
                <Route component={NoMatch} />
        </Switch>
     </Router>

  );
}

export default App;
