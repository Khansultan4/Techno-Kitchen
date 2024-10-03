const router = require("express").Router();
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






module.exports = router;
