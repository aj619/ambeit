var express = require('express');
var router = express.Router();

var homeController = require('../controllers/public/home/homeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = homeController.home(req);
  res.render('index', { title: 'Express', ...data });
});

router.get('/home', function(req, res, next) {
  let data = homeController.home(req);
  console.log("Data received from home controller : ", data)
  res.render('index', { title: 'Express', ...data });
});

module.exports = router;
