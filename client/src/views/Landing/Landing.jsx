import React from 'react';
import { useHistory } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/home');
  };
  return (
    <div className='container-landing'>
      <div className='container-text'>
        <h1>List of All Kinds of Dog Breeds</h1>
        <p>
          From tiny French Bulldogs to giant Great Danes, our dog breed gallery
          has everything you need to know about your favourite dog breed!
        </p>
        <button className='button-landing' onClick={handleButtonClick}>Enter</button>
      </div>
      <div className='container-image'>
        <img
          src='https://assets.stickpng.com/images/580b57fbd9996e24bc43bbd7.png'
          alt='dogs-breeds'
          width='550px'
        />
      </div>
    </div>
  );
}
