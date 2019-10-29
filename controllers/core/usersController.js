var User = require('../../../models/User');
var userController = {
	fetch: (req) => {
		return {
			data: "I am awsome"
		}
	}
}
module.exports = userController;