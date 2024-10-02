const router = require('express').Router();
const authrouter = require('./auth.router');
const tokenrouter = require('./token.router');
const buildrouter = require('./build.router');

router.use('/auth', authrouter);
router.use('/token', tokenrouter);
router.use('/build', buildrouter);

module.exports = router;
