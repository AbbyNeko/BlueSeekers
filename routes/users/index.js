const passport = require("passport");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const SkillProfile = require("../../models/SkillProfile"); 
const axios = require("axios");   
var isAuthenticated = require("../../config/middleware/isAuthenticated");

//gets skill results based keyword being typed
function getSkillResults(req, res) {

  let url= "https://trendyskills.com/service?key="+process.env.TRENDING_SKILLS_KEY;

  if(req.params.skillName) {
    url += "q=keywords&like="+req.params.skillName
  };

  axios.get(url)
  .then((response) => {
      res.json(response.data.keywords);
  })
  .catch(error => {
      console.log(`error - ${error}`);
  });

}

router.route("/register", function(req, res) {
  console.log("registering user");

  //Do password validation here before attempting to register user, such as checking for password length, captial letters, special characters, etc.

  User.register(
    new User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      });
    }
  );
});

router.route("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.route("/logout", function(req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.route("/", function(req, res) {
  console.log("available username");
  if (req.query.username) {
    User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.route("/authorized", isAuthenticated, function(req, res) {
  res.json(req.user);
});

router.route("/skillProfiles")
      .get(getSkillResults);


module.exports = router;