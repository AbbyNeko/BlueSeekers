import React, {useState} from "react";
import Nav from "../components/Nav";
import SavedJobListing from "../components/SavedJobListing";
import API from "../utils/API";


function SavedJobs() {

  const [isLoggedIn, setLogin] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  //checks if logged in
  if(!isLoggedIn) {
    API.isLoggedIn()
      .then(res => {
        
        if(res.data.message === "no auth") {
          setLogin(false);
        } else {
          setLogin(true);
        }

      })
      .catch(err => console.log(err));
  }

    return (
        <div>
        <Nav isLoggedIn={isLoggedIn}/>
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
