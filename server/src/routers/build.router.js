const router = require('express').Router();
const { Op } = require('sequelize');
const {
  Build,
  Item,
  ItemBundle,
  Type,
  Rating,
  Comment,
  User,
} = require('../../db/models');

router.get('/all', async (req, res) => {
  try {
    const entries = await Build.findAll({
      include: [
        {
          model: Item,
          include: [
            {
              model: Type,
            },
          ],
        },
        {
          model: Rating,
        },
        {
          model: Comment,
        },
        {
          model: User,
          as: 'Owner',
        },
      ],
    });
    console.log(entries);
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.get('/search', async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: 'Search query cannot be empty' });
  }
  try {
    const entries = await Build.findAll({
      include: [
        {
          model: Item,
          include: [
            {
              model: Type,
            },
          ],
        },
        {
          model: Rating,
        },
        {
          model: Comment,
        },
        {
          model: User,
          as: 'Owner',
        },
      ],
      where: {
        title: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    console.log(entries);
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const entries = await Build.findOne({
      where: { id },
      include: [
        {
          model: Item,
          include: [
            {
              model: Type,
            },
          ],
        },
        {
          model: Rating,
        },
        {
          model: Comment,
        },
        {
          model: User,
          as: 'Owner',
        },
      ],
    });
    console.log(entries);
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.get('/byuser/:UserId', async (req, res) => {
  const { UserId } = req.params;
  try {
    const entries = await Build.findAll({
      where: { UserId },
      include: [
        {
          model: Item,
          include: [
            {
              model: Type,
            },
          ],
        },
        {
          model: Rating,
        },
        {
          model: Comment,
        },
        {
          model: User,
          as: 'Owner',
        },
      ],
    });
    console.log(entries);
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

router.post('/:buildId/comments', async (req, res, next) => {
  const { UserId, BuildId, content, score } = req.body;
  console.log('Received request to create comment and rating:', req.body);
  if (!content || score === null || score < 1 || score > 5 || !UserId || !BuildId) {
    return res.status(400).json({ error: 'Invalid comment or rating' });
  }
  try {
    console.log('Creating comment...');
    const comment = await Comment.create({
      UserId,
      BuildId,
      content,
    });
    console.log('Comment created:', comment);
    console.log('Creating rating...');
    const rating = await Rating.create({
      UserId,
      BuildId,
      score,
    });
    console.log('Rating created:', rating);

    res.status(201).json({ comment, rating });
  } catch (error) {
    console.error('Error creating comment or rating:', error);
    next(error);
  }
});

router.post('/add', async (req, res) => {
  const { UserId, Items, image, title } = req.body;
  let body = {};
  // console.log('=====================Новая сборка=====================')
  // console.log(req.body)
  // console.log('======================конец======================')
  try {
    const build = await Build.create({ UserId, image, title });
    const itemIdBuildId = Items.flatMap((el) => {
      return Array.isArray(el)
        ? el.map((el2) => ({ ItemId: el2.id || null, BuildId: build.id }))
        : { ItemId: el.id || null, BuildId: build.id };
    });
    const data = await ItemBundle.bulkCreate(itemIdBuildId);
    body = { message: 'успешно добавлено', build: build };
  } catch (error) {
    console.log(error);
    body = { message: 'ошибка сохранения сборки' };
    res.status(500);
  }
  res.json(body);
});



router.delete('/:buildId/comments/:commentId', async (req, res, next) => {
  const { buildId, commentId } = req.params;
  try {
    await Comment.destroy({ where: { id: commentId, BuildId: buildId } });
    await Rating.destroy({ where: { id: commentId, BuildId: buildId } });
    res.status(200).json({ message: 'Comment and rating deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment or rating:', error);
    next(error);
  }
});




module.exports = router;
