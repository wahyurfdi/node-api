'use strict';
module.exports = (sequelize, DataTypes) => {
  const persetujuan = sequelize.define('persetujuan', {
    persetujuan1: DataTypes.BOOLEAN,
    persetujuan2: DataTypes.BOOLEAN,
    persetujuan3: DataTypes.BOOLEAN,
    persetujuan4: DataTypes.BOOLEAN,
    id_pemohon: DataTypes.BIGINT
  }, {
    timestamps: false,
    tableName: 'persetujuan'
  });
  persetujuan.associate = function(models) {
    // associations can be defined here
  };
  return persetujuan;
};