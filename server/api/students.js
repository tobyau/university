const router = require('express').Router();
const { Student } = require('../models')

module.exports = router;

router.get('/api/students', async (req, res, next) => {
    const students = await Student.findAll();
    console.log(students)
    res.send(students);
})

