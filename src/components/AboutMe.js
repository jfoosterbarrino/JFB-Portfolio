import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../css/aboutme.css'

export default function AboutMe() {
  return (
    <Box sx={{ flexGrow: 1, pl:5, pr:5}}>
      <Grid container spacing={20}>

        <Grid item xs={12} sm={12} md={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', minHeight:"500px"}}>
            <div className="container">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>Python</div>
            </div>
            
            <div className="container">
                <div>PostgreSQL</div>
                <div>OOP</div>
                <div>REST API</div>
                <div>Git</div>
            </div>
        </Grid> 

        

        <Grid item xs={12} sm={12} md={6} sx={{ display:"flex",flexDirection: 'column',justifyContent: "space-around", alignContent: "center"}}>
        <h1 className= "typing" style={{fontFamily: "Space Mono, monospace", color:"#45a29e"}}>Me, Myself &amp; I</h1>
        <Typography sx={{p:5, mt:2,backgroundColor:"#333", fontFamily: "Space Grotesk, sans-serif"}}>
            
            <h2 style={{color:"#c5c6c7", fontFamily: "Space Grotesk, sans-serif"}}>I'm a full-stack web developer and former collegiate athlete with a background in engineering, management, and fitness. I shine in circumstances that require deductive reasoning, attention to detail, and performing under pressure.</h2>
            <br/>
            <h2 style={{color:"#c5c6c7", fontFamily: "Space Grotesk, sans-serif"}}>I relish any opportunity to expand my skillset and take great pride in creating things that people use forever. Being a team player that knows how to lead and how to be led is something I'm always mindful of and striving for.</h2>
            <br/>
            <h2 style={{color:"#c5c6c7", fontFamily: "Space Grotesk, sans-serif"}}>My go-to extracurriculars are working out (Olympic Lifting), watching literally anything sports, annoying my dog, and exploring new places. I am Atlanta everything when it comes to sports and I grew up in Athens, GA so GO DAWGS!!!</h2>
            <br/>
            <h2 style={{color:"#45a29e", fontFamily: "Space Grotesk, sans-serif"}}>Let's make something special.</h2>
        </Typography>
    
        </Grid>

        <Grid item xs={12} sm={12} md={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight:"500px"}}>
        
            <div className="container">
                <div>React</div>
                <div>Flask</div>
                <div>Django</div>
                <div>SQL</div>
            </div>
            <div className="container">
                <div>Heroku</div>
                <div>GitHub</div>
                <div>Bootstrap</div>
                <div>Material UI</div>
            </div>
        

        </Grid> 

      </Grid>
    </Box>
  );

}
