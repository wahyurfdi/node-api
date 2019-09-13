'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('penugasan', [
      {
        id_petugas: 2,
        id_pemohon: 1
      },
      {
        id_petugas: 2,
        id_pemohon: 2
      },
      {
        id_petugas: 2,
        id_pemohon: 3
      },
      {
        id_petugas: 3,
        id_pemohon: 4
      },
      {
        id_petugas: 3,
        id_pemohon: 5
      },
      {
        id_petugas: 3,
        id_pemohon: 6
      },
      {
        id_petugas: 2,
        id_pemohon: 7
      },
      {
        id_petugas: 4,
        id_pemohon: 8
      },
      {
        id_petugas: 4,
        id_pemohon: 9
      },
      {
        id_petugas: 4,
        id_pemohon: 10
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('penugasan', null, {});
  }
};
