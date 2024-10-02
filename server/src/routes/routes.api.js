const router = require('express').Router();
const authrouter = require('./auth.router');
const tokenrouter = require('./token.router');

router.use('/auth', authrouter);
router.use('/token', tokenrouter);

module.exports = router;
