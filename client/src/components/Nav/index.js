import React from "react";

function Nav(props) {


  return (
    <nav className="navbar navbar-expand-lg row">
      <a className="devseekers-logo col-8" href="/"><span className="dev-part">Dev</span>Seekers</a>
      <ul className="uk-nav col-4 nav-items">
        {props.isLoggedIn
          ? <div><li><a href="/saved-jobs">Saved Jobs</a></li><li><a href="/my-account">My Account</a></li></div>
          : <div><li><a href="/login">Register/Login</a></li></div>
        }
      </ul>
    </nav>
  );
}

export default Nav;
