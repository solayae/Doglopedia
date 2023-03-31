import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';

import { Cards } from '../../components/Cards/Cards.jsx';
import { Navbar } from '../../components/Navbar/Navbar.jsx';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className='home-contaier'>
      <Navbar />
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;