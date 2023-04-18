import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTemperaments,
  filterTemperament,
  sortBreedAZ,
  sortWeigth,
  filterBreedOrigin,
} from '../../redux/actions';
import { Card } from '../Card/Card.jsx';
import { Paginado } from '../Paginado/Paginado.jsx';
import './Cards.css';

export function Cards({ allDogs }) {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperament);

  //paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setSorting({
      order: '',
    });
  }, [temperament]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleOrder(event) {
    setSorting({ order: event.target.value });
  }

  // filter state
  const [filter, setFilter] = useState({
    temperament: 'all',
  });

  // ordenar AZ

  const [sorting, setSorting] = useState({
    order: '',
  });

  // reset sorting state when filter changes
  useEffect(() => {
    setSorting({ order: '' });
  }, [filter]);

  //filtra segun temp y pag act
  const currentDogs = allDogs
    .filter((dog) => {
      if (filter.temperament === 'all') return true;
      return dog.temperament?.includes(filter.temperament);
    })
    .sort((a, b) => {
      switch (sorting.order) {
        case 'a-z':
          return a.name.localeCompare(b.name);
        case 'z-a':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    })
    .slice(indexOfFirstDog, indexOfLastDog);

  //actualiza estado filtro temp
  function handleTemperament(temp) {
    temp.preventDefault();
    dispatch(filterTemperament(temp.target.value));
    setFilter({ ...filter, temperament: temp.target.value });
    setCurrentPage(1);
    setSorting({ order: '' });
  }

  //muestra solo los perros necesarios por pagina luego de aplicar el filtro

  const filteredDogs = allDogs.filter((dog) => {
    if (filter.temperament === 'all') return true;
    return dog.temperament?.includes(filter.temperament);
  });

  const totalFilteredDogs = filteredDogs.length;

  return (
    <div className='cards-filters-container'>
      <div className='filters-container'>
        <div className='filterDiv'>
          <label className='filterLabel'>Temperaments:</label>
          <select
            className='filterSelect'
            value={filter.temperament}
            onChange={(temp) => handleTemperament(temp)}
          >
            <option value='all'>All</option>

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
          <label className='filterLabel'>Order alphabetically</label>
          <select
            className='filterSelect'
            value={sorting.order}
            onChange={(event) => setSorting({ order: event.target.value })}
          >
            <option value=''>Select</option>
            <option value='a-z'>A-Z</option>
            <option value='z-a'>Z-A</option>
          </select>
        </div>
      </div>

      <Paginado
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        allDogs={totalFilteredDogs}
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
