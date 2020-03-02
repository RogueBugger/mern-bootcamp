var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/auth/login', (req, res)=>{
  res.render('auth');
});

router.get('/book/add', (req, res)=>{
  res.render('book');
});
router.get("/users/add", (req, res) =>{
  res.render('user');
})

module.exports = router;
