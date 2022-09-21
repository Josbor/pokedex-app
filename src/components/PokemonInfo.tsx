import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useEffect from 'react';

const PokemonInfo = () => {
  const location=useLocation() 
  const pokemones=location.state
  console.log("🚀 ~ file: PokemonInfo.tsx ~ line 9 ~ PokemonInfo ~ pokemones", pokemones)
  
  // useEffect(()=>{
  //     // llamado de la api

  // }
    
    
  //   ,[])
  console.log("🚀 ~ file: PokemonInfo.tsx ~ line 7 ~ PokemonInfo ~ pokemones", location.state)

  
  

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
