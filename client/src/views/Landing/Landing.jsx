import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  return (
    <div className='container-landing'>
      <div className='container-text'>
        <h1>List of All Kinds of Dog Breeds</h1>
        <p>
          From tiny French Bulldogs to giant Great Danes, our dog breed gallery
          has everything you need to know about your favourite dog breed!
        </p>
        <Link to='/home'>
          <button className='button-landing'>Enter</button>
        </Link>
      </div>
      <div className='container-image'>
        <img
          src='https://dogplus.cl/wp-content/uploads/2021/09/dog-plus-dog-black.png'
          alt='dogs-breeds'
          width='350px'
        />
      </div>
    </div>
  );
}
