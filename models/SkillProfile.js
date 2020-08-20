const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const SkillProfile = new Schema({
    skillTitle: {
        type: String
    },
    userId: {
        type: Number
    }
});

module.exports = mongoose.model('SkillProfile', SkillProfile);