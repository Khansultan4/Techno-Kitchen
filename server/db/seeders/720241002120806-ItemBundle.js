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
        ItemId: 7,
      },
      {
        BuildId: 1,
        ItemId: 10,
      },
      {
        BuildId: 1,
        ItemId: 13,
      },
      {
        BuildId: 1,
        ItemId: 16,
      },
      {
        BuildId: 1,
        ItemId: 19,
      },
      {
        BuildId: 1,
        ItemId: 22,
      },
      {
        BuildId: 1,
        ItemId: 25,
      },
      {
        BuildId: 1,
        ItemId: 28,
      },
      {
        BuildId: 1,
        ItemId: 31,
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
        ItemId: 8,
      },
      {
        BuildId: 2,
        ItemId: 11,
      },
      {
        BuildId: 2,
        ItemId: 14,
      },
      {
        BuildId: 2,
        ItemId: 17,
      },
      {
        BuildId: 2,
        ItemId: 20,
      },
      {
        BuildId: 2,
        ItemId: 23,
      },      {
        BuildId: 2,
        ItemId: 26,
      },      {
        BuildId: 2,
        ItemId: 29,
      },
      {
        BuildId: 2,
        ItemId: 32,
      },
      {
        BuildId: 3,
        ItemId: 3,
      },
      {
        BuildId: 3,
        ItemId: 6,
      },
      {
        BuildId: 3,
        ItemId: 9,
      },
      {
        BuildId: 3,
        ItemId: 12,
      },
      {
        BuildId: 3,
        ItemId: 15,
      },
      {
        BuildId: 3,
        ItemId: 18,
      },
      {
        BuildId: 3,
        ItemId: 21,
      },
      {
        BuildId: 3,
        ItemId: 24,
      },      {
        BuildId: 3,
        ItemId: 27,
      },      {
        BuildId: 3,
        ItemId: 30,
      },
      {
        BuildId: 3,
        ItemId: 33,
      },

     ], 
    {}
  );
    
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('ItemBundles', null, {});
    
  }
};


