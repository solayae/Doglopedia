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

  const [order, setOrder] = useState('');

  //reload-----
  const [reload, setReload] = useState({
    sort: '',
    breed: '',
    weight: '',
    search: '',
  });

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

  // reset sorting state when filter changes
  useEffect(() => {
    setSorting({ order: '' });
  }, [filter]);

  const [breedOriginFilter, setBreedOriginFilter] = useState('all');

  // ordenar AZ
  const [sorting, setSorting] = useState({
    order: '',
  });

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

  // FILTRAR POR ORIGEN

  // function handleFilterBreedOrigin(e) {
  //   dispatch(filterBreedOrigin(e.target.value));
  // }

  function handleFilterBreedOrigin(e) {
    dispatch(filterBreedOrigin(e.target.value));
    setBreedOriginFilter(e.target.value); // actualizar estado del filtro
    setCurrentPage(1);
  }

  //ORDENAR POR PESO
  function handleSortWeigth(sorteandoWeigth) {
    sorteandoWeigth.preventDefault();
    dispatch(sortWeigth(sorteandoWeigth.target.value)); // se ejecuta y toma como payload el valor del click del usuario
    setOrder(`Order by abc : ${sorteandoWeigth.target.value}`);
    setReload({ sorteandoWeigth: sorteandoWeigth.target.value });
  }

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

        <div className='filterDiv'>
          <label className='filterLabel'>Filter by origin</label>
          <select
            className='filterSelect'
            // value={reload.breed}
            onChange={(e) => handleFilterBreedOrigin(e)}
          >
            <option value=''>Select</option>
            <option value='all'>All</option>
            <option value='db'>Created</option>
            <option value='api'>Existentes</option>
          </select>
        </div>

        <div className='filterDiv'>
          <label className='filterLabel'>Filter by Weight</label>
          <select
            className='filterSelect'
            onChange={(sortWeigth) => handleSortWeigth(sortWeigth)}
          >
            <option value=''>⇅</option>
            <option value='high'>high</option>
            <option value='low'>low</option>
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
