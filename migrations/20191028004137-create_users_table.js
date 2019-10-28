'use strict';
const Sequelize = require('sequelize');
const tableName = "users";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName,
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },

        email: {
          type: Sequelize.STRING,
          allowNull: false,
          validations: { isEmail: true }
        },

        fname: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "Ambeit"
        },

        lname: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "User"
        },

        validated: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },

        medium: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "unknown"
        },

        address: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ""
        },

        street: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ""
        },

        state: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ""
        },

        city: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ""
        },

        country: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: ""
        },

        createdAt: {
          type: Sequelize.DATE
        },

        updatedAt: {
          type: Sequelize.DATE
        },

        deletedAt: {
          type: Sequelize.DATE
        },
      },
      {
        engine: 'InnoDB', // default: 'InnoDB'
        charset: 'utf8', // default: null
        paranoid: true,
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
