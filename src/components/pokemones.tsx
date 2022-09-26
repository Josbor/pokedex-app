import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { getApi } from '../helpers/getApi';
import { pokemon as pokemonObjecto } from '../models/pokemons.model';
import Loader from './loader/loader';
import Pokemon from './pokemon/pokemon';

const pokemones = () => {
    const [PokemonsObject,setpokemonObject]=useState<any[]|null>()

    useEffect(()=>{
      
        if (localStorage.getItem('pokemones')){
          const pokemones:any[]=JSON.parse(localStorage.getItem('pokemones')||"")
          const pokemonesFilter= pokemones.sort((a,b)=>a.id-b.id)
          console.log(pokemonesFilter)
          setpokemonObject(pokemonesFilter);
      }else{
        getApi().then(e=>setpokemonObject(e));
      }
      

    },[])
    
    return (
    <div>
        <div className='container_pokemons'>
                      {/* { 
                      PokemonsObject?
              PokemonsObject?.map(pokemon=>{
                  
                  return(
                    <Pokemon
                    key={pokemon.name}
                    pokemon={pokemon}
                    />
                  )
                }):
                <Loader/>
              } */}
              <Loader/>

        </div>
    </div>
  )
}

export default pokemones
