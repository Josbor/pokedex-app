import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getPokemonInfoContext, pokemonContext } from '../contexts/PokemonProvider'
import useEffect from 'react';

const PokemonInfo = () => {
  const location=useLocation() 
  const pokemones=location.state
  
  // useEffect(()=>{
  //     // llamado de la api

  // }
    
    
  //   ,[])

  
  const getpokeInfo=useContext(getPokemonInfoContext)
  const pokeInfo=useContext(pokemonContext)
  getpokeInfo(name);
  return (
    <div className='container_pokemon' >
                <img src={pokemones.image} alt="" />
                <div className='container_info'>
                    <h2>{pokemones.name}</h2>
                    
                </div>
            

        </div>
  )
}

export default PokemonInfo
