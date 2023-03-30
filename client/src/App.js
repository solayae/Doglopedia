import { Route, BrowserRouter } from 'react-router-dom';

import Card from './components/Card/Card.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import Detail from './views/Detail/Detail.jsx';
import Create from './views/Create/Create.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route path='/home:id' component={Detail} />
        <Route path='/create' component={Create} />

      </div>
    </BrowserRouter>
  );
}

export default App;
