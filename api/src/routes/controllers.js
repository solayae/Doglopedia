const axios = require('axios');
const { Dog, Temperament } = require('../db');



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
