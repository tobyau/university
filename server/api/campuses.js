const router = require('express').Router();
const { Campus } = require('../models')

module.exports = router;

router.get('/api/campuses', async (req, res, next) => {
    const campuses = await Campus.findAll();
    console.log(campuses)
    res.send(campuses);
})