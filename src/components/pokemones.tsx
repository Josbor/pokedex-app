import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { getApi } from '../helpers/getApi';
import { pokemon as pokemonObjecto } from '../models/pokemons.model';
import Pokemon from './pokemon/pokemon';

const pokemones = () => {
    //const url:string='https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
    const url:string='https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0.'
    const [PokemonsObject,setpokemonObject]=useState<any[]|null>()

    useEffect(()=>{
      getApi(url,setpokemonObject);

    },[])
    
    return (
    <div>
        <div className='container_pokemons'>
                      { 
                      PokemonsObject?
              PokemonsObject?.map(pokemon=>{
                  
                  return(
                    <Pokemon
                    key={pokemon.name}
                    pokemon={pokemon}
                    />
                  )
                }):
                <CircularProgress />
              }

        </div>
    </div>
  )
}

export default pokemones
