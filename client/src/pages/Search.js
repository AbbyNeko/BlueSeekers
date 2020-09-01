import React, { useRef, useState } from "react";
import CenterNav from "../components/CenterNav";
import AdvancedFilters from "../components/AdvancedFilters";
import SavedSearchList from "../components/SavedSearchList";

const JobSearch = () => {

    const jobTitleRef = useRef();
    const locationRef = useRef();

    const [searchResults, setResults] = useState([]);

    return (
      <div>
      <CenterNav/>

        <div className="container">

                <div className="row">
                  <div className="col-lg-12">
                    <a className="devseekers-logo center-logo" href="/"><span className="dev-part">Dev</span>Seekers</a>
                  </div>
                </div>
          
          <div className="row">
                <div className="col-lg-12 home-page">
                    <form className="job-search-form col-lg-6">
                        <input type="text" ref={jobTitleRef} name="job-title" className="job-title-input" placeholder="Job Title"/>
                        <input type="text" ref={locationRef} name="location" className="location-input" placeholder="Location"/>
                        <input type="submit" name="job-search-btn" value="Search"/>
                    </form>

                <ul className="accordion col-lg-4 col-md-10" uk-accordion="multiple:true">
                  <AdvancedFilters/>
                  <SavedSearchList/>
                </ul>
                
              </div>
          </div>

        </div>

      </div>
    );
  }


export default JobSearch;
