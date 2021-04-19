const express = require('express')
const app = express()
const PORT = 8789
const dotenv = require('dotenv')
const result = dotenv.config()
if (result.error){
    throw result.error
}

const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PostRouter = require('./postController')
const UserRouter = require('./userController')
const AuthRouter = require('./authController')

var mongoDB = 'mongodb://localhost:27017/projectMongo'

mongoose.connect(mongoDB, err => {
    if (err) throw err;
    console.log('Successfully connected');
})
mongoose.Promise = global.Promise;

var db = mongoose.connection

app.use('/post', PostRouter)
app.use('/user', UserRouter)
app.use('/', AuthRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.listen(PORT, () => { console.log('Server started on http://localhost:' + PORT) })
module.exports = app
