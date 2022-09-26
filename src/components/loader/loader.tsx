import { CircularProgress, Dialog, DialogContent } from '@mui/material';
import React from 'react'
import Loading from '../../img/loading.gif'
import './loader.component.scss'

const Loader = () => {
   
        const [open, setOpen] = React.useState(true);
      
        
        const handleClose = () => {
          setOpen(false);
        };
        debugger;
        return (
          
            <Dialog
              open={open}
              onClose={handleClose}
                style={{backgroundColor:'none!important'}}
                
            >
             <DialogContent style={{backgroundColor:'none!important'}}>
             <img src={Loading}  />
              <h2>Loading...</h2>
              
             </DialogContent>
              
              
            </Dialog>
          
        );
      }

export default Loader
