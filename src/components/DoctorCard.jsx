import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

const DoctorCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF7E6',
        borderRadius: '18px',
        borderColor: '#666',
        padding: '1.5rem',
        boxShadow: '0px 0px 1.5px rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        maxWidth: '20vw',
        height:'30vw',
        maxHeight:'35vw',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        
        <Box
          sx={{
            width: '100px',
            height: '100px',
            // borderRadius: '50%',
            // overflow: 'hidden',
            margin:'0 Auto',
            marginRight:'6.3rem',
            marginBottom: '3rem',
            position: 'relative',
          }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aThGT6X-pORybQWcBeE7-oXEvJ-Ey41vxaJEbYC5x0RpIwPk2t7IX5tqrdWOh1Rk3EtS2yHGIAqX0uhWIST~4ldJjf1GGSB7VBkPf~1QFL7Pz7Bu2fZFVBSlwyhK48cMSoIftI3gnBTEFOgqIc08H~Y5uCui~aGYtAP0Efi05fxiJ-5xZu~NSFVvgF4oONJNUvOiokHqHn9Tc7G0FutOuULrqp1fq9FwJun3vQaKLKL2KgfPMzp1ruFxGw-ZAMH5Lih5lJewq5DyNXZ1Kt3mUn6p8eBWc1JeJudEXo0Z6qkAIC4l2WK15oaxThlkjFG8V4mnAg1-gk9uZRIIgUeqbA__" 
            alt="Doctor"
            style={{ width: '9vw', height: '9vw', objectFit: 'cover' ,borderRadius:'50%'}}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-3vw',
              left: '67%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#FFF',
              padding: '0.2rem 0.5rem',
              zIndex:'10',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', marginRight: '0.2rem' }}
            >
              4.5
            </Typography>
            <StarIcon sx={{ fontSize: '1rem' ,color:'gold' }} />
          </Box>
        </Box>

        
        <Typography variant="h6" sx={{ fontWeight: '500',fontFamily: 'Poppins, Arial, sans-serif', color: '#000' }}>
          Dr. Prerna Narang
        </Typography>

        
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#666',
            marginBottom: '0.5rem',
          }}
        >
          <WcOutlinedIcon sx={{ fontSize: '1rem', color: '#4CAF50' }} /> Male-Female Infertility
        </Typography>

        
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#666',
            marginBottom: '0.5rem',
          }}
        >
          <SchoolOutlinedIcon sx={{ fontSize: '1rem', color: '#4CAF50' }} /> 7 years of Experience
        </Typography>

        
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#666',
            marginBottom: '1rem',
          }}
        >
          <TranslateOutlinedIcon sx={{ fontSize: '1rem', color: '#4CAF50' }} /> Speaks: English, Hindi, Marathi
        </Typography>

        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '1rem',
            gap:'0.5vw'
          }}
        >
          <Button
            variant="outlined"
            sx={{
              flex: 1,
            //   marginRight: '0.5rem',
              display:"flex",
              flexDirection:'column',
              borderRadius:'1vw',
              textTransform: 'none',
              borderColor: '#666',
              color: '#666',
            }}
          ><Typography sx={{fontSize:'13px'}}>Video Consultation</Typography>
             ₹800
          </Button>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              display:"flex",
              borderRadius:'1vw',
              flexDirection:'column',
            //   marginLeft: '0.5rem',
              textTransform: 'none',
              borderColor: '#666',
              color: '#666',
            }}
          >
            <Typography sx={{fontSize:'13px'}}>Chat Consultation</Typography>
             Free
          </Button>
        </Box>

        
        <Button
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor:'white',
            marginBottom: '0.5rem',
            textTransform: 'none',
            borderColor: '#666',
            color: '#4CAF50',
          }}
        >
          View Profile
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: 'none',
            backgroundColor: '#355E3B',
            '&:hover': { backgroundColor: '#666' },
          }}
        >
          Book a consultation
        </Button>
      </motion.div>
    </Box>
  );
};

export default DoctorCard;
