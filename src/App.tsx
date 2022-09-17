import './App.css'
import {Link} from  'react-router-dom'
import Routing from './routing';

function App() {
 
  return (
    <div className="App">
              
       <Link to='/'>Home</Link>
       <Link to='/Details'>Details</Link>
        
       <Routing/>
      
         
       
    </div>
  )
}

export default App
