import { pokemones } from "../models/pokemons";

export async function getApi(url:string,estado:any):Promise<any>{
    const response =  await fetch(url);
    const data = await response.json();
   
    estado(data.results?data.results:data);
}


export async function getPokeInfo(url:string,estado:any):Promise<any>{
    const response =  await fetch(url);
    const data = await response.json();
     // se crea nuevo formato
     const format:pokemones= await {
        id: await data.id,
        name:await data.name,
        image:await data.sprites.other['official-artwork'].front_default
       }
     estado(format)
}
