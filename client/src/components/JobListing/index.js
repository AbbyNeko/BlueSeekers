import React from "react";

function JobListing(props) {

    return (
        <div className="saved-job" jobId={props.id}>
            <div className="row">

                <div className="col-7 job-details">
                    <p>
                        <strong><a className="savedjob-title" href="#">{props.jobTitle}</a></strong><br/>
                        {props.company}<br/>
                    </p>
                </div>

                <div className="col-5 job-status">
                    <p>
                        {props.location}<br/>
                        {props.jobType}
                    </p>
                    <button>Apply</button>
                    <button>Save</button>
                </div>

            </div>
        </div>
    );
  }


export default JobListing;
