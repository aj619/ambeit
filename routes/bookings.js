var express = require('express');
var router = express.Router();
var bookingController = require('../controllers/core/bookingsController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource : bookings');
});

module.exports = router;
