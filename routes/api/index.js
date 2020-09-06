const router = require("express").Router();
const axios = require("axios");

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

// Matches with "/api/books"
router.route("/")
      .get(getJobResults)


module.exports = router;
