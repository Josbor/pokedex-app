import { QueryClient, useQuery,useQueryClient } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react'
import { getApi } from '../helpers/getApi';
import { pokemon as pokemonObjecto } from '../models/pokemons.model';
import Loader from './loader/loader';
import Pokemon from './pokemon/pokemon';

const pokemones = () => {
  
    const datos= useQueryClient();
    const {data:pokemonList,status}=useQuery(['pokemonList'],getApi);
    console.log(datos.getQueryData(['pokemonList']))
    const {body}=document;
  
  useEffect(()=>{
    body.classList.remove("pokemonType");
  },[])

  if (status=='loading') return <Loader/>
  
    return (
    <div>
        <div className='container_pokemons'>
                      { 
                      
                      pokemonList?.map(pokemon=>{
                  
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
