'use strict';


const Sequelize = require('sequelize');

var User = sequelize.define('users', {
    email: { type: Sequelize.STRING, validations: { isEmail: true } },
    fname: { type: Sequelize.STRING, allowNull: false, defaultValue: "Ambeit" },
    lname: { type: Sequelize.STRING, allowNull: true, defaultValue: "User" },
    validated: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    medium: { type: Sequelize.STRING, allowNull: true, defaultValue: "unknown" },
    address: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },
    street: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },
    state: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },
    city: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },
    country: { type: Sequelize.STRING, allowNull: true, defaultValue: "" },
}, {
    getterMethods: {
        fullName: function () {
            return this.fname + ' ' + this.lname
        }
    },
    
    setterMethods: {
        fullName: function (value) {
            var names = value.split(' ');
            this.setDataValue('fname', names.slice(0, -1).join(' '));
            this.setDataValue('lname', names.slice(-1).join(' '));
        },
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
    tableName: 'users'
});

module.exports = User;