const express = require('express')
const app = express()
const PORT = 8789
const mongoose = require('mongoose')
const User = require('./model/user')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var mongoDB = 'mongodb://localhost:27017/projectMongo'

mongoose.connect(mongoDB, err => {
    if (err) throw err;
    console.log('Successfully connected');
})
mongoose.Promise = global.Promise;

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.get('/', (req, res) => {
    return User.find().exec((err, books) => {
        if (err) throw err
        res.json(books)
    })
})

app.put('/updateUser', async (req, res) => {
    const id = { _id: req.body._id };
    const update = req.body

    await User.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

app.post('/newUser', (req, res) => {
    let user = new User(req.body)
    user.save(err => {
        if (err) throw err
        console.log('User save successfully')
    })
    res.json(user)
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = { _id: req.params.id }
    User.findByIdAndDelete(id, (err, docs) => {
        if (err) console.log(err);
        else res.json({ message: `Delete user ${req.params.id} successfully` });
    })
})

app.listen(PORT, () => { console.log('Server started on http://localhost:' + PORT) })
module.exports = app
