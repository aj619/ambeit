'use strict';
const faker = require('faker');
const LIMIT = 50000;

module.exports = {

  up: (queryInterface, Sequelize) => {
    let generateBulkData = [];
    let i = LIMIT;
    while (i--) {
      const rand = Math.random();
      const temp = {
        email: faker.internet.email(),
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        validated: rand >= 0.5,
        medium: rand <= 0.25 ? 'Facebook' : (rand > 0.25 && rand <= 0.65) ? 'Google' : (rand > 0.65 && rand < 0.75) ? 'Linkedin' : 'Unknown',
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        state: faker.address.state(),
        city: faker.address.city(),
        country: faker.address.country(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      generateBulkData.push(temp)
    }
    return queryInterface.bulkInsert('users', generateBulkData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
