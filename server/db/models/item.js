'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Type, Build, ItemBundle }) {
      
      this.belongsTo(Type, { foreignKey: 'TypeId' }),

        this.belongsToMany(Build, {
          through: { model: ItemBundle },
          foreignKey: 'BuildId',
        });
    }
  }
  Item.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.NUMBER,
      specifications: DataTypes.JSONB,
      image: DataTypes.STRING,
      TypeId: DataTypes.NUMBER,
     },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
