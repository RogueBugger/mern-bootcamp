var express = require('express');
var router = express.Router();

router.post("/user/add",(req, res, next) =>{
    
    console.info(res.body);
    res.status(200).json({message:"user saved successfully"});
})