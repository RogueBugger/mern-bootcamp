const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const userProfileSchema = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    dateofbirth : {
        type : Date,
        default : Date.now
    },
    mobileNo : {
        type : Number
    }
});

module.exports.userProfileSchema = userProfileSchema;
require("../methods/index");

const User = mongoose.model("User", userProfileSchema);

module.exports.User = User;
