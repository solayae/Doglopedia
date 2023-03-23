const { Router } = require('express');
const router = Router();

const dogsRouter = require('./dogs.js');
const dogTemperaments = require('./temperaments.js');

router.use('/dogs', dogsRouter);
router.use('/temperaments', dogTemperaments);


module.exports = router;


