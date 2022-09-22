import { pokemon } from "../models/pokemons";

export async function getApi(url:string,estado:any):Promise<any>{
    const response =  await fetch(url);
    const data = await response.json();
   
    estado(data.results?data.results:data);
}


export async function getPokeInfo(url:string,estado:any):Promise<any>{
    const response =  await fetch(url);
    const data = await response.json();
     // se crea nuevo formato
     const format:any= await sortPokeInfo(data);
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