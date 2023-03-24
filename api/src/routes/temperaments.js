const { Router } = require('express');
// const { getTemperamentsApi } = require('./controllers.js');
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const router = Router();

//Traer temperamentos de la API y guardarlos en un array sin que se repitan

const getTemperamentsApi = async () => {
  const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
  const temperamentsInfo = await apiUrl.data.map((e) => {
    return {
      temperament: e.temperament,
    };
  });

  let arregloTemperamentos = [];

  for (let i = 0; i < temperamentsInfo.length; i++) {
    if (temperamentsInfo[i].temperament) {
      let temperamentos = temperamentsInfo[i].temperament.split(', ');

      for (let j = 0; j < temperamentos.length; j++) {
        let temperamento = temperamentos[j];

        if (!arregloTemperamentos.includes(temperamento)) {
          arregloTemperamentos.push(temperamento);
        }
      }
    }
  }
  return arregloTemperamentos;
};

//Guardar los temperamentos en la base de datos

const putTemperamentsDb = async () => {
  
  let temperamentsArray = await getTemperamentsApi();

  await Promise.all(
    temperamentsArray.map((temperament) => {
      return Temperament.findOrCreate({
        where: {
          name: temperament,
        },
      });
    }));
 
  const finalAllTemperaments = await Temperament.findAll();
  const mapTemperaments = finalAllTemperaments.map((e) => {
    return e.dataValues.name;
  });
  return mapTemperaments;
};



router.get('/', async (req, res) => {
  try {
    const allTemperaments = await putTemperamentsDb();
    res.status(200).send(allTemperaments);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
