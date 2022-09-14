export async function getApi(url:string,estado:any):Promise<any>{
    const response:any=  await fetch(url);
    const data:any = await response.json();
   
    if (data) return estado(data.results?data.results:data);
}
