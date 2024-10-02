'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
         await queryInterface.bulkInsert('Comments', 
          [
            {
              UserId: 1,
              BuildId: 1,
              content: "Все отлично, имба за свои деньги тянет все вплоть до киберпанка"
            },
            {
              UserId: 1,
              BuildId: 2,
              content: "Более менее тихий, производительный"
            },
            {
              UserId: 2,
              BuildId: 1,
              content: "Комп хороший, красивый, тянет все игры"
            },
            {
              UserId: 2,
              BuildId: 2,
              content: "Отличный комп, оправдал все ожидания"
            },
          ], 
          {}
        );
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Comments', null, {});
     
  }
};
