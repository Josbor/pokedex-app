export interface pokemon{
    id:number,
    name:string,
    image:string
    height:number,
    weight:number,
    base_experience:number,
    stats:any,
    moves:string[],
    type:string[]
}

export interface pokelist{
    name:string,
    url:string
}

 interface stats{
    etiqueta:string,
    value:number
 }