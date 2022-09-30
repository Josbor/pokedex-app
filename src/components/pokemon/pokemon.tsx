import React, { lazy, useEffect, useState,Suspense } from 'react'
import { useNavigate } from 'react-router-dom';
//import {  getPokeInfo } from '../../helpers/getApi';
import './pokemon.component.scss'
import { pokecolors } from '../../data/colors';
import { CircularProgress } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { display } from '@mui/system';

const pokemon = ({ pokemon }: any) => {
    const{name,image,type}=pokemon;
    const [themeColor,setThemeColor]=useState<any>('')
    const [toggle,setToggle]=useState<any>(false)
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
                    
           
            <div className='container_pokemon' onClick={_submitPokemon} style={{display:`${!toggle?'none':'block'}`}} >
              
                <img src={image} alt="" onLoad={()=>setToggle(true)} />
                
                <div className='container_info' style={themeColor!?themeColor:{}}>
                    <h2>{name}</h2>
                    
                </div>
            </div>
          
        
            

            
            </>  
        
    )
}


export default pokemon
