import React, { useRef, useState } from "react";
import CenterNav from "../components/CenterNav";
import AdvancedFilters from "../components/AdvancedFilters";
import SavedSearchList from "../components/SavedSearchList";
import JobListing from "../components/JobListing";
import API from "../utils/API";

const JobSearch = () => {

    const jobTitleRef = useRef();
    const locationRef = useRef();
    const jobTypeRef = useRef();
    const datePostedRef = useRef();

    const [searchResults, setResults] = useState([]);
    const [isLoggedIn, setLogin] = useState(false);
    const [userId, setId] = useState('');

//checks if logged in
if(!isLoggedIn) {
  API.isLoggedIn()
    .then(res => {

      //console.log(res.data);
      
      if(res.data.message === "no auth") {
        setLogin(false);
      } else {
        setLogin(true);
        setId(res.data._id);
      }

    })
    .catch(err => console.log(err));
}

  // search job postings
  function searchJobs(filters) {
    API.searchJobs(JSON.stringify(filters))
      .then(res => setResults(res.data))
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {

      event.preventDefault();
      
      let filters = {};
      filters.jobTitle = jobTitleRef.current.value;
      filters.location = locationRef.current.value;
      filters.jobType = jobTypeRef.current.value;

      searchJobs(filters);
  }

    let listedResults = searchResults.map((result, index) => 
      <JobListing isLoggedIn={isLoggedIn} userId={userId} location={result.location} company={result.company} title={result.title} type={result.type} url={result.url} created_at={result.created_at} key={index}/>
    );


    let savedSearch = '';

    if(isLoggedIn) {
      savedSearch = <SavedSearchList/>;
    }


    return (
      <div>
      <CenterNav isLoggedIn={isLoggedIn}/>

        <div className="container">

                <div className="row">
                  <div className="col-lg-12">
                    <a className="devseekers-logo center-logo" href="/"><span className="dev-part">Dev</span>Seekers</a>
                  </div>
                </div>
          
          <div className="row">
                <div className="col-lg-12 home-page">
                    <form className="job-search-form col-lg-6 col-md-9 col-sm-12" onSubmit={handleFormSubmit}>
                        <input type="text" ref={jobTitleRef} name="job-title" className="job-title-input" placeholder="Job Title"/>
                        <input type="text" ref={locationRef} name="location" className="location-input" placeholder="Location"/>
                        <input type="submit" name="job-search-btn" value="Search"/>

                        <ul className="accordion col-lg-8 col-sm-10" uk-accordion="multiple:true">
                          <AdvancedFilters jobType={jobTypeRef} jobTitleRef={jobTypeRef} locationRef={locationRef} isLoggedIn={isLoggedIn}/>
                          {savedSearch}
                        </ul>

                </form>

                <div className="results">

                  {listedResults}

                </div>

              </div>
          </div>

        </div>

      </div>
    );
  }


export default JobSearch;
