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
    };
  });
  return apiInfo;
};

//Traer la info de la BDD

const getDogsDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
};

//Concatenar la info de la API con la info de la BDD

const getAllDogs = async () => {
  const dogsApi = await getDogsApi();
  const dogsDB = await getDogsDB();
  const totalDogs = dogsApi.concat(dogsDB);
  return totalDogs;
};


module.exports = {
  getDogsApi,
  getDogsDB,
  getAllDogs,
};
