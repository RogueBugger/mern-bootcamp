const {User} = require("../schema/index");
const httpStatus = require("http-status-codes");

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
        res.status(httpStatus.OK).json({user});
    });

};