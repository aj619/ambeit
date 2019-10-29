'use strict';
console.log('CAMPAIGNS MODEL INITIALIZED');
module.exports = (sequelize, DataTypes) => {
	const Campaign = sequelize.define('Campaign', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true
		},

		productId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: 'products',
				key: 'id'
			},
			onUpdate: 'cascade',
			onDelete: 'cascade',
			comment: "Id this campaign is connected to."
		},

		price: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Price of this campaign."
		},

		estRaise: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Estimated price to raise from this campaign."
		},

		minRaise: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Min raise this campaign is expected to produce."
		},

		achievedRaise: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Achieved raise from this campaign till date."
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
		tableName: 'campaigns'
	});
	Campaign.associate = function (models) {
		// associations can be defined here
	};
	return Campaign;
};