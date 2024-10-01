'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemBundles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BuildId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Builds',
          key: 'id'
        }
      },
      ItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemBundles');
  }
};