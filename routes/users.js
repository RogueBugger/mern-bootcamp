var express = require('express');
var router = express.Router();
const {createUser} = require("../backend/controllers/index");
const {getTodayIsBirthday} = require("../backend/controllers/index");
const {getByBirthday} = require("../backend/controllers/index");
const {getFullName} = require("../backend/controllers/index");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/add', createUser);
router.post('/isbirthday', getTodayIsBirthday);
router.post('/fullname', getFullName);
router.get('/info', function(req, res, next) {
  res.status(200).json({data: "Welcome to Actyv!!"})
});
module.exports = router;
