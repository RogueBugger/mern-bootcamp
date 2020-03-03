const {userProfileSchema} = require("../schema/index");

userProfileSchema.methods.checkBirthday = function(){
    return this.dateofbirth.toLocaleDateString("en-US") == new Date().toLocaleDateString("en-US");
};

userProfileSchema.static("findByBirthdayDate", function(date, callback){
    this.find({dateofbirth : date}, callback);
});

userProfileSchema.virtual("fullname").get(function(){
    return this.firstname + " " + this.lastname;
});

