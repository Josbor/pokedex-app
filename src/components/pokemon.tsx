import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getApi } from '../helpers/getApi';

const pokemon = ({ pokemones }: any) => {


    return (

        <Link to={`/PokemonInfo/${pokemones.name}`}>
            <div className='container_pokemon'>
                <img src={pokemones.image} alt="" />
                <div className='container_info'>
                    <h2>{pokemones.name}</h2>
                    
                </div>
            

        </div>
        </Link>
    )
}

export default pokemon
