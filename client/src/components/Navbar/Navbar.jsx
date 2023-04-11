import './Navbar.css';
export function Navbar({ handleChange }) {
  return (
    <div className='navbar'>
      <input
        className='searchDiv'
        type='search'
        placeholder='Buscar'
        onChange={handleChange}
      />
    </div>
  );
}
