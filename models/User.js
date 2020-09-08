const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    fullName: {
        type:String
    },
    username: {
        type:String
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    password: {
        type:String
    },
    created: { type: Date, required: true, default: Date.now() },
    pushNotifications: {
        type: Boolean, 
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);