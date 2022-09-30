import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import React from 'react'
import Loading from '../../img/loading2.gif'
import './loader.component.scss'
//import Loading  from './loading/loading';

const Loader = () => {
   
        const [open, setOpen] = React.useState(true);
      
        
        return (
          
            <Dialog
              open={open}
              PaperProps={{elevation:0,color:'none',variant:'elevation'}}
            >
             <DialogContent className='container_loader'>
              <div className='loader'>
              <img src={Loading}  />
          
              <h2>Loading...</h2>
              </div>
             </DialogContent>
              
            </Dialog>
          
        );
      }

export default Loader
