import React, {useRef} from "react";



function AdvancedFilters() {

    const datePostedRef = useRef();
    const jobTypeRef = useRef();

  return (

        <li>
            <a className="uk-accordion-title" href="#">Advanced</a>
            <div className="uk-accordion-content">
                
                <h4>Date Posted</h4>
                <input type="date" className="uk-datepicker" ref={datePostedRef}/>

                <h4>Job Type</h4>
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Part-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Full-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Sponsored</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Contract</label>
                </div>

            </div>
        </li>

  );
}

export default AdvancedFilters;
