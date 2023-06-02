import { Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import Detail from './views/Detail/Detail.jsx';
import Create from './views/Create/Create.jsx';
import axios from 'axios';
axios.defaults.baseURL = 'https://doglopedia-production.up.railway.app/'

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/home/:id' component={Detail} />
    </>
  );
}

export default App;
