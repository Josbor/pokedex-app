import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonInfoContext, pokemonContext } from '../contexts/PokemonProvider'

const PokemonInfo = () => {
  const {name}= useParams() 
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
