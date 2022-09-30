import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useEffect from 'react';
import './pokemonInfo.component.scss'
import { PokemonBasicInfo } from '../../models/pokemons.model';
import { Box, Paper } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useQueryClient } from '@tanstack/react-query';


const PokemonInfo = () => {
  const location=useLocation() 
  const {id,name,image,type,}:PokemonBasicInfo=location.state
  const [tab, setTab] = React.useState('1');
    const datos=useQueryClient();
    console.log(datos.getQueryData(['pokemonList']))
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }
 return (
        <div className='pokemon_details' >
               <div className='header_details'>
                <div><h1>{name}</h1></div>
                <div><h2>#00{id}</h2></div>
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
                        <TabPanel value="1">holi</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                      </TabContext>
                    </Box>
                </div>
            

        </div>
  )
}

export default PokemonInfo
