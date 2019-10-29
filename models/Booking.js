'use strict';
console.log('BOOKING MODEL INITIALIZED');
module.exports = (sequelize, DataTypes) => {
	const Booking = sequelize.define('Booking', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true
		},

		userId: {
			type: DataTypes.INTEGER.UNSIGNED,
			references: {
				model: 'users',
				key: 'id'
			},
			onUpdate: 'cascade',
			onDelete: 'cascade',
			allowNull: false,
			comment: "Id this campaign is connected to."
		},

		campaignId: {
			type: DataTypes.INTEGER.UNSIGNED,
			references: {
				model: 'campaigns',
				key: 'id'
			},
			onUpdate: 'cascade',
			onDelete: 'cascade',
			allowNull: false,
			comment: "Id this campaign is connected to."
		},

		paymentStatus: {
			type: DataTypes.ENUM("notpaid", "paid", "pending", "failed"),
			allowNull: false,
			defaultValue: "notpaid",
			comment: "To identify the payment status of a particular customer."
		},

		amount: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Paid for this booking."
		},

		currency: {
			type: DataTypes.STRING(4),
			allowNull: false,
			comment: "Currency for this transaction."
		},

		createdAt: {
			type: DataTypes.DATE
		},

		updatedAt: {
			type: DataTypes.DATE
		},

		deletedAt: {
			type: DataTypes.DATE
		},
	}, {
		getterMethods: {
			// fullName: function () {
			// 		return this.fname + ' ' + this.lname
			// }
		},

		setterMethods: {
			// fullName: function (value) {
			// 		var names = value.split(' ');
			// 		this.setDataValue('fname', names.slice(0, -1).join(' '));
			// 		this.setDataValue('lname', names.slice(-1).join(' '));
			// },
		},

		// don't add the timestamp attributes (updatedAt, createdAt)
		timestamps: true,

		// don't delete database entries but set the newly added attribute deletedAt
		// to the current date (when deletion was done). paranoid will only work if
		// timestamps are enabled
		paranoid: true,

		// don't use camelcase for automatically added attributes but underscore style
		// so updatedAt will be updated_at
		underscored: true,

		// disable the modification of table names; By default, sequelize will automatically
		// transform all passed model names (first parameter of define) into plural.
		// if you don't want that, set the following
		freezeTableName: true,

		// define the table's name
		tableName: 'bookings'
	});
	Booking.associate = function (models) {
		// associations can be defined here
	};
	return Booking;
};