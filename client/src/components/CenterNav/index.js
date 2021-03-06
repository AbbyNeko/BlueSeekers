import React from "react";

function CenterNav(props) {

  return (
    <nav className="navbar navbar-expand-lg row">
      <div className="col-8"></div>
      
      {props.isLoggedIn
        ? <div className="col-lg-6 col-md-10"><ul className="uk-nav  nav-items"><li><a href="/saved-jobs">Saved Jobs</a></li><li><a href="/my-account">My Account</a></li><li><a href="/logout">Logout</a></li></ul></div>
        : <div className="col-lg-6 col-md-10"><ul className="uk-nav  nav-items"><li><a href="/login">Register/Login</a></li></ul></div>
      }

    </nav>
  );
}

export default CenterNav;
