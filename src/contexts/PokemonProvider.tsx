import React, { useContext, useEffect, useState } from "react";
import { getApi } from "../helpers/getApi";
import { pokelist, pokemones } from "../models/pokemons";

//states
 export const pokemonsContext=React.createContext<pokemones[]>([]);
 export const pokemonContext=React.createContext(null);
//methods
export const getPokemonsContext=React.createContext<any>(null);
export const getPokemonInfoContext=React.createContext<any>(null);


// export function usePokemonsContext() {
//     return useContext(pokemonsContext);
// }

// export function usePokemonContext() {
//     return useContext(pokemonContext);
// }

// export function useGetPokemonsContext() {
//     return useContext(getPokemonsContext);
// }

// export function useGetPokemonInfoContext() {
//     return useContext(getPokemonInfoContext);
// }



export function PokemonProvider(props:any){
    console.log('PokemonProvider') 
    const url:string='https://pokeapi.co/api/v2/pokemon?limit=20&offset=20';
   
    const [pokemonslist,setPokemonsList]=useState<pokelist[]>([]);
    const [pokemon,setPokemon]=useState<any>({});
    const [pokemonsObject,setPokemonsObject]=useState<pokemones[] >([])
    
    useEffect(()=>{
        if (pokemonslist){
            console.log('entro en effect')
           getAllPokemonsFlter(pokemonslist);
            
         }
    },[pokemonslist]);

    const getAllPokemonsFlter= async (results:any[])=>{
       const  pokemonObjectfilter:any[]=await results.map( async (result:any) => {
            
            const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`);
            const data=await res.json();
            
            // se crea nuevo formato
            const format:pokemones= await {
                    id: await data.id,
                    name:await data.name,
                    image:await data.sprites.other['official-artwork'].front_default
                   }
            return (await format)       });
        Promise.all(pokemonObjectfilter).then(p=>setPokemonsObject(p))
                   
    }
    // revisar bien el provider ,esta entrando en bucle

    const getPokemonInfo=async(name:string)=>{
        if (Object.keys(pokemon).length<1){
            const url=`https://pokeapi.co/api/v2/pokemon/${name}`
            const res=await fetch(url);
            const data=await res.json();
            setPokemon(await data)
            
        }
    }
    

    const getAllPokemons= ()=>{
      if (pokemonslist.length<1)  getApi(url,setPokemonsList);
      }
    getAllPokemons()
    return (
        <React.StrictMode>
        <pokemonsContext.Provider value={pokemonsObject}>
            <pokemonContext.Provider value={pokemon}>
                <getPokemonsContext.Provider value={getAllPokemons}>
                    <getPokemonInfoContext.Provider value={getPokemonInfo}>
                        {props.children}
                    </getPokemonInfoContext.Provider>
                </getPokemonsContext.Provider>
            </pokemonContext.Provider>
        </pokemonsContext.Provider>
        </React.StrictMode>

    );

    
}