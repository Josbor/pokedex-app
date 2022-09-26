import { pokemonApi } from "../api/pokemonApi";

import { FetchAllTypes, FetchResponsePokemon, pokemon, PokemonsPerType, Result, TypeDetails } from "../models/pokemons.model";

export  const getApi=async ()=>{
    const response =  await pokemonApi.get<FetchResponsePokemon>('/pokemon-species?limit=1500');
    const pokemonList=response.data.results
    const responseType= await pokemonApi.get<FetchAllTypes>('/type')
    const typeList= responseType.data.results
    const PokemonsList=await transformData(typeList,pokemonList).then(e=>e);
     return PokemonsList
    
}


const transformData= async (typeList:Result[],pokemonList:Result[])=>{
    const pokemonPerTYpe:any= await Promise.all(typeList.map(async (type:Result)=>{
        const Arr = type.url.split('/');
        const id= Arr[6]
        const resType=await pokemonApi.get<TypeDetails>(`/type/${id}`)
        return{
            name:type.name,
            pokemons:resType.data.pokemon
        }
    })).then(e=>e);

    const pokemonsList =pokemonList.map(({name,url})=>{
        const Arr = url.split('/');
        const id= Arr[6]
        const type=pokemonPerTYpe.filter(({name,pokemons}:PokemonsPerType)=>(
           pokemons.some(({pokemon})=>pokemon.url.split('/')[6]==id)||false
           )).map((p:any)=>{
            const {slot}=p.pokemons.find((pokemons:any)=>pokemons.pokemon.url.split('/')[6]==id);
            const {name}=p;
            return{
                name,slot
            }
           }).sort((a:any,b:any)=>a.slot-b.slot)
        return {
            id,
            name,
            image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            type
        
        }
    })
   
    
    return pokemonsList
}

export async function getPokeInfo(name:string,estado:any):Promise<any>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`
    const response =  await fetch(url);
    const data = await response.json();
     // se crea nuevo formato
     const format:any= await sortPokeInfo(data);
     storage(format);
     estado(format);
}


function sortPokeInfo(data:any){
    return {
        id:data.id,
        name:data.name,
        image:data.sprites.other['official-artwork'].front_default,
        height:data.height,
        weight:data.weight,
        base_experience: data.base_experience,
        stats:data.stats.map((stats:any)=>({etiqueta:stats.stat.name,value:stats.base_stat})),
        moves:data.moves.map((moves:any)=>(moves.move.name)),
        type: data.types.map((type: any)=>(type.type.name))
    };

}

function storage(data:any){
    if (localStorage.getItem('pokemones')){
        const pokemones:any[]=JSON.parse(localStorage.getItem('pokemones')||"")
        
        if(pokemones.length>0){
            const newPokeArray=[...pokemones,data]
            localStorage.setItem('pokemones',JSON.stringify(newPokeArray))
        }
    }else{
        localStorage.setItem('pokemones',JSON.stringify([data]))
    }
    

}