import './Card.css';
import { Link } from 'react-router-dom';

export function Card({ dog }) {
  const { id, image, name, temperament, weight } = dog;

  return (
    <div className='card-dog'>
      <Link to={`/home/${id}`}>
        <img
          src={image}
          alt='Imagen correspondiente a la raza del perro'
          width='340px'
          height='290px'
        />
        <h2>{name}</h2>
        <p>Temperaments: {temperament}</p>
        <p>Weight: {weight}</p>
      </Link>
    </div>
  );
}
