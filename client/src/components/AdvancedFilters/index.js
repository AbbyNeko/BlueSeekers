import React, {useRef} from "react";



function AdvancedFilters() {

    const datePostedRef = useRef();
    const locationRadiusRef = useRef();
    const jobTypeRef = useRef();

    let currentRadiusValue = 10;

    function populateRadiusValue() {

        currentRadiusValue = locationRadiusRef.current.value;
    
    }

  return (

    <ul className="accordion col-lg-4 col-md-10" uk-accordion="multiple:true">
        <li>
            <a className="uk-accordion-title" href="#">Advanced</a>
            <div className="uk-accordion-content">
            <form className="filter-form">
                
                <h4>Location Radius</h4>
                <input name="location-radius" ref={locationRadiusRef} className="uk-range" id="locationRadiusInput" type="range" min="10" max="100" step="10" onInput={populateRadiusValue}/>
  <span>Within <output name="radiusOutputName" id="radiusOutputId">{currentRadiusValue}</output> mi</span>

                <h4>Date Posted</h4>
                <select className="uk-select" ref={datePostedRef}>
                    <option>Select an option</option>
                    <option>Within the last 3 days</option>
                    <option>Within the last week</option>
                    <option>Within the last month</option>
                </select>

                <h4>Job Type</h4>
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Part-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Full-Time</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Sponsored</label>
                    <label><input className="uk-checkbox" type="checkbox" name="job-type" ref={jobTypeRef}/>Contract</label>
                </div>

            </form>
            </div>
        </li>
    </ul>

  );
}

export default AdvancedFilters;
