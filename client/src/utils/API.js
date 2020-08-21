import axios from "axios";

export default {
  // Gets all saved jobs for user
  getSavedJobs: function(userId) {
    return axios.get("/api/savedJobs/"+userId);
  },
  // Gets the book with the given id
  searchJobs: function(filters) {
    return axios.get("/api/jobs/");
  },
  // Deletes the book with the given id
  deleteSavedJob: function(userId, jobId) {
    return axios.delete("/api/savedJobs/" + userId + "/"+ jobId);
  },
  // Saves a book to the database
  saveJob: function(jobData) {
    return axios.post("/api/savedJobs", jobData);
  }
};
