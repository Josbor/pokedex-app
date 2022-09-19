import './App.css'
import {Link} from  'react-router-dom'
import Routing from './routing';
import { PokemonProvider } from './contexts/PokemonProvider';

function App() {
 
  return (
    <div className="App">
              
       <Link to='/'>Home</Link>
       <Link to='/Details'>Details</Link>
        <PokemonProvider>
          <Routing/>
        </PokemonProvider>
       
      
         
       
    </div>
  )
}

export default App
