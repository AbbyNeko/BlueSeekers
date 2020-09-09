const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const SavedJob = new Schema({
    jobTitle: {
        type: String
    },
    companyName: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
    userId: {
        type: Number
    }
});

module.exports = mongoose.model('SavedJob', SavedJob);