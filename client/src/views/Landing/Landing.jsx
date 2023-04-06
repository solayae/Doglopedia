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
          src='https://stickerly.pstatic.net/sticker_pack/CywitGCGNigg6dFKUxGdAg/B0TFVE/3/ea43ce81-6cb2-479d-8c2e-fadd443af6f6.png'
          alt='dogs-breeds'
          width='550px'
        />
      </div>
    </div>
  );
}
