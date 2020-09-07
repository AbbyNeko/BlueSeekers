const router = require("express").Router();
const axios = require("axios");
const SavedJobs = require("../../models/SavedJob");
const SavedSearches = require("../../models/JobSearch");


//searching for job postings using Github jobs API
function getJobResults(req, res) {

    let url = "https://jobs.github.com/positions.json?search=";

    if(req.params.filters.jobTitle) {
        url+= req.params.filters.jobTitle;
    }

    if(req.params.filters.jobType === "Full-Time") {
        url+= "&full_time=true";
    } else if(req.params.filters.jobType) {
        url+= "+"+req.params.filters.jobType;
    }

    if(req.params.filters.location) {
        url += "&location="+req.params.filters.location;
    }

    if(req.params.filters.datePosted) {
        url += "&created_at="+req.params.filters.datePosted;
    }

    console.log(`api url - ${url}`);

    axios.get(url)
        .then((response) => {
            res.json(response.data.items);
        })
        .catch(error => {
            console.log(`error - ${error}`);
        });

}

//get saved jobs by id
function getSavedJobsById(req, res) {

}

//save job
function saveJob(req, res) {

}

//delete saved job
function deleteSavedJob(req, res) {

}

//get saved job search
function getSavedJobSearch(req, res) {

}

//create saved job search
function createSavedJobSearch(req, res) {

}

//delete saved job search
function deleteSavedJobSearch(req, res) {

}

// Matches with "/api/jobs"
router.route("/jobs")
      .get(getJobResults);

router.route("/savedJobs")
      .get(getSavedJobById)
      .post(saveJob)
      .delete(deleteSavedJob);

router.route("/savedJobSearch")
      .get(getSavedJobSearch)
      .post(createSavedJobSearch)
      .delete(deleteSavedJobSearch);

module.exports = router;
