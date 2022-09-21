import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {  getPokeInfo } from '../helpers/getApi';

const pokemon = ({ pokemon }: any) => {
    console.log(pokemon);
    const [pokemonInfo,setPokemonInfo]=useState<any>()
    const navigate=useNavigate()
    
    useEffect(()=>{
        getPokeInfo(pokemon.url,setPokemonInfo);
    },[])
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
