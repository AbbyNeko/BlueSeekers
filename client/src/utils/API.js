import axios from "axios";

export default {
  // Gets all saved jobs for user
  getSavedJobs: function(userId) {
    return axios.get("/api/savedJobs/"+userId);
  },
  // Gets all saved job searches for user
  getSavedSearches: function(userId) {
    return axios.get("/api/savedJobSearch/"+userId);
  },
  // delete saved job search
  deleteSavedSearches: function(id) {
    return axios.delete("/api/savedJobSearch/"+id);
  },
  // create saved job search
  createSavedSearch: function(filters) {
    return axios.post("/api/savedJobSearch/", filters);
  },
  // Deletes the book with the given id
  deleteSavedJob: function(userId, jobId) {
    return axios.delete("/api/savedJobs/" + userId + "/"+ jobId);
  },
  // Gets the book with the given id
  searchJobs: function(filters) {
    return axios.get("/api/jobs/",  {
      params: filters
    });
  },
  // Saves a book to the database
  saveJob: function(jobData) {
    return axios.post("/api/savedJobs", jobData);
  },
  // delete saved job search
  getSkillProfile: function(userId) {
    return axios.get("/users/skillProfiles/"+userId);
  },
  //get user 
  getUser: function(userId) {
    return axios.get("/users/"+userId);
  },
  //create user 
  createUser: function(userData) {
    return axios.post("/users/register", userData);
  },
  //login user 
  loginUser: function(userId) {
    return axios.delete("/users/login"+userId);
  },
  //logout user 
  logoutUser: function(userId) {
    return axios.delete("/users/logout"+userId);
  }
};
