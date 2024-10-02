const router = require("express").Router();
const { Build, Item, itemBundle, Type } = require("../../db/models");

router.get("/build", async (req, res) => {
    try {
      const entries = await Build.findAll(
    //     {       
    //     include: [
    //       {
    //         model: Item,
    //         through: {model: itemBundle},
    //         include:[{
    //         model: Type,
    //         }
    //         ]
    //       },
    //     ],
    //   }
    );
      console.log(entries);
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

module.exports = router;
