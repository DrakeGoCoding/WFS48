const express = require('express')
const router = express.Router()
const User = require('./model/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

router.get('/', (req, res) => {
    return User.find().exec((err, books) => {
        if (err) throw err
        res.json(books)
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