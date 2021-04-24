const express = require('express')
const router = express.Router()
const User = require('./model/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

router.get('/', (req, res) => {
    return User.find().exec((err, users) => {
        if (err) throw err
        res.json(users)
    })
})

router.get('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request user id' })

    const id = { _id: req.params.id }

    return User.findById(id).exec((err, user) => {
        if (err) throw err;
        res.json(user)
    })
})

router.put('/', async (req, res) => {
    const id = { _id: req.body._id };
    const update = req.body

    await User.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

router.post('/', async (req, res) => {
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

router.delete('/:id', (req, res) => {
    const id = { _id: req.params.id }
    User.findByIdAndDelete(id, (err, docs) => {
        if (err) console.log(err);
        else res.json({ message: `Delete user ${req.params.id} successfully` });
    })
})

module.exports = router