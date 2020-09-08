const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Passport
require("dotenv").config();
const session = require("express-session");
const passport = require("./config/passport");
const { Router } = require('express');
app.use(session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/authmongoose", {useNewUrlParser: true});

app.listen(PORT, function() {
    console.log(`App is now listening on PORT ${PORT}`);
})