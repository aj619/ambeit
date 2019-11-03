var express = require('express');
var router = express.Router();
var userController = require('../controllers/core/usersController');

router.get('/', userController.fetch);

module.exports = router;
