const express = require('express')
const app = express()
const PORT = 8789
const dotenv = require('dotenv')
const result = dotenv.config()
if (result.error) {
    throw result.error
}

const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const middleware = require('./helper/authenMiddleware')

const SchoolRouter = require('./schoolController')
const ClassRouter = require('./classController')
const StudentRouter = require('./studentController')

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

app.use('/school', middleware.authenticateJWT, SchoolRouter)
app.use('/class', middleware.authenticateJWT, ClassRouter)
app.use('/student', middleware.authenticateJWT, StudentRouter)

app.use('/post', middleware.authenticateJWT, PostRouter)
app.use('/user', middleware.authenticateJWT, UserRouter)
app.use('/', AuthRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.listen(PORT, () => { console.log('Server started on http://localhost:' + PORT) })
module.exports = app
