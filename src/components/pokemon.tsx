import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { getApi } from '../helpers/getApi';

const pokemon = ({ pokemones }: any) => {
    const navigate=useNavigate()
    
    const _submitPokemon=()=>{
        navigate(`/PokemonInfo/${pokemones.name}`,{state:pokemones})
    }
    return (

        // <Link to={`/PokemonInfo/${pokemones.name}`}>
            <div className='container_pokemon' onClick={_submitPokemon}>
                <img src={pokemones.image} alt="" />
                <div className='container_info'>
                    <h2>{pokemones.name}</h2>
                    
                </div>
            

        </div>
        // </Link>
    )
}

export default pokemon
