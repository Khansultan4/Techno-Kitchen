'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Build extends Model {
   
    static associate({User, Item, ItemBundle, Comment, Rating}) {
      this.belongsTo(User, {foreignKey: 'UserId', as: 'Owner'})
      this.hasMany(Comment, {foreignKey: 'BuildId'})
      this.hasMany(ItemBundle, {foreignKey: 'BuildId'})
      this.hasMany(Rating, {foreignKey: 'BuildId'})
      this.belongsToMany(User, {through: {model: Rating}, as: 'ownerOfRating', foreignKey: 'BuildId'})

      this.belongsToMany(Item, {
        through: { model: ItemBundle },
      });

    }
  }
  Build.init({
    UserId: DataTypes.NUMBER,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Build',
  });
  return Build;
};