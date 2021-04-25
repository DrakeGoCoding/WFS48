const express = require('express')
const router = express.Router()
const User = require('./model/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

router.post('/signup', async (req, res) => {
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) {
        return res.send({ error: 'Email already exists.' })
    }

    let hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashPassword;
    let user = new User(req.body);

    user.save(err => {
        if (err) throw err
        console.log('User save successfully')
    })
    res.json(user)
})

module.exports = router