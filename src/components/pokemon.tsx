import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {  getPokeInfo } from '../helpers/getApi';

import { pokecolors } from '../data/colors';

const pokemon = ({ pokemon }: any) => {
    ;
    const [pokemonInfo,setPokemonInfo]=useState<any>()
    const navigate=useNavigate()
    const style=document.documentElement.style
    useEffect(()=>{
        getPokeInfo(pokemon.url,setPokemonInfo);
    },[])

    useEffect(()=>{
       //if (pokemonInfo) style.setProperty('--main_type',pokecolors[`${pokemonInfo.type[0]}`])
       if (pokemonInfo) console.log(pokecolors[`${pokemonInfo.type[0]}`])
        
        //style.setProperty('$main_type',`$${pokemonInfo.type[0]}`)
    },[pokemonInfo])
    const _submitPokemon=()=>{
        navigate(`/PokemonInfo/${pokemonInfo.name}`,{state:pokemonInfo})
    }
    
    return (

        // <Link to={`/PokemonInfo/${pokemones.name}`}>
            <div className='container_pokemon' onClick={_submitPokemon}>
                <img src={pokemonInfo?.image} alt="" />
                <div className='container_info'>
                    <h2>{pokemonInfo?.name}</h2>
                    
                </div>
                
            

        </div>
        // </Link>
    )
}


export default pokemon
