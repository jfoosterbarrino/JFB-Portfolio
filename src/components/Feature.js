import React, {useContext} from 'react'
import {ProjectContext} from '../context/ProjectContext'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Feature() {
    const {flick} = useContext(ProjectContext)


  return (<>
            <Typography color="#45a29e" sx={{ml:10,mb:5}}>
            <h1 className="typing">
                Featured Project
            </h1>
        </Typography>

        <Box sx={{ flexGrow: 1, pl:5}}>
       
      <Grid container spacing={2} sx={{textAlign: 'right'}}>

            <Grid item xs={4} md={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center', width: '90%'}}>
                <Typography>
                    {/* <h4 style={{fontFamily: "Space Mono, monospace", color:"#45a29e"}}>Featured Project</h4> */}
                    <h1 style={{fontFamily: "Space Mono, monospace"}}>{flick.title}</h1>
                    <p style={{backgroundColor:"#333", fontFamily: "Space Grotesk, sans-serif",padding:20, marginTop:2}}>{flick.desc}</p>
                    <Link href = {flick.website}><Button variant="contained" sx={{backgroundColor:"#45a29e", mt:2, fontFamily: "Space Mono, monospace"}}>Visit Website</Button></Link>
                </Typography>
            </Grid>

            <Grid item xs={8} md={8}>
                <Typography sx={{display: 'flex', justifyContent: 'center', mt:5}}>
                    <video autoPlay loop muted style={{width:"90%", cursor: 'pointer'}}>
                        <source src={flick.video} type="video/mp4"/>
                    </video>
                </Typography>
            </Grid>



      </Grid>
    </Box>


  </>)
}
