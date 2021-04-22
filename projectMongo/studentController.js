const express = require('express');
const router = express.Router();
const Student = require('./model/student')

router.get('/', (req, res) => {
    return Student.find().populate(['class', 'school']).exec((err, students) => {
        if (err) throw err;
        res.json(students)
    })
})

router.get('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request id for student' })

    const id = { _id: req.params.id }

    return Student.findById(id).populate(['class', 'school']).exec((err, student) => {
        if (err) throw err;
        res.json(student)
    })
})

router.post('/', (req, res) => {
    let newStudent = new Student(req.body)
    newStudent.save((err) => {
        if (err) throw err;
        console.log('Student save successfully');
    })
    res.json({ data: newStudent })
})

router.put('/', (req, res) => {
    if (!req.body.id)
        return res.status(400).send({ error: 'request id for student' });

    const id = { _id: req.body.id }
    const update = req.body;

    Student.findByIdAndUpdate(id, update, { new: true }, function (err, result) {
        if (err) return res.send(err)
        res.json(result)
    });
})

router.delete('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request id for student' })

    const id = { _id: req.params.id }

    Student.findByIdAndDelete(id, function (err, doc) {
        if (err) console.log(err)
        else res.json({ result: `Delete id ${id} successfully` })

    })
})

module.exports = router