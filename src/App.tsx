import './App.css'
import {Link} from  'react-router-dom'
import Routing from './routing';
import ResponsiveAppBar from './components/appbar';


function App() {
 
  return (
    <div >
       <ResponsiveAppBar/>       
       <Link to='/'>Home</Link>
       <Link to='/Details'>Details</Link>
       <div className='main_container'>
       <Routing/>
       </div>
     
       
      
         
       
    </div>
  )
}

export default App
