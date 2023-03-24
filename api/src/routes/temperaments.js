const { Router } = require('express');
const { putTemperamentsDb } = require('./controllers.js');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const allTemperaments = await putTemperamentsDb();
    res.status(200).send(allTemperaments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
