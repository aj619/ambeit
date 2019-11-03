'use strict';
const Sequelize = require('sequelize');
const tableName = "products";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName,
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },

        mainImageUrl: {
          type: Sequelize.TEXT,
          allowNull: true
        },

        multiImage: {
          type: Sequelize.JSON,
          allowNull: true
        },

        tag: {
          type: Sequelize.STRING,
          allowNull: false
        },

        estimate : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Estimate of actual cost of this product."
        },

        minPrice : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Min price required for this product to succeed."
        },

        estimatedPrice : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Estimated price required for this product to raise from all campaigns."
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
