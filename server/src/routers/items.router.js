const router = require('express').Router();
const { Item, Type } = require('../../db/models');

router.get('/all', async (req, res) => {
  let body = {};
  try {
    const rawData = await Item.findAll({
      include: {
        model: Type,
      },
      order: [['id', 'ASC']],
    });
    body = rawData;
    console.log(JSON.stringify(rawData));
  } catch (error) {
    res.status(500);
    body = { message: 'что-то пошло не так' };
    console.log(error);
  }
  res.json(body);
});

module.exports = router;
