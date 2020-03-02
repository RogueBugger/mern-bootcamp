const {userProfileSchema} = require("../schema/index");

userProfileSchema.methods.getIfTodayIsBirthday = function(){
    return this.dateofbirth == Date.now;
};

userProfileSchema.static("findByBirthdayDate", function(callback){
    this.find({dateofbirth : Date.now});
});

userProfileSchema.virtual("fullname").get(function(){
    return this.firstname + " " + this.lastname;
});