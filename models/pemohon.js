'use strict';
module.exports = (sequelize, DataTypes) => {
  const pemohon = sequelize.define('pemohon', {
    id_pemohon: DataTypes.BIGINT,
    nama_lengkap: DataTypes.STRING,
    nilai_pengajuan: DataTypes.BIGINT,
    sektor_usaha: DataTypes.STRING,
    alamat_rumah: DataTypes.TEXT,
    kota_rumah: DataTypes.STRING,
    kecamatan_rumah: DataTypes.STRING,
    kelurahan_rumah: DataTypes.STRING
  }, {
    timestamps: false,
    tableName : 'pemohon',
    defaultScope: {
        attributes: {
          exclude: ['id']
        }
    }   
  });
  pemohon.associate = function(models) {
    //
  };
  return pemohon;
};