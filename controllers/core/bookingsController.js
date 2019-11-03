var express = require('express');
var bodyParser = require('body-parser');
var bookingModel = require('../../models/Booking');

module.exports = {
    fetchBookings : (req) => {
        console.log(req.body);
    }
}