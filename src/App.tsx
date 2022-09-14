import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getApi } from './helpers/getApi'
import Pokemon from './components/pokemon'

function App() {
  const url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'

  const [pokemones,setPokemones]=useState([]);

   useEffect(
      
     () =>{
     
      getApi(url,setPokemones);

     
    },[]
);
  return (
    <div className="App">
        <div className='container_pokemons'>
              { 
              pokemones.map(pokemones=>{
                  
                  return(
                    <Pokemon
                    key={pokemones.name}
                    pokemones={pokemones}
                    />
                  )
                })
              }

        </div>
         
       
    </div>
  )
}

export default App
