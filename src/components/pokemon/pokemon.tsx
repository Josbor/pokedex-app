import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import {  getPokeInfo } from '../../helpers/getApi';
import './pokemon.component.scss'
import { pokecolors } from '../../data/colors';
import { CircularProgress } from '@mui/material';

const pokemon = ({ pokemon }: any) => {
    const{name,image,type}=pokemon;
    const [themeColor,setThemeColor]=useState<any>('')
    const navigate=useNavigate()
    
    useEffect(()=>{
       
            const color=pokecolors[`${type[0].name}`]
             setThemeColor({backgroundColor:`${color}`})
        
        
       
    },[])
   
    const _submitPokemon=()=>{
        navigate(`/PokemonInfo/${name}`,{state:pokemon})
    }
    
    return (

            <>        
                    
           
            <div className='container_pokemon' onClick={_submitPokemon}  >
                <img src={image} alt="" />
                <div className='container_info' style={themeColor!?themeColor:{}}>
                    <h2>{name}</h2>
                    
                </div>
            </div>
            

            
            </>  
        
    )
}


export default pokemon
