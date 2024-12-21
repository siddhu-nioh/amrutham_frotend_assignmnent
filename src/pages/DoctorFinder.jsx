import { LocationOn } from '@mui/icons-material';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,Chip
} from '@mui/material';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import React from 'react';
import {useState} from 'react'
import DoctorCard from '../components/DoctorCard';
import { Divider } from '@mui/material';
const FindDoctors = () => {
    const [filters, setFilters] = useState([
        { label: 'Hair care', id: 'hair-care' },
        { label: 'Female', id: 'female' },
        { label: 'Rs.0-Rs.500', id: 'fee' },
        { label: 'Hindi', id: 'language' },
      ]);
    
      const handleDeleteFilter = (id) => {
        setFilters(filters.filter((filter) => filter.id !== id));
      };
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          minHeight: '5vh',
          backgroundColor: '#E8F5E9', // Light green background
          padding: '0.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Background Ellipses */}
        <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        <Box
          sx={{
            position: 'absolute',
            top: '-30%',
            left: '10%',
            width: '100px',
            height: '100px',
            backgroundColor: '#A5D6A7',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '-30%',
            left: '90%',
            width: '100px',
            height: '100px',
            backgroundColor: '#C8E6C9',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            width: '150px',
            height: '150px',
            backgroundColor: '#A5D6A7',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-30%',
            left: '2.5%',
            width: '125px',
            height: '125px',
            backgroundColor: '#C8E6C9',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
</motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '1rem', zIndex: 1 }}
        >
          <h1
            style={{
              fontSize: '1.5rem',
              color: '#000',
              fontWeight: '400',
              fontFamily: 'Poppins, Arial, sans-serif',
            }}
          >
            Find Expert Doctors For An In-Clinic Session Here
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            
            zIndex: 1,
          }}
        >
          <FormControl sx={{ minWidth: 200 ,height: '2.5vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2.5vw', // Adjust input height
    },padding:'0.5vw'}}>
            <InputLabel sx={{fontSize:'1vw'}} >
              <LocationOn sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />{' '}
              Select Location
            </InputLabel>
            <Select
              defaultValue=""
              label="Select Location"
              sx={{ backgroundColor: '#FFF', borderRadius: '8px' }}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
            </Select>
          </FormControl>

          <TextField
            placeholder="eg. Doctor, specialisation, clinic name"
            variant="outlined"
            sx={{
              flexGrow: 1,
              backgroundColor: '#FFF',
              borderRadius: '8px',
              height: '2.5vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2.5vw', // Adjust input height
    },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    sx={{
                      minWidth: '4rem',
                      height: '4rem',
                      borderRadius: '8px',
                      fontWeight:'bold'
                    }}
                  >
                    &rarr;
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </motion.div>
      </Box>

      {/* Filters Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          padding: '1rem 0',
          backgroundColor: '#fff',
         
        }}
      >
        <FormControl sx={{ marginRight: 3, minWidth: 120,height: '2vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2vw', // Adjust input height
    },padding:'0.5vw','& fieldset': {
        borderColor: '#ececec', // Default border color
      },}}>
          <InputLabel sx={{fontSize:'1vw'}}>Expertise</InputLabel>
          <Select defaultValue="" sx={{ backgroundColor: '#ececec' }}>
            <MenuItem value="Cardiology">Cardiology</MenuItem>
            <MenuItem value="Dermatology">Dermatology</MenuItem>
            <MenuItem value="Orthopedics">Orthopedics</MenuItem>
            <MenuItem value="hair-care">Hair Care</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 3, minWidth: 120,height: '2vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2vw', // Adjust input height
    },padding:'0.5vw','& fieldset': {
        borderColor: '#ececec', // Default border color
      },}}>
          <InputLabel sx={{fontSize:'1vw'}}>Gender</InputLabel>
          <Select defaultValue="" sx={{ backgroundColor: '#ececec' }}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 3, minWidth: 120 ,height: '2vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2vw', // Adjust input height
    },padding:'0.5vw','& fieldset': {
        borderColor: '#ececec', // Default border color
      },}}>
          <InputLabel sx={{fontSize:'1vw'}}>Fees</InputLabel>
          <Select defaultValue="" sx={{ backgroundColor: '#ececec' }}>
            <MenuItem value="Rs.0-Rs.500">Rs.0-Rs.500</MenuItem>
            <MenuItem value="Rs.600-Rs.2000">Rs.600-Rs.2000</MenuItem>
            <MenuItem value="Rs.2100-Rs.5000">Rs.2100-Rs.5000</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 2, minWidth: 140,height: '2vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2vw', // Adjust input height
    },padding:'0.6vw','& fieldset': {
        borderColor: '#ececec', // Default border color
      },}}>
          <InputLabel sx={{fontSize:'1vw'}}>Languages</InputLabel>
          <Select defaultValue="" sx={{ backgroundColor: '#ececec' }}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Telugu">Telugu</MenuItem>
            <MenuItem value="Tamil">Tamil</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: 2, minWidth: 120,height: '2vw', // Adjust height here
    '& .MuiInputBase-root': {
      height: '2vw', // Adjust input height
    },padding:'0.6vw' ,'& fieldset': {
        borderColor: '#A5D6A7', // Default border color
      },
     }}>
          <InputLabel sx={{fontSize:'1vw',border:''}}>All Filters</InputLabel>
          <Select defaultValue="" sx={{  backgroundColor: '#A5D6A7',height: '1vw',fontSize:'12px',border:'none' }}>
            <MenuItem value="langhuage">Language</MenuItem>
            <MenuItem value="Fees">Fees</MenuItem>
            <MenuItem value="gender">Gender</MenuItem>
            <MenuItem value="expetise">Expertise</MenuItem>
          </Select>
        </FormControl>
       
      </Box>
      <Divider sx={{ borderColor: '#ececec', margin: '0' }} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          justifyContent: 'end',
        }}
      >
        {filters.map((filter) => (
          <Chip
            key={filter.id}
            label={filter.label}
            onDelete={() => handleDeleteFilter(filter.id)}
            sx={{
              padding:'1rem',
              backgroundColor: '#E8F5E9',
              color: '#000',
              '& .MuiChip-deleteIcon': {
                color: '#757575',
              },
            }}
          />
        ))}
      </Box>
  
      {/* Doctor Cards Section */}
      <Box
        sx={{
          marginTop: '2rem',
          backgroundColor: '#FFF',
          padding: '1.5rem',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '80vw',
          margin: '0 auto',
        }}
      >
        <Grid container spacing={3}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <DoctorCard />
                </motion.div>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FindDoctors;
