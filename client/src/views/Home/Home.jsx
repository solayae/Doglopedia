import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';


import { Cards } from '../../components/Cards/Cards.jsx';
import { Navbar } from '../../components/Navbar/Navbar.jsx';

import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  //busqueda
  const [filtered, setFiltered] = useState(allDogs);
  const [searchString, setSearchString] = useState('');


  // actualiza el estado searchString
  function handleChange(e) {
    e.preventDefault();
    const { value } = e.target;
    setSearchString(value);
    if (!value) {
      setFiltered(allDogs);
    }
  }
  //filtrar la lista de perros
  useEffect(() => {
    const filtered = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFiltered(filtered);
  }, [allDogs, searchString]);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);



  return (
    <div className='home-container'>
      <Navbar handleChange={handleChange} />
      <Cards allDogs={filtered} />
    </div>
  );
}

export default Home;
