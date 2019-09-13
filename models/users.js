'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accessId: DataTypes.INTEGER
  }, {
    defaultScope: {
      attributes: {
        exclude: ['accessId', 'password']
      }
    }    
  });
  users.associate = function(models) {
    users.belongsTo(models.access)
  };
  return users;
};