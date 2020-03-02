var express = require('express');
var router = express.Router();
const {User} = require("../backend/schema/index");
const httpStatus = require("http-status-codes");
const {createUser} = require("../backend/controllers/index");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
router.post("/add", (req, res) =>{
 res.send("user saved");
 console.info(req.body);
});
*/


router.post('/add', createUser);

router.get('/info', function(req, res, next) {
  res.status(200).json({data: "Welcome to Actyv!!"})
});
module.exports = router;
