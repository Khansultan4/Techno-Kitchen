const router = require('express').Router();
const authrouter = require('./auth.router');
const tokenrouter = require('./token.router');
const buildrouter = require('./build.router');
const itemrouter = require('./items.router');
const typerouter = require('./type.router');
const adminrouter = require('./admin.router');
const usersrouter = require('./users.router');
const messagerouter = require('./messages.router');

router.use('/auth', authrouter);
router.use('/token', tokenrouter);
router.use('/build', buildrouter);
router.use('/item', itemrouter);
router.use('/types', typerouter);
router.use('/admin', adminrouter);
router.use('/users', usersrouter);
router.use('/messages', messagerouter);

module.exports = router;
