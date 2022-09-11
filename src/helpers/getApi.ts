export async function getApi(url:string,estado:any):Promise<any>{
    const response=  await fetch(url);
    const data = await response.json();
   
    if (data) return estado(data.results);
}
