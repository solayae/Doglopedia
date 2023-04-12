import './Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar({ handleChange }) {
  return (
    <div className='navbar'>
      <input
        className='searchDiv'
        type='search'
        placeholder='Search'
        onChange={handleChange}
      />
     <Link to="/create">
      <button>Create new breed</button>
    </Link>
    </div>
  );
}
