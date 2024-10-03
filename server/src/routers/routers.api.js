const router = require('express').Router();
const authrouter = require('./auth.router');
const tokenrouter = require('./token.router');
const buildrouter = require('./build.router');
const itemrouter = require('./items.router')


router.use('/auth', authrouter);
router.use('/token', tokenrouter);
router.use('/build', buildrouter);
router.use('/item', itemrouter)

module.exports = router;
