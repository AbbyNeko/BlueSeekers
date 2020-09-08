import React from "react";
import API from "../../utils/API";

  // saves job
  function saveJob(bookData) {

    API.saveBook({
        
      })
        .then(res => console.log('saved'))
        .catch(err => console.log(err));
        
  };

function JobListing(props) {

    return (
        <div className="saved-job" key={props.key}>
            <div className="row">

                <div className="col-9 job-details">
                    <p>
                        <strong><a className="savedjob-title" href={props.url}>{props.title}</a></strong><br/>
                        {props.company}<br/>
                    </p>
                </div>

                <div className="col-3 job-status">
                    <p>
                        {props.location}<br/>
                        {props.type}
                    </p>
                    <button>Apply</button>
                    <button onClick={() => saveJob(props)}>Save</button>
                </div>

            </div>
            <hr/>
        </div>
    );
  }


export default JobListing;
