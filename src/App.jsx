
import { Link } from 'react-router-dom';
import './App.css';

import Coustamrouts from './routs/Coustamrouts';

function App() {
  return (
 <div className='poke'>
 
 <h1 id="heading"> 
 <Link to="/ "> pokedex</Link></h1>   
 <Coustamrouts/>
  
 </div>
  );
}

export default App;
