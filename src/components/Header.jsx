import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header= () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#FFF7E2', padding: '10px 0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', color: '#1a5245', fontFamily: 'Poppins, Arial, sans-serif',fontSize: '2vw', letterSpacing: '1px' }}
        >
          AMRUTAM
        </Typography>

        
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ fontSize: '1.2vw', color: '#333', cursor: 'pointer',fontFamily: 'Poppins, Arial, sans-serif' }}>
            Home
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2vw', color: '#1a5245', cursor: 'pointer',fontWeight:'bold' ,fontFamily: 'Poppins, Arial, sans-serif'}}>
            Find Doctors
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2vw', color: '#333', cursor: 'pointer',fontFamily: 'Poppins, Arial, sans-serif' }}>
            About Us
          </Typography>
        </Box>

        
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#1a5245',
              color: '#1a5245',
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: 'rgba(26, 82, 69, 0.1)',
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#1a5245',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: '#155636',
              },
            }}
          >
            Sign-up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
