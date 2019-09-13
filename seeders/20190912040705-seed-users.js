'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
          username: 'admin',
          password: 'admin123',
          accessId: 1,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          username: 'petugas',
          password: 'petugas123',
          accessId: 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          username: 'wahyu',
          password: 'wahyu123',
          accessId: 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          username: 'toni',
          password: 'toni123',
          accessId: 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
