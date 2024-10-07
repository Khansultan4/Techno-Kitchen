const router = require('express').Router();
const {User} = require('../../db/models')

router.get('/logins', async (req,res) => {
    let body = {}
    try {
        const data = await User.findAll({attributes: ['id', 'login', 'email', 'createdAt']})
        body = data.reduce((acc, el) => {acc[el.id] = el.login; return acc}, [])
    } catch (error) {
        console.log(error)
        body = {message: 'что-то пошло не так'}
        res.status(500)
    }
    res.json(body)
})

module.exports = router;
