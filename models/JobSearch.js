const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const JobSearch = new Schema({
    jobTitle: {
        type: String
    },
    location: {
        type: String
    },
    radius: {
        type: Number
    },
    datePosted: {
        type: Date
    },
    jobType: {
        type: String
    },
    userId: {
        type: Number
    }
});

module.exports = mongoose.model('JobSearch', JobSearch);