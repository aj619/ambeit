var dbModels = require('../../models/Index');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// var UserModel = require('../../models/User');

var userController = {
	fetch: async (req, res, next) => {
		try {
			let limit = parseInt(req.query.limit);
			let offset = parseInt(req.query.offset);
			let query = req.query.q;
			console.log('query : ', req.query)
			limit = limit !== undefined && limit !== null && !isNaN(limit) ? limit : 10;
			offset = offset !== undefined && offset !== null && !isNaN(offset) ? offset : 0;
			let users = await dbModels.User.fetch(limit, offset, query);
			return res.status(200).json({ status: 200, data: users.data, message: "Succesfully Users Retrieved" });
		} catch(e) {
			console.log(e);
			return res.status(500).json({ status: 500, data: e, message: "Cannot fetch users" });
		}
	}, createOrUpdate: async (req, res, next) => {

		

	}, delete: async (req, res, next) => {

	}
}
module.exports = userController;