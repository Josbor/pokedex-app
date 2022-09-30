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
    
    // useEffect(()=>{
      
    //   //   if (localStorage.getItem('pokemones')){
    //   //     const pokemones:any[]=JSON.parse(localStorage.getItem('pokemones')||"")
    //   //     const pokemonesFilter= pokemones.sort((a,b)=>a.id-b.id)
    //   //     console.log(pokemonesFilter)
    //   //     setpokemonObject(pokemonesFilter);
    //   // }else{
    //     getApi().then(e=>setpokemonObject(e));
      
      

    // },[])
    
    return (
    <div>
        <div className='container_pokemons'>
                      { 
                      pokemonList?
                      pokemonList?.map(pokemon=>{
                  
                  return(
                    <Pokemon
                    key={pokemon.name}
                    pokemon={pokemon}
                    />
                  )
                }):
                <Loader/>
              }
             

        </div>
    </div>
  )
}

export default pokemones
