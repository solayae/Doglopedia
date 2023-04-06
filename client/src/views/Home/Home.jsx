import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByName, getDogs } from '../../redux/actions';

import { Cards } from '../../components/Cards/Cards.jsx';
import { Navbar } from '../../components/Navbar/Navbar.jsx';

import "./Home.css"

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [searchString, setSearchString] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className='home-container'>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allDogs={allDogs} />
    </div>
  );
}

export default Home;
