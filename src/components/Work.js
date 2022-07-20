import React, {useContext, useEffect, useState} from 'react';
import {ProjectContext} from '../context/ProjectContext';
import Typography from '@mui/material/Typography';
import '../css/projectdisplay.css'
import '../css/landing.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Work() {

    const {projects, flick, trash2Treasure, judgeByTheCover, pokemonVillage, weatherTheStorm} = useContext(ProjectContext)
    const [app, setApp] = useState({})

    const handleClick=(project)=>{
        if(app.video){
            setApp({})
        }else{
            for(let app of projects){
                if(app.id == project.id){
                    setApp(app)
                    console.log(app.video)
            }
        }
        }

    }

    useEffect(()=>{

    },[])

  return (
    <>

        <Typography color="#45a29e" sx={{ml:10}}>
            <h1 className="typing">
                My Portfolio
            </h1>
        </Typography>

            <Box style={{display:"flex", flexDirection:"row", paddingBottom:30, justifyContent:"space-around"}}>
            {projects.map(project =>(
              <img key ={project.id} className="project-card" onClick={()=>handleClick(project)} src={project.photo}/>
                // {/* <Card variant="outlined" sx={{ background:`url(${project.photo}) no-repeat center`, backgroundSize:"contain", backgroundRepeat: "no-repeat", width:"85%", height:"22vh"}}> */}
        
                            // {/* <CardContent className="project-content"sx={{textAlign:"center", height:"100%"}}> */}

                            // {/* <Typography variant="h5" component="div" color="white" width="100%" backgroundColor="rgba(0,0,0,.5)" pt="5px" pb="5px" borderRadius="30px">
                            //     {project.title}
                            // </Typography> */}
                            // {/* </CardContent> */}

                // {/* </Card> */}
            //   {/* </Box> */}
            ))}
            </Box>
            

            <Typography sx={{display: 'flex', justifyContent: 'center', mt:5}}>
            {app.video?
            ""
            :
            <h1 style={{fontFamily: "Space Mono, monospace"}}>Select a Project to View</h1>
            }

            </Typography>

        <Box sx={{ flexGrow: 1, pr:5}}>
        {app.video?    
      <Grid container spacing={0}>

            <Grid item xs={8} md={8}>
                <Typography sx={{display: 'flex', justifyContent: 'center', mt:5}}>
                    <video autoPlay loop muted style={{width:"80%", cursor: 'pointer'}}>
                        <source src={app.video} type="video/mp4"/>
                    </video>
                </Typography>
            </Grid>

            <Grid item xs={4} md={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center', width: '90%'}}>
                <Typography>
                    <h4 style={{fontFamily: "Space Mono, monospace", color:"#45a29e"}}>Featured Project</h4>
                    <h1 style={{fontFamily: "Space Mono, monospace"}}>{app.title}</h1>
                    <p style={{backgroundColor:"#333", fontFamily: "Space Grotesk, sans-serif",padding:20, marginTop:2}}>{app.desc}</p>
                    <Link href = {app.website}><Button variant="contained" sx={{backgroundColor:"#45a29e", mt:2, fontFamily: "Space Mono, monospace"}}>Visit Website</Button></Link>
                </Typography>
            </Grid>






      </Grid>
      :
            ""
            }
    </Box>









    </>
  )
}
