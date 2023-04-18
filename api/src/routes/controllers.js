const axios = require('axios');
const { Dog, Temperament } = require('../db');

//Treaer la info de la API 

const getDogsApi = async () => {
  const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds');
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      id: e.id,
      image: e.image.url,
      name: e.name,
      height: e.height.metric + ' cm',
      weight: e.weight.metric + ' kg',
      life_span: e.life_span,
      temperament: e.temperament,
    };
  });
  return apiInfo;
};

//Traer la info de la BDD

const getDogsDB = async () => {
  return await Dog.findAll()

};

//Concatenar la info de la API con la info de la BDD

const getAllDogs = async () => {
  const dogsApi = await getDogsApi();
  const dogsDB = await getDogsDB();
  const totalDogs = dogsApi.concat(dogsDB);
  return totalDogs;
};


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
    })
  );

  const finalAllTemperaments = await Temperament.findAll();
  const totalTemperamentos = finalAllTemperaments;
  return totalTemperamentos;
  // Esto debe retornar un array para despues poder seleccionar varios temperamentos 
};



module.exports = {
  getDogsApi,
  getDogsDB,
  getAllDogs,
  putTemperamentsDb,
};
