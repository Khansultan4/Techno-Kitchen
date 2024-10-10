'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          UserId: 2,
          BuildId: 3,
          content: 'Комп хороший, красивый, тянет все игры',
        },
        {
          UserId: 2,
          BuildId: 2,
          content: 'Отличный комп, оправдал все ожидания',
        },
        {
          UserId: 2,
          BuildId: 1,
          content: 'Компьютер оправдал описание',
        },

        {
          UserId: 3,
          BuildId: 3,
          content: 'Подходит для удаленной работы и общего использования.',
        },
        {
          UserId: 3,
          BuildId: 2,
          content:
            'Не нагревается значительно, даже при подключении к двум мониторам с разрешением FHD.',
        },
        {
          UserId: 3,
          BuildId: 1,
          content: 'Лучше я не видал, собирайте не пожалеете!',
        },

        {
          UserId: 4,
          BuildId: 3,
          content: 'Хорошее соотношение цены и качества.',
        },
        {
          UserId: 4,
          BuildId: 2,
          content: 'Собрала этот пк, муж вернулся в семью',
        },
        {
          UserId: 4,
          BuildId: 1,
          content: 'Мне комп не зашел, чувствую нотки сексизма',
        },

        {
          UserId: 5,
          BuildId: 3,
          content:
            'Собрал этот пк деду, он улыбнулся мне, положил руку на плечо и вычеркнул из завещания',
        },
        {
          UserId: 5,
          BuildId: 2,
          content:
            'Сложно описать словами как хорош этот пк но цифрами можно 0/5',
        },
        {
          UserId: 5,
          BuildId: 1,
          content: 'Не плохо так-то',
        },

        {
          UserId: 6,
          BuildId: 3,
          content: 'Вентилятор шумит под нагрузкой ЦП.',
        },
        {
          UserId: 6,
          BuildId: 2,
          content: 'Много света от подсветки.',
        },
        {
          UserId: 6,
          BuildId: 1,
          content: 'Лучшая сборка на сайте',
        },

        {
          UserId: 7,
          BuildId: 3,
          content: 'круто что этот комп выдает 38 фпс',
        },
        {
          UserId: 7,
          BuildId: 2,
          content: 'Лучше взять ноут чем этот огромный мертвый кирпич',
        },
        {
          UserId: 7,
          BuildId: 1,
          content: 'Почти как мой игровой ноут',
        },
        {
          UserId: 8,
          BuildId: 3,
          content: 'Топ комп чтобы гуглить',
        },
        {
          UserId: 8,
          BuildId: 2,
          content: 'Топ комп чтобы сидеть в вс код',
        },
        {
          UserId: 8,
          BuildId: 1,
          content: 'Топ комп чтобы читать доку',
        },

        {
          UserId: 9,
          BuildId: 3,
          content: 'balls',
        },
        {
          UserId: 9,
          BuildId: 2,
          content: 'balls',
        },
        {
          UserId: 9,
          BuildId: 1,
          content: 'balls',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
