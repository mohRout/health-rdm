import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ImageList } from '@mui/material';

export default function Navbar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#140B42'}}>
        <Toolbar variant="dense">
            <ImageList>
              <img src='./logo.png' alt='logo' style={{height:'50px',width:'55px',marginLeft:'20px',marginRight:'90px'}}></img>
            </ImageList>
          <Typography variant="h6" color="inherit" component="div"
          sx={{padding:'30px',mr:19}}>
            Home
          </Typography>
          <Typography variant="h6" color="inherit" component="div"
          sx={{mr:20}}>
            Reference Data
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
