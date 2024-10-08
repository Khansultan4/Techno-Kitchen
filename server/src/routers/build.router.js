const router = require("express").Router();
const { Op } = require('sequelize');
const { Build, Item, itemBundle, Type, Rating, Comment, User } = require("../../db/models");

router.get("/all", async (req, res) => {
    try {
      const entries = await Build.findAll(
        {       
        include: [
          {
            model: Item,
            through: {model: itemBundle},
            include:[{
            model: Type,
            }
            ]
          },
          {
            model: Rating,
          },
          {
            model: Comment,
          },
          {
            model: User,
            as: 'Owner'
          }
        ],
      }
    );
      console.log(entries);
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });
  
  
  
    router.get("/search", async (req, res) => {
      const { query } = req.query; 
      if (!query) {
        return res.status(400).json({ message: "Search query cannot be empty" });
      }
      try {
        const entries = await Build.findAll({
          include: [
            {
              model: Item,
              through: {model: itemBundle},
              include: [{
                model: Type
              }]
            },
            {
              model: Rating,
            },
            {
              model: Comment,
            },
            {
              model: User,
              as: 'Owner'
            }
          ],
          where: {
            title: {
              [Op.iLike]: `%${query}%`
            }
          },
        });
    
        console.log(entries);
        res.json(entries);
      } catch (error) {
        console.error(error);
        res.sendStatus(400);
      }
    });
  
  router.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
      const entries = await Build.findOne(
        { where: {id},       
        include: [
          {
            model: Item,
            through: {model: itemBundle},
            include:[{
            model: Type,
            }
            ]
          },
          {
            model: Rating,
          },
          {
            model: Comment,
          },
          {
            model: User,
            as: 'Owner'
          }
        ],
      }
    );
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

router.post('/add', async (req,res) => {
  console.log(req.body)
})

module.exports = router;
