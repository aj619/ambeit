'use strict';
const Sequelize = require('sequelize');
const tableName = "bookings";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName,
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },

        userId: {
          type: Sequelize.INTEGER.UNSIGNED,
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
          type: Sequelize.INTEGER.UNSIGNED,
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
          type: Sequelize.ENUM("notpaid", "paid", "pending", "failed"),
          allowNull: false,
          defaultValue: "notpaid",
          comment: "To identify the payment status of a particular customer."
        },

        amount: {
          type: Sequelize.FLOAT.UNSIGNED,
          allowNull: false,
          defaultValue: 0.00,
          comment: "Paid for this booking."
        },

        currency: {
          type: Sequelize.STRING(4),
          allowNull: false,
          comment: "Currency for this transaction."
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
