import React, { useContext, useEffect, useState } from 'react'
//import { getPokemonsContext, pokemonsContext } from '../contexts/PokemonProvider';
import { getApi } from '../helpers/getApi';
import { pokemones as pokemonObjecto } from '../models/pokemons';
import Pokemon from './pokemon';
//import {pokemones} from '../models/pokemons'
const pokemones = () => {
    const url:string='https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
   // const getAllPokemons=useContext(getPokemonsContext);
    //getAllPokemons()
    //const pokemonContext=useContext<pokemonObjecto[]>(pokemonsContext)
    const [PokemonsObject,setpokemonObject]=useState<any[]|null>()

    useEffect(()=>{
      getApi(url,setpokemonObject);

    },[])
    
    return (
    <div>
        <div className='container_pokemons'>
                      { 
              PokemonsObject?.map(pokemon=>{
                  
                  return(
                    <Pokemon
                    key={pokemon.name}
                    pokemon={pokemon}
                    />
                  )
                })
              }

        </div>
    </div>
  )
}

export default pokemones
