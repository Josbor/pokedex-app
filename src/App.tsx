import './App.css'
import {Link, BrowserRouter,Route, Routes} from  'react-router-dom' 
//import Routing from './routing';
import ResponsiveAppBar from './components/navbar/appbar';
import Pokemones from './components/pokemones'
import PokemonInfo from './components/details/PokemonInfo'
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';

const pokemonClient=new QueryClient()

function App() {
  
  return (
    <div className='main_container' >
      
       <QueryClientProvider client={pokemonClient}>
       <ResponsiveAppBar/>       
          <Routes>
              <Route  path='/' element={<Pokemones/>}/>
              <Route path='/PokemonInfo/:name' element={<PokemonInfo/>}/>
          </Routes>
       <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     
       
      
         
       
    </div>
  )
}

export default App
