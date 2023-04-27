var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Elliott Bullard" });
});

router.get("/login", function(req, res){
  res.render('login', { title: "Login" });
})

router.get("/postvideo", function(req, res){
  res.render('postvideo', { title: "Post Video" });
})

router.get("/profile", function(req, res){
  res.render('profile', { title: "Profile" });
})

router.get("/registration", function(req, res){
  res.render('registration', { title: "Registration" });
})

router.get("/viewpost", function(req, res){
  res.render('viewpost', { title: "View Post" });
})

router.get("/index", function(req, res){
  res.render('index', { title: "Index" });
})

module.exports = router;