import React, { useEffect, useState } from 'react'
import { getApi } from '../helpers/getApi';
import Pokemon from './pokemon';

const pokemones = () => {
    const url:string='https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'

    const [pokemones,setPokemones]=useState<any[]>([]);
  
     useEffect(
        
       () =>{
       
        getApi(url,setPokemones);
  
       
      },[]
  );
  
  
    return (
    <div>
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

export default pokemones
