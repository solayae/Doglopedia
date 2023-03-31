import './Card.css';

export function Card({ dog }) {
  const { image, name, temperament, weight } = dog;

  return (
    <div  className='card-dog'>
      <img src={image} alt='Imagen correspondiente a la raza del perro' width='340px' height='290px' />
      <h2>{name}</h2>
      <p>Temperaments: {temperament}</p>
      <p>Weight: {weight}</p>
    </div>
  );
}
