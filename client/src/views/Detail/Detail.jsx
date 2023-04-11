import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailDog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className='detail-container'>
      <h1>{detailDog.name}</h1>
      <div className='detail-elements-container'>
        <div className='detail-text-container'>
          <h3>Size </h3>
          <p>
            The {detailDog.name} is a dog that in adulthood measures between{' '}
            {detailDog.height}.
          </p>
          <h3> Weight</h3>
          <p>A dog in good condition should be {detailDog.weight}.</p>
          <h3>Average Lifespan</h3>
          <p>
            With proper care and nutrition can live between{' '}
            {detailDog.life_span}.
          </p>
          <h3>Breed Temperament</h3>
          <p>This breed is characterized by being {detailDog.temperament}.</p>
        </div>
        <div className='detail-img-container'>
          <img
            src={detailDog.image}
            alt={detailDog.name}
            width='500px'
            height='400px'
          />
        </div>
      </div>
    </div>
  );
}
