import { Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Landing from './views/Landing/Landing.jsx';
import Detail from './views/Detail/Detail.jsx';
import Create from './views/Create/Create.jsx';

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/home/:id' component={Detail} />
    </>
  );
}

export default App;
