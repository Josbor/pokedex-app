import React, { useContext, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useEffect from 'react';
import './pokemonInfo.component.scss'
import { PokemonBasicInfo } from '../../models/pokemons.model';
import { Box, Paper } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { pokecolors } from '../../data/colors';
import { getPokeInfo } from '../../helpers/getApi';
import Loader from '../loader/loader';


const PokemonInfo = () => {
  //const [themeColor,setThemeColor]=useState<any>()
  
  const location=useLocation();
   
  const {id,name,image,type}:PokemonBasicInfo=location.state;
  const {data:pokemonInfo,status}=useQuery(['pokemonInfo'],()=>getPokeInfo(id));
  const [tab, setTab] = React.useState('1');
  
  if (status=='loading') return <Loader/>
  if (status=='success') console.log(pokemonInfo)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }
   const color=pokecolors[`${type[0].name}`]
  // setThemeColor({backgroundColor:`${color}`})

 const {body}=document;
 body.classList.add("pokemonType")
 document.documentElement.style.setProperty("--pokemonType",color)

 const changeBackground=()=>{
   body.classList.remove("pokemonType");

 }
 return (
        <div className='pokemon_details' >
               <div className='header_details'>
                <div><h1>{name}</h1></div>
                <div><h2>#{id.length==1?`00${id}`:id.length==2?`0${id}`:id}</h2></div>
               </div>
               <div className='image_details'>
               <img src={image} alt="" />
               </div>
                
                <div className='container_info'>
                    <Box className='container_detalles'>
                        <TabContext value={tab}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                          </TabList>
                        </Box>
                        <TabPanel value="1"><button onClick={changeBackground}>cambiar</button></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                      </TabContext>
                    </Box>
                </div>
            

        </div>
  )
}

export default PokemonInfo
