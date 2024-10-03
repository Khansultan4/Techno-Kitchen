'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
   
    static associate({User, Build}) {
      this.belongsTo(Build)
    }
  }
  Rating.init({
    UserId: DataTypes.NUMBER,
    BuildId: DataTypes.NUMBER,
    score: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};