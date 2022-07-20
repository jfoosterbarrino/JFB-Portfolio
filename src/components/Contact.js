import React from 'react';
import ContactForm from '../forms/ContactForm';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1, mr:10 }}>
    <Grid container spacing={2}>
      <Grid item xs={4} md={4} sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <h1 className= "typing" style={{fontFamily: "Space Mono, monospace", color:"#45a29e", marginBottom:20}}>Let's Work Together!</h1>
        <ContactForm/>
      </Grid>
      <Grid item xs={8} md={8}>
        <img src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658215514/World_Map_dujtdm.svg"/>
      </Grid>
    </Grid>
  </Box>
    
  )
}
