const { Router } = require('express');
const { getAllDogs } = require('./controllers.js');
const { Dog, Temperament } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    const { name } = req.query;
    if (name) {
      let nameDog = await allDogs.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      nameDog != false
        ? res.status(200).send(nameDog)
        : res.status(404).json({ message: 'Dog not found' });
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const getTotalDogs = await getAllDogs();
    for (const e of getTotalDogs) {
      if (e.id == id) {
        return res.status(200).json({
          id: e.id,
          image: e.image,
          name: e.name,
          height: e.height,
          weight: e.weight,
          life_span: e.life_span,
          temperament: e.temperament,
        });
      }
    }
    res.status(404).send('ID not found');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  const { image, name, height, weight, life_span, temperament } = req.body;
  try {
    const newDog = await Dog.create({
      image,
      name,
      height,
      weight,
      life_span,
      temperament,
    });

    res.status(200).send(newDog);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
