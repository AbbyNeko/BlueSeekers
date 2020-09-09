import React, {useState} from "react";
import API from "../utils/API";


function Logout() {

        API.logoutUser()
            .then(res => {
                console.log('logged out');
            })
            .catch(err => console.log(err));
    

    return (
        <div className="container">
    
                 <div className="row">
                  <div className="col-lg-12">
                    <a className="devseekers-logo center-logo" href="/"><span className="dev-part">Dev</span>Seekers</a>
                  </div>
                </div>   

                <div className="row login-section">
                    <p>You have been successfully logged out.</p>            
                </div>

        </div>
    );
  }


export default Logout;
