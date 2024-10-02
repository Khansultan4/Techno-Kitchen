'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Ratings', 
  [
    {
      UserId: 1,
      BuildId: 1,
      score: 4,
     },
     {
      UserId: 1,
      BuildId: 2,
      score: 5,
     },
     {
      UserId: 2,
      BuildId: 1,
      score: 2,
     },
     {
      UserId: 2,
      BuildId: 2,
      score: 3,
     },
    ], 
    {}
  );
   
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Ratings', null, {});
   
  }
};
