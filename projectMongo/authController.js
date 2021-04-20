const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./model/user')

router.post('/signin', async (req, res) => {
    let checkPass = false;
    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    if (user) {
        checkPass = bcrypt.compareSync(password, user.password)
    }

    if (user && checkPass) {
        const accessToken = jwt.sign({
            email: user.email,
            _id: user._id
        }, process.env.SECRET_KEY)
        return res.json({ accessToken })
    }
    
    res.send({
        error: 'Incorrect email or password.'
    })
})

module.exports = router