import React, {useRef} from "react";
import API from "../../utils/API";
import SavedSearchInput from "../SavedSearchInput";

function AdvancedFilters(props) {

  const savedSearchRef = useRef();
  let savedSearchComp = '';

  if(props.isLoggedIn) {
    savedSearchComp = <SavedSearchInput savedSearchRef={savedSearchRef}/>;
  }

  return (

        <li>
            <a className="uk-accordion-title" href="#">Advanced</a>
            <div className="uk-accordion-content">
                
                <h4>Date Posted</h4>
                <input type="date" className="uk-datepicker" ref={props.datePosted}/>

                <h4>Job Type</h4>
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={props.jobType} value="Part Time"/>Part-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={props.jobType} value="Full Time"/>Full-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={props.jobType} value="Sponsored"/>Sponsored</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={props.jobType} value="Contract"/>Contract</label>
                </div>
                
                {savedSearchComp}

            </div>
        </li>

  );
}

export default AdvancedFilters;
