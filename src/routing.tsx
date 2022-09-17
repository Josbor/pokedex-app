import { Route, Routes } from 'react-router-dom'
import Details from './components/details'
import Pokemon from './components/pokemon'
import Pokemones from './components/pokemones'

const routing = () => {
  return (
 
       <Routes>
          <Route path='/' element={<Pokemones/>}/>
          <Route path='/Details' element={<Details/>}/>


       </Routes>
      
   
  )
}

export default routing
