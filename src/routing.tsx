import { Route, Routes } from 'react-router-dom'
import PokemonInfo from './components/details/PokemonInfo'
//import Pokemon from './components/pokemon'
import Pokemones from './components/pokemones'

const routing = () => {
  return (
 
       <Routes>
          <Route path='/' element={<Pokemones/>}/>
          <Route path='/PokemonInfo/:name' element={<PokemonInfo/>}/>


       </Routes>
      
   
  )
}

export default routing
