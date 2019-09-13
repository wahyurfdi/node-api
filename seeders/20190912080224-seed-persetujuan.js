'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('persetujuan', [
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 1
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 2
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 3
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 4
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 5
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 6
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 7
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 8
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 9
      },
      {
        persetujuan1: false,
        persetujuan2: false,
        persetujuan3: false,
        persetujuan4: false,
        id_pemohon: 10
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('persetujuan', null, {});
  }
};
