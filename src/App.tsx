import './App.css'
import {Link} from  'react-router-dom' 
import Routing from './routing';
import ResponsiveAppBar from './components/navbar/appbar';
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';

const pokemonClient=new QueryClient()

function App() {
  
  return (
    <div  >
      
       <QueryClientProvider client={pokemonClient}>
       <ResponsiveAppBar/>       
       <div className='main_container'>
       <Routing/>
       </div>
       <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     
       
      
         
       
    </div>
  )
}

export default App
