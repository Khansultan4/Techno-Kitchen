'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate({Item}) {
      this.hasMany(Item, {foreignKey: 'TypeId'})
    }
  }
  Type.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};