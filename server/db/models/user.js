'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({Build, Comment, Rating}) {
      this.hasMany(Build, {foreignKey: 'UserId'})
      this.hasMany(Comment, {foreignKey: 'UserId'})
      this.belongsToMany(Build, {through: {model: Rating}, foreignKey: 'UserId', as: 'owner'})
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};