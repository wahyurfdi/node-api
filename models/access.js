'use strict';
module.exports = (sequelize, DataTypes) => {
  const access = sequelize.define('access', {
    access_name: DataTypes.STRING
  },{
    timestamps: false,
    tableName : 'access'
  });
  access.associate = function(models) {
    access.hasMany(models.users, {foreignKey : 'id'})
  };
  return access;
};