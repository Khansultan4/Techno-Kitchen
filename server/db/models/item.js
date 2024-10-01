'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      description: DataTypes.JSONB,
      image: DataTypes.STRING,
      TypeId: DataTypes.NUMBER,
      isInStock: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
