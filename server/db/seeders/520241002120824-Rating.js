'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Ratings', 
  [
     {
      UserId: 2,
      BuildId: 3,
      score: 2,
     },
     {
      UserId: 2,
      BuildId: 2,
      score: 4,
     },
     {
      UserId: 2,
      BuildId: 1,
      score: 3,
     },

     {
      UserId: 3,
      BuildId: 3,
      score: 5,
     },
     {
      UserId: 3,
      BuildId: 2,
      score: 4,
     },
     {
      UserId: 3,
      BuildId: 1,
      score: 4,
     },

     {
      UserId: 4,
      BuildId: 3,
      score: 4,
     },
     {
      UserId: 4,
      BuildId: 2,
      score: 5,
     },
     {
      UserId: 4,
      BuildId: 1,
      score: 5,
     },

     {
      UserId: 5,
      BuildId: 3,
      score: 1,
     },
     {
      UserId: 5,
      BuildId: 2,
      score: 5,
     },
     {
      UserId: 5,
      BuildId: 1,
      score: 4,
     },

     {
      UserId: 6,
      BuildId: 3,
      score: 2,
     },
     {
      UserId: 6,
      BuildId: 2,
      score: 3,
     },
     {
      UserId: 6,
      BuildId: 1,
      score: 4,
     },

     {
      UserId: 7,
      BuildId: 3,
      score: 3,
     },
     {
      UserId: 7,
      BuildId: 2,
      score: 1,
     },
     {
      UserId: 7,
      BuildId: 1,
      score: 5,
     },

     {
      UserId: 8,
      BuildId: 3,
      score: 4,
     },
     {
      UserId: 8,
      BuildId: 2,
      score: 5,
     },
     {
      UserId: 8,
      BuildId: 1,
      score: 5,
     },

     {
      UserId: 9,
      BuildId: 3,
      score: 5,
     },
     {
      UserId: 9,
      BuildId: 2,
      score: 5,
     },
     {
      UserId: 9,
      BuildId: 1,
      score: 5,
     }
    ], 
    {}
  );
   
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Ratings', null, {});
   
  }
};
