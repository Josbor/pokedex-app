import './App.css'
import {Link} from  'react-router-dom'
import Routing from './routing';
import ResponsiveAppBar from './components/navbar/appbar';



function App() {
      
  return (
    <div >
      
       <ResponsiveAppBar/>       
       <div className='main_container'>
       <Routing/>
       </div>
     
       
      
         
       
    </div>
  )
}

export default App
