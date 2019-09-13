'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pemohon', {
      id_pemohon: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_lengkap: {
        type: Sequelize.STRING(50)
      },
      nilai_pengajuan: {
        type: Sequelize.BIGINT
      },
      sektor_usaha: {
        type: Sequelize.STRING(50)
      },
      alamat_rumah: {
        type: Sequelize.TEXT
      },
      kota_rumah: {
        type: Sequelize.STRING(50)
      },
      kecamatan_rumah: {
        type: Sequelize.STRING(50)
      },
      kelurahan_rumah: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pemohon');
  }
};