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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const rawData = await Item.findOne({
      where: { id },
      include: {
        model: Type,
      },
      order: [['id', 'ASC']],
    });

    res.json(rawData.get({ plain: true }));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

module.exports = router;
