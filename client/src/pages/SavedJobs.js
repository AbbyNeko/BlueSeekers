import React from "react";
import Nav from "../components/Nav";
import SavedJobListing from "../components/SavedJobListing";
import API from "../utils/API";

//checks if logged in
function checkIfLoggedIn() {

  API.isLoggedIn()
    .then(res => {
        if(!res.data) {
            res.redirect("/no-match");
        }
    })
    .catch(err => console.log(err));

}

function SavedJobs() {

    return (
        <div>
        <Nav isLoggedIn={checkIfLoggedIn()}/>
          <div className="container">

                <div className="row">
                    <div className="col-12 saved-jobs">
                        <h1>Saved Jobs</h1>

                        <SavedJobListing id="1" jobTitle="Job Title" company="Company Name" location="Location" status="Applied"/>
                        <hr/>

                    </div>
                </div>
                
          </div>
        </div>
    );
  }


export default SavedJobs;
