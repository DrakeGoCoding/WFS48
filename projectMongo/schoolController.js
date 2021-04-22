const express = require('express')
const router = express.Router()
const School = require('./model/school')

router.get('/', (req, res) => {
    return School.find().exec((err, schools) => {
        if (err) throw err;
        res.json(schools)
    })
})

router.post('/', (req, res) => {
    let newSchool = new School(req.body)
    newSchool.save(err => {
        if (err) throw err;
        console.log('School save successfully');
    })
    res.json({ data: newSchool })
})

router.put('/', (req, res) => {
    if (!req.body.id)
        return res.status(400).send({ error: 'request id for school' })

    const id = { _id: req.body.id }
    const update = req.body

    School.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request id for school' })

    const id = { _id: req.params.id }

    School.findByIdAndDelete(id, (err, doc) => {
        if (err) console.log(err);
        else res.json({ result: `Delete id ${id} successfully` })
    })
})

module.exports = router