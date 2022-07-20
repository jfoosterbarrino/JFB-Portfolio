import React, {useContext} from 'react'
import '../css/landing.css'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Work from './Work';
import AboutMe from './AboutMe';
import Link from '@mui/material/Link';
import {JalenContext} from '../context/JalenContext';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1f2833',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Landing() {
    const {jalen} = useContext(JalenContext)
  return (<>

    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
         

            <div className="wrapper">
                <pre className="typing">
                    Hello!<br/>My name is Jalen Fooster-Barrino,<br/>I am a professional 
        
                    <div className="rotate-words">
                        <span className ="numberone">Software Engineer.</span>
                        <span className ="numbertwo">Full-Stack Developer.</span>
                        <span className ="numberthree">Web Designer.</span>
                    </div>

                    <div className="contact">
                        <div className="profile-area">
                            <Link href={jalen.instagram}><div className="profile"><i><Tooltip sx={{color:"#c5c6c7"}} title="Instagram"><IconButton><InstagramIcon className="icon"/></IconButton></Tooltip></i></div></Link>
                            <Link href={jalen.linkedIn}><div className="profile"><i><Tooltip sx={{color:"#c5c6c7"}} title="LinkedIn"><IconButton><LinkedInIcon className="icon"/></IconButton></Tooltip></i></div></Link>
                            <Link href={jalen.gitHub}><div className="profile"><i><Tooltip sx={{color:"#c5c6c7"}} title="GitHub"><IconButton><GitHubIcon className="icon"/></IconButton></Tooltip></i></div></Link>
                            <div className="profile-text">Follow Me</div>
                        </div>
                    </div>
                </pre>
            </div>

      
        </Grid>
        <Grid item xs={12} sm={12} md={6}>


            <section className="section">
                <div className="card">
                    <img src ="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658026276/portfoliopic_bfwlv7.jpg"/>
                    <div className="card-part top-left"></div>
                    <div className="card-part top-right"></div>
                    <div className="card-part bottom-left"></div>
                    <div className="card-part bottom-right"></div>
                </div>
            </section>
          

        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>

            <div className= "note">
                <div className="face face1">
                    <div className="content">
                        <img style={{maxWidth:"145px", marginBottom:0, paddingBottom:0}} src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658252730/cameranobg_jhsnnr.png"/>
                        <h3 style={{marginTop:0}}>Front-End</h3>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <p>
                            Displaying data in an inspiring way is so important. I primarily use React coupled with Material UI and custom CSS, but I also create Flask Front-Ends with Jinja and Bootstrap.
                        </p>
                    </div>
                </div>
            </div>


        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>


        <div className= "note">
                <div className="face face1">
                    <div className="content">
                        <img src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658046377/earth_iovzpk.png"/>
                        <h3>Back-End</h3>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <p>
                            Effective behind-the-scenes work is key. I retrieve, create and maniuplate data using Flask, Django, and SQL. I've constructed REST APIs with CRUD capabilities for the majority of my work. I also leverage Third-Party APIs.
                        </p>
                    </div>
                </div>
            </div>

        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>

        <div className= "note">
                <div className="face face1">
                    <div className="content">
                        <img src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658046394/preso_kcaexl.png"/>
                        <h3>Design</h3>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <p>
                            The secret to being user-friendly is mapping a well-thought-out plan. Not only for the feel of your website, but also for functionality and ease of use.
                        </p>
                    </div>
                </div>
            </div>



        </Grid>
      </Grid>
    </Box>

  </>)
}
