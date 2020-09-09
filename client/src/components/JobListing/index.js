import React from "react";
import API from "../../utils/API";

  // saves job
  function saveJob(jobData) {

    API.saveJob(jobData)
        .then(res => console.log('saved'))
        .catch(err => console.log(err));
        
  };

function JobListing(props) {

    return (
        <div className="saved-job" key={props.key}>
            <div className="row">

                <div className="col-9 job-details">
                    <p>
                        <strong><a className="savedjob-title" href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></strong><br/>
                        {props.company}<br/>
                        {props.created_at}
                    </p>
                </div>

                <div className="col-3 job-status">
                    <p>
                        {props.location}<br/>
                        {props.type}
                    </p>
                    <button onClick={() => window.open(props.url)}>Apply</button>
                    <button onClick={() => saveJob(props)}>Save</button>
                </div>

            </div>
            <hr/>
        </div>
    );
  }


export default JobListing;
