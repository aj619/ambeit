'use strict';
const Sequelize = require('sequelize');
const tableName = "campaigns";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName,
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },

        productId : {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'products',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade',
          comment: "Id this campaign is connected to."
        },

        price : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Price of this campaign."
        },

        estRaise : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Estimated price to raise from this campaign."
        },

        minRaise : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Min raise this campaign is expected to produce."
        },

        achievedRaise : {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Achieved raise from this campaign till date."
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
