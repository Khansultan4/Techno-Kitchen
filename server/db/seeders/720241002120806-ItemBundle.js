'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('ItemBundles', 
    [
      {
        BuildId: 1,
        ItemId: 1,
      },
      {
        BuildId: 1,
        ItemId: 4,
      },
      {
        BuildId: 1,
        ItemId: 10,
      },
      {
        BuildId: 2,
        ItemId: 2,
      },
      {
        BuildId: 2,
        ItemId: 5,
      },
      {
        BuildId: 2,
        ItemId: 11,
      },
     ], 
    {}
  );
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('ItemBundles', null, {});
    
  }
};


