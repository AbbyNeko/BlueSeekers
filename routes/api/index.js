const router = require("express").Router();
const axios = require("axios");
const SavedJobs = require("../../models/SavedJob");
const SavedSearches = require("../../models/JobSearch");
const SavedJobsController = require("../../controllers/SavedJobsController");
const JobSearchController = require("../../controllers/JobSearchController");


//searching for job postings using Github jobs API
function getJobResults(req, res) {

    let url = "https://jobs.github.com/positions.json?";

    console.log(`request filters - ${req.params.filters}`)
    let filters = JSON.parse(req.params.filters);

    if(filters.jobTitle) {
        url+= "description="+filters.jobTitle;
    }

    if(filters.jobType === "Full Time") {
        url+= "&full_time=true";
    } else if(filters.jobType) {
        url+= "&type="+filters.jobType;
    }

    if(filters.location) {
        url += "&location="+filters.location;
    }

    /*if(filters.datePosted) {
        url += "&created_at="+req.params.datePosted;
    }*/

    console.log(`api url - ${url}`);

    axios.get(url)
        .then((response) => {
            res.json(response.data);
        })
        .catch(error => {
            console.log(`error - ${error}`);
        });

}

// Matches with "/api/jobs"
router.route("/jobs/:filters")
      .get(getJobResults);

router.route("/savedJobs")
      .get(SavedJobsController.findAll)
      .post(SavedJobsController.create)
      .delete(SavedJobsController.remove);

router.route("/savedJobSearch")
      .get(JobSearchController.findAll)
      .post(JobSearchController.create)
      .delete(JobSearchController.remove);

module.exports = router;
