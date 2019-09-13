'use strict';
module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    id_pemohon: DataTypes.BIGINT,
    filename: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    timestamps : false,
    tableName: 'files'
  });
  files.associate = function(models) {
    // associations can be defined here
  };
  return files;
};