'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('files', [
      {
        id_pemohon: 1,
        filename: '1.jpg',
        path: '/files'
      },
      {
        id_pemohon: 1,
        filename: '2.jpg',
        path: '/files'
      },
      {
        id_pemohon: 2,
        filename: '3.jpg',
        path: '/files'
      },
      {
        id_pemohon: 2,
        filename: 'mobile.pdf',
        path: '/files'
      },
      
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('files', null, {});
  }
};
