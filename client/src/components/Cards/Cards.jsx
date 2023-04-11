import React, { useState, useEffect } from 'react';
import './Cards.css';
import { Card } from '../Card/Card.jsx';
import { Paginado } from '../Paginado/Paginado.jsx';

export function Cards({ allDogs }) {

  const [temperamento, setTemperamento] = useState('');
  const [temperamentos, setTemperamentos] = useState([]);
  const [origen, setOrigen] = useState('');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState('');
  const [ordenPeso, setOrdenPeso] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchTemperaments() {
      const response = await fetch('http://localhost:3001/temperaments');
      const data = await response.json();
      setTemperamentos(data);
    }
    fetchTemperaments();
  }, []);

  return (
    <div className='cards-filters-container'>
      <div className='filters-container'>
        <div className='filterDiv'>
          <label className='filterLabel'>Temperamentos:</label>
          <select className='filterSelect'>
            <option value=''>Todos</option>
            {temperamentos.map((temperamento) => (
              <option key={temperamento.id} value={temperamento.name}>
                {temperamento.name}
              </option>
            ))}
          </select>
        </div>

        <div className='filterDiv'>
          <label className='filterLabel'>Origen:</label>
          <select value={origen} className='filterSelect'>
            <option value=''>Todos</option>
            <option value='api'>Existentes</option>
            <option value='bdd'>Creados</option>
          </select>
        </div>

        <div className='filterDiv'>
          <label className='filterLabel'>Ordenar por orden alfabético:</label>
          <select value={ordenAlfabetico} className='filterSelect'>
            <option value=''>Ninguno</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </select>
        </div>

        <div className='filterDiv'>
          <label className='filterLabel'>Ordenar por peso:</label>
          <select value={ordenPeso} className='filterSelect'>
            <option value=''>Ninguno</option>
            <option value='asc'>Max - Min</option>
            <option value='desc'>Min - Max</option>
          </select>
        </div>
      </div>

      <Paginado
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />

      <div className='cards-container'>
        {currentDogs?.map((dog) => (
          <Card key={dog.id} dog={dog} />
        ))}
      </div>


    </div>
  );
}
