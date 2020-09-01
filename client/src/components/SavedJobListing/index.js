import React from "react";

function SavedJobListing(props) {

    return (
        <div className="saved-job" jobId={props.id}>
            <div className="row">

                <div className="col-7 saved-job-details">
                    <button className="uk-close-large" type="button" uk-close="true"></button>
                    <p>
                        <strong><a className="savedjob-title" href="#">{props.jobTitle}</a></strong><br/>
                        {props.location}<br/>
                        {props.company}
                    </p>
                </div>

                <div className="col-5 saved-job-status">
                    <p className="saved-job-status"><strong>Status: </strong>{props.status}</p>
                    <button>Apply</button>
                </div>

            </div>
        </div>
    );
  }


export default SavedJobListing;
