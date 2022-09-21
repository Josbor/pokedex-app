import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getPokemonInfoContext, pokemonContext } from '../contexts/PokemonProvider'

const PokemonInfo = () => {
  const location=useLocation() 
  console.log("🚀 ~ file: PokemonInfo.tsx ~ line 7 ~ PokemonInfo ~ pokemones", location.state.pokemones)

  
  const getpokeInfo=useContext(getPokemonInfoContext)
  const pokeInfo=useContext(pokemonContext)
  getpokeInfo(name);
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}

export default PokemonInfo
