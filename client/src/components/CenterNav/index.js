import React from "react";

function CenterNav(props) {


  return (
    <nav className="navbar navbar-expand-lg row">
      <div className="col-9"></div>
      <ul className="uk-nav col-3 nav-items">
      {props.isLoggedIn
        ? <div><li><a href="/saved-jobs">Saved Jobs</a></li><li><a href="/my-account">My Account</a></li></div>
        : <div><li><a href="/login">Register/Login</a></li></div>
      }
      </ul>
    </nav>
  );
}

export default CenterNav;
