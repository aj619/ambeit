var Campaign = require('../../../models/Campaign');
var Product = require('../../../models/Product');
var Booking = require('../../../models/Booking');
var User = require('../../../models/User');
var homeController = {
    home: (req) => {
        return {
            data: "I am awsome"
        }
    }
}
module.exports = homeController;