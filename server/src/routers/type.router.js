const router = require('express').Router();
const { Type } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const types = await Type.findAll();
    const data = types.map((item) => item.get());
    res.json(data);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
