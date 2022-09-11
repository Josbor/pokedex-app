import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getApi } from './helpers/getApi'

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
        <div>
              { 
              pokemones.map(pokemones=>{
                  const {name}=pokemones;
                  return(<p>{name}</p>
                  )
                })
              }

        </div>
         
       
    </div>
  )
}

export default App
