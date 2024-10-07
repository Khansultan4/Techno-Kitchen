const router = require('express').Router();
const {
  Build,
  Item,
  itemBundle,
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
          through: { model: itemBundle },
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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const entries = await Build.findOne({
      where: { id },
      include: [
        {
          model: Item,
          through: { model: itemBundle },
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
          through: { model: itemBundle },
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

module.exports = router;
