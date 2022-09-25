import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  getPokeInfo } from '../../helpers/getApi';
import './pokemon.component.scss'
import { pokecolors } from '../../data/colors';
import { CircularProgress } from '@mui/material';

const pokemon = ({ pokemon }: any) => {
    ;
    const [pokemonInfo,setPokemonInfo]=useState<any>()
    const [themeColor,setThemeColor]=useState<any>('')
    const navigate=useNavigate()
    
    useEffect(()=>{
        if (pokemon.image)setPokemonInfo(pokemon);
        else getPokeInfo(pokemon.name,setPokemonInfo);
    },[])
    useEffect(()=>{
       if (pokemonInfo) {
            const color=pokecolors[`${pokemonInfo.type[0]}`]
             setThemeColor({backgroundColor:`${color}`})
        
        }
       
        
    },[pokemonInfo])
    const _submitPokemon=()=>{
        navigate(`/PokemonInfo/${pokemonInfo.name}`,{state:pokemonInfo})
    }
    
    return (

            <>        
                    
            {pokemonInfo?
            <div className='container_pokemon' onClick={_submitPokemon}  >
                <img src={pokemonInfo.image} alt="" />
                <div className='container_info' style={themeColor!?themeColor:{}}>
                    <h2>{pokemonInfo?.name}</h2>
                    
                </div>
            </div>
            :
            <CircularProgress />

            }
            </>  
        
    )
}


export default pokemon
