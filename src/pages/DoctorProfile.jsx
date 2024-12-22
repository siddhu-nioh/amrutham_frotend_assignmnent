import { CalendarOutlined } from "@ant-design/icons";
import { CheckCircle } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; 
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Card } from "antd";
import React from 'react';
import { AiFillStar, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaHospitalAlt, FaLeaf, FaRegHeart, FaRegUser, FaShieldAlt } from "react-icons/fa";
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const reviews = [
  {
    name: "Alicent Hightower",
    consultation: "Skin care",
    date: "20 January 2023",
    review: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.",
    avatar: "https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e02YjqhiDWrYxbYHjGpBOMt2f7yQapuMb04eHkXQugaNWz8fZ9-fAVRtP5oNs40A8RMiJeZjwQX4X1VG4kPJ2Va53vjWGWxOQjTZWcDuCPP-z1gkncttxg24uWPG~sPNq0IfnQaY33c8JDfTxxyw-XZgm1xa2JehH9WaG8wm3NrcR5iopIsnmNr1r8yOGqfXtSS6D7psoOHMrA0WNLlPwVM~sajhpsOEFNjVsygu-Gcec4xHBiHzF~H~ki2KTNH2TrnqoWNkv7aNRGqep1ma5Aldzmrd1DmAUM45B9CkbWD9YjiHBLlx9j8dMK5cjlGjcYNpecRT3R9jVX-Xw6PWiQ__",
    rating: 5,
  },
  {
    name: "Alicent Hightower",
    consultation: "Pregnancy",
    date: "20 January 2023",
    review: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.",
    avatar: "https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e02YjqhiDWrYxbYHjGpBOMt2f7yQapuMb04eHkXQugaNWz8fZ9-fAVRtP5oNs40A8RMiJeZjwQX4X1VG4kPJ2Va53vjWGWxOQjTZWcDuCPP-z1gkncttxg24uWPG~sPNq0IfnQaY33c8JDfTxxyw-XZgm1xa2JehH9WaG8wm3NrcR5iopIsnmNr1r8yOGqfXtSS6D7psoOHMrA0WNLlPwVM~sajhpsOEFNjVsygu-Gcec4xHBiHzF~H~ki2KTNH2TrnqoWNkv7aNRGqep1ma5Aldzmrd1DmAUM45B9CkbWD9YjiHBLlx9j8dMK5cjlGjcYNpecRT3R9jVX-Xw6PWiQ__",
    rating: 5,
  },
];
// const DayButton = styled(Button)(({ theme, slots, selected }) => ({
//   padding: '0.5rem 1rem',
//   borderRadius: "1.5vw",
//   marginRight: theme.spacing(1),
//   color: '#666',
//   backgroundColor: slots === 0 ? '#fff' : selected ? "#F2FBF2":"#FFF" ,
//   '&:hover': {
//     backgroundColor: slots === 0 ? '#F2FBF2' : selected ? "#4CAF50" : '#f0f0f0',
//   },
// }));
const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  border: '1px solid #ddd',
  borderRadius: "1.5vw",
  display: 'flex',

  justifyContent:'center',
  margin:'auto',
  alignItems: 'center',
}));
const TimeSlotButton = styled(Button)(({ theme, selected }) => ({
  padding: '1vw',
  borderRadius: "1vw",
  width:'8vw',
  border:'1px solid #666',
  marginRight: theme.spacing(1),
  color: 'black',
  backgroundColor: selected ? '#388E3C' : '#fff', 
  '&:hover': {
    backgroundColor: selected ? '#388E3C' : '#f0f0f0', 
  },
}));
// Custom styles for the DayButton
const DayButton = styled(Button)(({ theme, slots, selected }) => ({
  padding: '0.5rem 1rem',
  borderRadius: "1vw",
  border:slots === 0 ? '#ccc' : selected ? '1px solid #666':"1px solid #ddd",
  marginRight: theme.spacing(1),fontSize:'0.8vw'
, fontFamily: 'Poppins, Arial, sans-serif',
height:"7vw",
width:'8vw', color: slots === 0 ? '#ccc' : selected ?'#1a5245':'black' ,
  fontWeight:slots === 0 ? '#ccc' : selected ? 'bold':"lighter",
  minWidth: '80px', 
  backgroundColor: slots === 0 ? '#ccc' : selected ? '#F2FBF2' : '#fff', 
  '&:hover': {
    backgroundColor: slots === 0 ? '#ccc' : selected ? '#4CAF50' : '#ccc', 
  },
}));


const StyledChevronButton = styled(Button)(({ theme }) => ({
  padding: '0.5rem 1rem',
  borderRadius: "50%",
  border:'1px solid #666',
  marginRight:theme.spacing(1),
  minWidth: '40px', 
  color: '#fff',
  backgroundColor: "#f0f0f0",
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const specializations = [
  { icon: <FaRegUser size={40} />, label: "Women’s Health" }, 
  { icon: <FaRegHeart size={40} />, label: "Skin Care" },     
  { icon: <FaShieldAlt size={40} />, label: "Immunity" },     
  { icon: <FaLeaf size={40} />, label: "Hair Care" },         
];
const concerns = [
  "Skin Treatment",
  "Pregnancy",
  "Period Doubts",
  "Endometriosis",
  "Pelvic Pain",
  "Ovarian Cysts",
  "+ 5 More",
];
const StyledRadio = styled(Radio)(({ theme }) => ({
  '& .MuiRadio-root': {
    color:' #F2FBF2', 
    '&$checked': {
      color: '#F2FBF2', 
    },
  },
  '& .MuiRadio-label': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiSvgIcon-root': {
    display: 'none', 
  },
}));


  
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid #ddd',
  borderRadius: "1vw",
  width: '120px',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  '&.Mui-checked': {
    backgroundColor: '#F2FBF2', 
    border: '1px solid #4CAF50', 
  },
}));

const ProfileCard = () => {
  const [selectedTime, setSelectedTime] = React.useState('11:00 AM');
  const [mode, setMode] = React.useState("video");
  const [selectedDate, setSelectedDate] = React.useState("Mon, 10 Oct");
  // const [selectedTime, setSelectedTime] = React.useState(null);
  const [value, setValue] = React.useState('video');
  const [selectedDay, setSelectedDay] = React.useState('Mon, 10 Oct');

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dates = [
    { date: "Mon, 10 Oct", slots: 10 },
    { date: "Tue, 11 Oct", slots: 2 },
    { date: "Wed, 12 Oct", slots: 5 },
  ];

  const morningSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
  ];
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  const eveningSlots = [
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:15 PM",
  ];

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "85vw",
          margin: 'auto',
          boxShadow: 2,
          borderRadius: "1.5vw 1.5vw 0.5vw 0.5vw",
          overflow: 'hidden',
          marginTop: '2vw',
          
        }}
      >
        <Box
          sx={{
            backgroundImage:
              'url(https://s3-alpha-sig.figma.com/img/2620/7166/a35e1a20facdf3d56db655152bcc6d78?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGEnmrQjVcW~CfvlA5oFUZ~Wp2P9x22MNB2dLY2BUJtXeCGf2rp3Yb6eSheSSTlHqXr1g6sPtHAnqNKQUdGsexYbf4zro~Sx1ytaJF1kmlfeo~2UvgucMxmf~STu2u2AplwveOWamWo-1Fl5mOeIhBResh-VHO9CX9sj5qSlfYKxZbgGZ-gPq~4iq8A0EymY5tkLQD8Yh~x4xB-ioN9L40iWfQnrBM1dAf9~0RwJ3bdTNomDF~PjDMbkav08yaMPpXO78Duv0ZuTykb1K2CaXd5SHzxPOleN34vHM8JtaC7pYT9Z3D8Td7nDjIHRUSFTA1GYv3lqaeJNZeouwdY4iQ__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 150,
            position: 'relative',
            filter: 'brightness(1.1)',
          }}
        >
          <Avatar
            src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFVcNlmcMUAGp~Wp13mwVXF2O2DXUQl-WMC67TsfE619DpiWosyvFyUu2EBY4Fi2VGjudQbsmfA3ujgB4cnLfESCELrm3p09gmdRhQCgKDFHMPEThXsaS8d4Ih9xrqgvRQRSwdZrp7mxvaShmbnWiwhWfGIYfi~B59NqGaxlnCBSwVVK5k9eAmWTOWKcRmBcZ6RZ8ICI8it5RT6GC2cxRYAftbKYuz7lfXqW7vjcLOWKfPgNkQA45xHqXxoVpCK6EoAtVY~D9rcdMreaJL0fswrZE34IkQ1eTfKypX1fW0cq-iMaKR4mFSBvYs9FK6JwBGVMGO5h5ZVXPsTYOCN8cw__"
            alt="Dr. Bruce Willis"
            sx={{
              width: "10vw",
              height: "10vw",
              border: '4px solid white',
              position: 'absolute',
              bottom: "-5vw",
              left: '10%',
              transform: 'translateX(-50%)',
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: '#fffcf3',
            paddingLeft: "5vw",
            textAlign: 'center',
            display: 'flex',
            width: '90vw',
            justifyContent: 'space-evenly',
            paddingTop: "1vw",
            paddingBottom: '2vw',
          }}
        >
          <Box>
            <Typography variant="h6" display="flex" justifyContent="center" alignItems="center" gutterBottom>
              Dr. Bruce Willis
              <CheckCircle sx={{ color: 'blue', fontSize: 18, marginLeft: 0.5 }} />
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Gynecologist
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" mt={1} mb={2}>
              <Typography variant="body2" color="textSecondary" mr={0.5}>
                4.2
              </Typography>
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  fontSize="small"
                  sx={{ color: i < 4 ? '#FFD700' : '#E0E0E0' }}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Grid container sx={{ fontFamily: 'Poppins, Arial, sans-serif' }} spacing={4} textAlign="center" justifyContent="center" alignItems="center" mt={1} mb={2}>
              <Grid item xs={4}>
                <Typography variant="h7" color='textSecondary'>Followers</Typography>
                <Typography variant="body1" fontWeight='bold'>
                  850
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h7" color='textSecondary'>Following</Typography>
                <Typography variant="body1" fontWeight='bold'>
                  18K
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h7" color='textSecondary'>Posts</Typography>
                <Typography variant="body1" fontWeight='bold'>
                  250
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <Button
              sx={{ backgroundColor: '#1a5245', color: '#fff', textTransform: 'none', height: '4vw', width: "18vw", fontSize: '1.2vw', }}
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>

      </Box>

      <Box  sx={{display:"flex",alignItems:'flex-start',gap:'2vw',margin:'auto',justifyContent:'space-between',width:'85vw',marginBottom:'2vw'}}>
        <Box  sx={{display:'flex',flexDirection:"column",gap:'1vw',marginLeft:'0.2vw',marginTop:'2vw'}}>
          
<Box
      sx={{
        border: "1px solid #ddd",
        width: "90%", margin: "auto", borderRadius: "1.5vw",        
        padding: "2vw",
        maxWidth: "50vw",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        position:'relative',
        overflow: "hidden",
      }}
    >
       <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "22%",
            backgroundColor: "#DBF2DC",
            zIndex: 1,
          }}
        />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px", position: "relative", zIndex: 2 
         
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "" }}>
          A Little About Me
        </Typography>
        <Button
          // variant="outlined"
          size="small"
          sx={{ textTransform: "none", borderRadius: "10px" ,color:'#666',border:'1px solid #666',cursor:'pointer',paddingX:"1vw" }}
        >
          Follow +
        </Button>
      </Box>

      <Typography variant="body2" sx={{ color: "#555", marginBottom: "16px" }}>
        Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni Hospital, Surat. 
        I love to work with all my hospital staff and senior doctors. Completed my 
        graduation in Gynaecologist Medicine from the...
        <div style={{display:"flex",}}>
        <Divider sx={{ marginBottom: "16px",flexGrow:'1' }} />
        <Typography
          component="span"
          sx={{ color: "black", cursor: "pointer", marginLeft: "2px" }}
        >
          Read More
        </Typography>
        </div>
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <Typography variant="h6" sx={{  }}>
        Language Spoken
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <Chip label="English" variant="outlined" />
        <Chip label="Hindi" variant="outlined" />
        <Chip label="Telugu" variant="outlined" />
      </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "16px" }}>
      <IconButton aria-label="Facebook" size="small" color="#3A643B" sx={{color:'#3A643B',background:'#F7F7FC',borderRadius:'50%',border:'1px solid #666'}}>
  <AiOutlineFacebook />
</IconButton>
<IconButton aria-label="Instagram" size="small" sx={{ color: "#3A643B",background:'#F7F7FC',borderRadius:'50%',border:'1px solid #666' }}>
  <AiOutlineInstagram />
</IconButton>
<IconButton aria-label="YouTube" size="small" sx={{ color: "#3A643B" ,background:'#F7F7FC',borderRadius:'50%',border:'1px solid #666'}}>
  <AiOutlineYoutube />
</IconButton>
<IconButton aria-label="Twitter" size="small" sx={{ color: "#3A643B",background:'#F7F7FC',borderRadius:'50%',border:"1px solid #666" }}>
  <AiOutlineTwitter />
</IconButton>

      </Box>
  
    </Box>
            <Box>
            <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "1.5vw",
        padding: "16px",
        maxWidth: "600px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        position:'relative',
        overflow:'hidden'
      }}
    >
      <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "23%",
            backgroundColor: "#DBF2DC",
            zIndex: 1,
          }}
        />
      <Typography
        variant="h5"
        sx={{ fontWeight: "", marginBottom: "16px",position:'relative',zIndex:2 }}
      >
        I Specialize In
      </Typography>
      <Grid container spacing={2}>
        {specializations.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingY: "1vw",
                borderRadius: "12px",
                backgroundColor: "#FFFCF2",
                border:'4px solid #E0E8E2',
                
                textAlign: "center",
              }}
              elevation={2}
            >
              <Box sx={{ color: "#6BAA75", marginBottom: "8px" }}>{item.icon}</Box>
             
            </Paper>
            <Typography
                variant="body1"
                sx={{ fontSize:'1vw',fontWeight: "", color: "#333",paddingY:"1vw",paddingLeft:'1vw',gap:'0.5vw' }}
              >
                {item.label}
              </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
            </Box>
            <Box>
            <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "1.5vw",
        padding: "16px",
        maxWidth: "600px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        position:"relative",
        overflow:"hidden"
      }}
    >
      <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "31%",
            backgroundColor: "#DBF2DC",
            zIndex: 1,
          }}
        />
      <Typography
        variant="h5"
        sx={{ fontWeight: "", marginBottom: "1vw",position:"relative",zIndex:2 }}
      >
        The Concerns I Treat
      </Typography>
      <Grid container spacing={1}>
        {concerns.map((concern, index) => (
          <Grid item key={index}>
            <Chip
              label={concern}
              sx={{
                backgroundColor: "#f9f9f9",
                color: "#6BAA75",
                fontWeight: "medium",
                borderRadius: "8px",
                padding: "4px 8px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
            </Box>
            <Box>
            <Box
      sx={{
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "1.5vw",
        padding: "16px",
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        position:'relative',
        overflow:'hidden'
      }}
    >
      <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "23%",
            backgroundColor: "#DBF2DC",
            zIndex: 1,
          }}
        />
      <Typography variant="h5" sx={{ color: "#333", marginBottom: "8px" ,position:'relative',zIndex:2}}>
        My Work Experience
      </Typography>
      <Typography variant="body2" sx={{ color: "#1a5245", paddingY:"1vw",fontWeight:'bold' }}>
        I HAVE BEEN IN PRACTICE FOR : <span style={{ color: "#2e7d32", fontWeight: "bold" }}>7+ YEARS</span>
      </Typography>
      <Divider sx={{ marginBottom: "16px" }} />
      <Box>
        {[{
          company: "Midtown Medical Clinic",
          role: "Senior doctor",
          duration: "2016-PRESENT",
        },
        {
          company: "Midtown Medical Clinic",
          role: "Senior doctor",
          duration: "2010-2015",
        }].map((experience, index) => (
          <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: "16px" }} key={index}>
            <Grid item>
              <FaHospitalAlt size={20} style={{ marginRight: "16px",color:'#0D42BA',padding:'0.6vw',background:'#e0e0e0',border:'1px solid #e0e0e0',borderRadius:'0.4vw' }} />
            </Grid>
            <Grid item xs>
              <Typography variant="body2" sx={{ fontWeight: "", color: "black" }}>
                {experience.company}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                {experience.role}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ color: "#999" }}>
                {experience.duration}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
            </Box>
            <Box> 
              <Box
    sx={{
      position: "relative",
      border: "1px solid #e0e0e0",
      borderRadius: "1.5vw",
      width: "600px",
      margin: "0 auto",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      
      
    }}
  >
    
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "14%", 
        backgroundColor: "#DBF2DC",
        zIndex: 1,
      }}
    />

    {/* Content */}
    <Box sx={{ position: "relative", padding: "1.5vw", zIndex: 2 }}>
      <Typography variant="h6" sx={{ color: "#333", marginBottom: "16px" }} gutterbottom>
        Featured Reviews (102)
      </Typography>
      {reviews.map((review, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#FAFAFA",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar src={review.avatar} alt={review.name} />
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                {review.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Consulted for {review.consultation}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ color: "#999" }}>
                {review.date}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
            {[...Array(review.rating)].map((_, i) => (
              <AiFillStar key={i} style={{ color: "#FFA41B" }} />
            ))}
          </Box>
          <Typography variant="body2" sx={{ color: "#333", marginTop: "8px" }}>
            {review.review}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
    </Box>
            
        </Box>

      <Box className='appointment ' sx={{ paddingRight: '2vw',flexWrap:"no-wrap",marginRight:'1vw'}}>
        <Card style={{ width: "43.5vw", margin: "auto", padding: "1vw", borderRadius: "2vw", marginTop: "2vw" ,border: "1px solid #ddd",}}>
          <Typography variant="h6" style={{ display:"flex",marginBottom: 20,justifyContent:'space-between', textAlign:"start" ,border:'1px solid #666',padding:'1vw',borderRadius:'1vw'
          }}>
            Appointment Fee:<span style={{ color: "#4CAF50" }}>₹699.00</span>
          </Typography>

          <div style={{ marginBottom: 20 }}>
          <FormControl component="fieldset">
            <Box sx={{display:"flex",alignItems:"center"}}>
              
      <Typography variant="h5" sx={{paddingY:'1vw'}}>Select your mode of session </Typography>
      <Divider sx={{flexGrow:1,border:'1px solid #666'}}/>
            </Box>
      <RadioGroup
        aria-labelledby="mode-of-session"
        name="mode-of-session"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="in-clinic"
          control={<StyledRadio />}
          label={
            <StyledBox className={value.includes('in-clinic') ? 'Mui-checked' : ''}>
             
              <span>In-Clinic</span>
              {value.includes('in-clinic') && <CheckCircle fontSize="small" color="success"/>}
              <br />
              <span style={{ fontSize: '0.8rem' }}>45 Mins</span>
            </StyledBox>
          }
        />
        <FormControlLabel
          value="video"
          control={<StyledRadio />}
          label={
            <StyledBox className={value.includes('video') ? 'Mui-checked' : ''}>
             
              <span>Video</span>
              {value.includes('video') && <CheckCircle fontSize="small" color="success"/>}
              <br />
              <span style={{ fontSize: '0.8rem' }}>45 Mins</span>
            </StyledBox>
          }
        />
        <FormControlLabel
          value="chat"
          control={<StyledRadio />}
          label={
            <StyledBox className={value.includes('chat') ? 'Mui-checked' : ''}>
              
              <span>Chat</span>
              {value.includes('chat') && <CheckCircle fontSize="small" color="success"/>}
              <br />
              <span style={{ fontSize: '0.8rem' }}>10 Mins</span>
            </StyledBox>
          }
        />
      </RadioGroup>
    </FormControl>
          </div>

          <div style={{ marginBottom: 20 }}>
          <Box sx={{display:"flex",alignItems:"center"}}>
              
              <Typography variant="h5" sx={{paddingY:'1vw'}}>Pick a time slot </Typography>
              <Divider sx={{flexGrow:1,border:'1px solid #666'}}/>
              <CalendarOutlined style={{ marginLeft: 10, fontSize: 16, color: "#888" ,background:'',border:'1px solid #666',padding:'0.8vw',borderRadius:'50%'}} />
                    </Box>
           
           
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <StyledContainer sx={{ mt: 2 }}>
      {/* <StyledChevronButton variant="contained" color="primary"> */}
        <ChevronLeftIcon />
      {/* </StyledChevronButton> */}
      <DayButton
        variant="contained"
        slots={10}
        selected={selectedDay === 'Mon, 10 Oct'}
        onClick={() => handleDayClick('Mon, 10 Oct')}
      >
        Mon, 10 Oct
        <br />
        10 slots
      </DayButton>
      <DayButton
        variant="contained"
        slots={2}
        selected={selectedDay === 'Tue, 11 Oct'}
        onClick={() => handleDayClick('Tue, 11 Oct')}
        sx={{display:"flex",flexDirection:"column"}}
      >
        Tue, 11 Oct
        <br />
        <span style={{color:'red'}}> 02 slots</span>
      </DayButton>
      <DayButton
        variant="contained"
        slots={5}
        selected={selectedDay === 'Wed, 12 Oct'}
        onClick={() => handleDayClick('Wed, 12 Oct')}
        sx={{display:"flex",flexDirection:"column"}}
      >
        Wed, 12 Oct
        <br />
        <span style={{color:"yellow"}}>05 slots</span>
      </DayButton>
      {/* <StyledChevronButton variant="contained" color="primary"> */}
        <ChevronRightIcon />
      {/* </StyledChevronButton> */}
    </StyledContainer>
    </Box>
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            {/* <Typography>Morning</Typography> */}
            <div style={{ display: "flex", gap: "1vw", marginTop: 10 ,width:'10vw'}}>
            <Box sx={{width:'20vw',height:"10vw",display:'flex',flexWrap:'wrap'}}>
      <Typography variant="h6">Morning</Typography>
      <Box sx={{ display: 'flex', mt: 2 ,flexWrap:'no-wrap' }}>
        <TimeSlotButton
          onClick={() => handleTimeClick('09:00 AM')}
          selected={selectedTime === '09:00 AM'}
        >
          09:00 AM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('09:30 AM')}
          selected={selectedTime === '09:30 AM'}
        >
          09:30 AM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('10:00 AM')}
          selected={selectedTime === '10:00 AM'}
        >
          10:00 AM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('10:15 AM')}
          selected={selectedTime === '10:15 AM'}
        >
          10:15 AM
        </TimeSlotButton>
       
      </Box>
      <br style={{paddingY:"1vw"}}/>
      <Box sx={{marginTop:'1vw'}}>
      <TimeSlotButton
          onClick={() => handleTimeClick('10:45 AM')}
          selected={selectedTime === '10:45 AM'}
        >
          10:45 AM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('11:00 AM')}
          selected={selectedTime === '11:00 AM'}
        >
          11:00 AM
        </TimeSlotButton>
        </Box>
    </Box>
            </div>
          </div>

          <div style={{ marginTop: "4vw" }}>
          <div style={{ marginBottom: 20 }}>
            {/* <Typography>Morning</Typography> */}
            <div style={{ display: "flex", gap: "1vw", marginTop: 10 ,width:'10vw'}}>
            <Box sx={{width:'20vw',height:"10vw",display:'flex',flexWrap:'wrap'}}>
      <Typography variant="h6">Eveing</Typography>
      <Box sx={{ display: 'flex', mt: 2 ,flexWrap:'no-wrap' }}>
        <TimeSlotButton
          onClick={() => handleTimeClick('04:00 PM')}
          selected={selectedTime === '04:00 PM'}
        >
          04:00 PM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('04:15 PM')}
          selected={selectedTime === '04:15 AM'}
        >
          04:15 PM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('04:30 PM')}
          selected={selectedTime === '04:30 PM'}
        >
          04:30 PM
        </TimeSlotButton>
        <TimeSlotButton
          onClick={() => handleTimeClick('04:45 PM')}
          selected={selectedTime === '04:45 PM'}
        >
          04:45 PM
        </TimeSlotButton>
       
      </Box>
      <br style={{paddingY:"1vw"}}/>
      <Box sx={{marginTop:'1vw'}}>
      <TimeSlotButton
          onClick={() => handleTimeClick('05:15 PM')}
          selected={selectedTime === '05:15 PM'}
        >
          05:15 PM
        </TimeSlotButton>
       
        </Box>
    </Box>
            </div>
          </div>
          </div>

          <Button
            type="primary"
            
            style={{ marginTop: 20, backgroundColor: "#3A643B", borderColor: "#3A643B",color:'#fff',width:"38vw",justifyContent:'center'}}
            // disabled={!selectedTime}
            size='medium'
          >
            Make An Appointment
          </Button>
        </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
