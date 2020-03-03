const {User} = require("../schema/index");
const HttpStatus = require("http-status-codes");

//creating new user
module.exports.createUser = (req, res) =>{
    const newUser = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        address : req.body.address,
        dataofbirth : req.body.dateofbirth,
        mobileNo : req.body.mobileNo
    });
    console.info(newUser);
    //saving the user in the database
    newUser.save(function(err, user){
        if(err)
            return res
                .status(httpStatus.NOT_FOUND)
                .json({message: "user cannot be created"});
        res.status(HttpStatus.OK).json({user});
    }); 

};

module.exports.getTodayIsBirthday = (req, res) =>{
    User.findOne({ _id: "5e5e6948643270085d7e06bb"}).exec((err, user) => {
        if (err)
          return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: "User not defined" });
        res.status(HttpStatus.OK).json(user.checkBirthday());
      });
};


module.exports.getByBirthday = (req, res) =>{
    User.findByBirthdayDate(new Date().toLocaleDateString("en-US"),(err, data) =>{
        if(err)
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json({message : "Birthday mismatch"});
        res.status(HttpStatus.OK).json(data);
    });
};

module.exports.getFullName = (req, res) =>{
    User.findById({_id : "5e5e6948643270085d7e06bb"}).exec((err, user) =>{
        if(err)
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json({message : "mismatch id"});
        res.status(HttpStatus.OK).json(user.fullname);
    })
}