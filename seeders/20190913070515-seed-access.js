'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('access', [
      {
        access_name: 'admin'
      },
      {
        access_name: 'petugas'
      },
      {
        access_name: 'user'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('access', null, {});
  }
};
