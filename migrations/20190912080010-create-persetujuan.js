'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('persetujuan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persetujuan1: {
        type: Sequelize.BOOLEAN
      },
      persetujuan2: {
        type: Sequelize.BOOLEAN
      },
      persetujuan3: {
        type: Sequelize.BOOLEAN
      },
      persetujuan4: {
        type: Sequelize.BOOLEAN
      },
      id_pemohon: {
        type: Sequelize.BIGINT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('persetujuan');
  }
};