import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, filterTemperament } from '../../redux/actions';
import { Card } from '../Card/Card.jsx';
import { Paginado } from '../Paginado/Paginado.jsx';
import './Cards.css';

export function Cards({ allDogs }) {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperament);
  const copyDogs = useSelector((state) => state.copyDogs);

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
    dispatch(getTemperaments());
  }, [dispatch]);

  const [order, setOrder] = useState('');

  //reload-----
  const [reload, setReload] = useState({
    sort: '',
    breed: '',
    temperament: 'all',
    weight: '',
    search: '',
  });

  //----filter temperamento------
  function handleTemperament(temp) {
    temp.preventDefault();
    dispatch(filterTemperament(temp.target.value));
    setOrder(`Order by activities : ${temp.target.value}`);
    setReload({ temp: temp.target.value });
    setReload({ breed: '' });
    setCurrentPage(1);
  }

  return (
    <div className='cards-filters-container'>
      <div className='filters-container'>
        {/* TEMPERAMENTOS */}
        <div className='filterDiv'>
          <label className='filterLabel'>Temperamentos:</label>
          <select
            className='filterSelect'
            value={reload.temperament}
            onChange={(temp) => handleTemperament(temp)}
          >
            <option value='all'>Todos</option>

            {temperament
              ?.filter((f) => f.name !== '')
              .sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
              .map((temperamento) => (
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
        {copyDogs?.map((dog) => (
          <Card key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
}
