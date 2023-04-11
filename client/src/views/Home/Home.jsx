import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';

import { Cards } from '../../components/Cards/Cards.jsx';
import { Navbar } from '../../components/Navbar/Navbar.jsx';

import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  
  const [filtered, setFiltered] = useState(allDogs);
  const [searchString, setSearchString] = useState('');

  function handleChange(e) {
    e.preventDefault();
    const { value } = e.target;
    setSearchString(value);
    if (!value) {
      setFiltered(allDogs);
    }
  }

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    const filtered = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFiltered(filtered);
  }, [allDogs, searchString]);

  return (
    <div className='home-container'>
      <Navbar handleChange={handleChange} />
      <Cards allDogs={filtered} />
    </div>
  );
}

export default Home;
