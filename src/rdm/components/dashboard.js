
import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'


const Dashboard = () => {
  return (
    <Box>
        <Typography variant='h5'>
            
       <h1 style={{textAlign:'center', marginBottom:'100px'}}> Welcome  to the Reference Data Management  System</h1>
       <Container>
         <h4>Quick Status :</h4>
         <p>Active Records : 120</p>
         <p>Last Updated : 10/11/2024</p>
         <h4>Manage Data</h4>
         <Button sx={{height:'40px',width:'120px',backgroundColor:'#140B42',color:'#ffffff',marginRight:'20px'}}>
         View Data
         </Button>
         <Button sx={{height:'40px',width:'120px',backgroundColor:'#140B42',color:'#ffffff'}}>
          Add New Data
         </Button>
       </Container>
        </Typography>
    </Box>
  )
}

export default Dashboard