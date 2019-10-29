'use strict';
console.log('PRODUCTS MODEL INITIALIZED');
module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			primaryKey: true,
			autoIncrement: true
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false
		},

		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},

		tag: {
			type: DataTypes.STRING,
			allowNull: false
		},

		estimate: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Estimate of actual cost of this product."
		},

		minPrice: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Min price required for this product to succeed."
		},

		estimatedPrice: {
			type: DataTypes.FLOAT.UNSIGNED,
			allowNull: false,
			defaultValue: 0.00,
			comment: "Estimated price required for this product to raise from all campaigns."
		},

		createdAt: {
			type: DataTypes.DATE
		},

		updatedAt: {
			type: DataTypes.DATE
		},

		deletedAt: {
			type: DataTypes.DATE
		}
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
		tableName: 'products'
	});
	Product.associate = function (models) {
		// associations can be defined here
	};
	return Product;
}