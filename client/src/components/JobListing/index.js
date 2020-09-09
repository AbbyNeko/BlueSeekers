import React, {useState} from "react";
import API from "../../utils/API";
import moment from "moment";

  // saves job
  function saveJob(jobData) {

    API.saveJob(jobData)
        .then(res => console.log('saved'))
        .catch(err => console.log(err));
        
  };

function JobListing(props) {
    let saveBtn = '';

    if(props.isLoggedIn) {
        saveBtn = <button className="save-job-btn" onClick={() => saveJob(props)}>Save</button>;
    }

    return (
        <div className="saved-job" key={props.key}>
            <div className="row">

                <div className="col-9 job-details">
                    <p>
                        <strong><a className="savedjob-title" href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></strong><br/>
                        {props.company}<br/>
                        {moment(props.created_at).format('MMMM Do YYYY')}
                    </p>
                </div>

                <div className="col-3 job-status">
                    <p>
                        {props.location}<br/>
                        {props.type}
                    </p>
                    <button className="apply-job-btn" onClick={() => window.open(props.url)}>Apply</button>
                    {saveBtn}
                </div>

            </div>
            <hr/>
        </div>
    );
  }


export default JobListing;
