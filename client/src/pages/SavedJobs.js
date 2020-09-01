import React from "react";
import Nav from "../components/Nav";
import SavedJobListing from "../components/SavedJobListing";

function SavedJobs() {

    return (
        <div>
        <Nav/>
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
