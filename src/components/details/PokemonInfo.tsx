import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useEffect from 'react';
import './pokemonInfo.component.scss'

const PokemonInfo = () => {
  const location=useLocation() 
  const pokemones=location.state
 
  
  // useEffect(()=>{
  //     // llamado de la api

  // }
    
    
  //   ,[])
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
