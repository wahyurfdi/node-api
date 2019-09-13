'use strict';
module.exports = (sequelize, DataTypes) => {
  const penugasan = sequelize.define('penugasan', {
    id_petugas: DataTypes.BIGINT,
    id_pemohon: DataTypes.BIGINT
  }, {
    timestamps : false,
    tableName : 'penugasan'
  });
  penugasan.associate = function(models) {
    penugasan.belongsTo(models.pemohon, {foreignKey : 'id_pemohon', targetKey : 'id_pemohon'})
  };
  return penugasan;
};