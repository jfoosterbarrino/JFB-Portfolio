import React, {useContext} from 'react';
import {JalenContext} from '../context/JalenContext';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CategoryIcon from '@mui/icons-material/Category';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CottageIcon from '@mui/icons-material/Cottage';
import Link from '@mui/material/Link';
import '../css/section.css';
import Resume from './Resume';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 200;

export default function PermanentDrawerLeft({children}) {
  const {jalen} = useContext(JalenContext)
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{background:"transparent"}}
      >
        <Typography sx={{display: 'flex', justifyContent:"right", mr:3, mt:3}}>
        <Resume/>
        </Typography>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#333",
            color: "#c5c6c7"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography sx={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", fontFamily: "Space Grotesk, sans-serif"}}>
        <a href = "#sec1" style={{color:"#c5c6c7", textDecoration: "none"}}><img style={{width: "7em", marginBottom:5}} src = "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657821855/wbblue_cn1z21.png"/></a>
        <p>Software Engineer</p>
        </Typography>
        <List sx={{display: "flex", justifyContent: "center", flexDirection: "column", height: "70%"}}>

        <ListItem className="list" sx={{textAlign: "center", display: "flex",justifyContent: "center"}} disablePadding>
            <a href = "#sec1" style={{color:"#c5c6c7", textDecoration: "none"}}>
            <ListItemButton>
                {/* <ListItemIcon> */}
                  <CottageIcon sx={{color:"#c5c6c7", mr:1}}/>
                {/* </ListItemIcon> */}
                <Typography sx ={{pt:1, pb:1, ml:1, fontFamily: "Space Grotesk, sans-serif"}}>Home</Typography>
              </ListItemButton>
            </a>
            </ListItem>

            <ListItem className="list" sx={{textAlign: "center", display: "flex",justifyContent: "center"}} disablePadding>
            <a href = "#sec2" style={{color:"#c5c6c7", textDecoration: "none"}}>
            <ListItemButton>
                {/* <ListItemIcon> */}
                  <SelfImprovementIcon  sx={{color:"#c5c6c7", mr:1}}/>
                {/* </ListItemIcon> */}
                <Typography sx ={{pt:1, pb:1, ml:1, fontFamily: "Space Grotesk, sans-serif"}}>About Me</Typography>
              </ListItemButton>
              </a>
            </ListItem>

          


          
            <ListItem className="list" sx={{textAlign: "center", display: "flex",justifyContent: "center"}} disablePadding>
            <a href = "#sec3" style={{color:"#c5c6c7", textDecoration: "none"}}>
            <ListItemButton>
                {/* <ListItemIcon> */}
                  <RocketLaunchIcon sx={{color:"#c5c6c7", mr:1}}/>
                {/* </ListItemIcon> */}
                <Typography sx ={{pt:1, pb:1, ml:1, fontFamily: "Space Grotesk, sans-serif"}}>Feature</Typography>
              </ListItemButton>
              </a>
            </ListItem>

          
            <ListItem className="list" sx={{textAlign: "center", display: "flex",justifyContent: "center"}} disablePadding>
            <a href = "#sec4" style={{color:"#c5c6c7", textDecoration: "none"}}>
            <ListItemButton>
                {/* <ListItemIcon> */}
                  <WorkIcon sx={{color:"#c5c6c7", mr:1}}/>
                {/* </ListItemIcon> */}
                <Typography sx ={{pt:1, pb:1, ml:1, fontFamily: "Space Grotesk, sans-serif"}}>Work</Typography>
              </ListItemButton>
              </a>
            </ListItem>
         
 
            <ListItem className="list" sx={{textAlign: "center", display: "flex",justifyContent: "center"}} disablePadding>
            <a href = "#sec5" style={{color:"#c5c6c7", textDecoration: "none"}}>
            <ListItemButton>
                {/* <ListItemIcon > */}
                  <AlternateEmailIcon sx={{color:"#c5c6c7", mr:1}}/>
                {/* </ListItemIcon> */}
                <Typography sx ={{pt:1, pb:1, ml:1, fontFamily: "Space Grotesk, sans-serif"}}>Contact</Typography>
              </ListItemButton>
              </a>
            </ListItem>
          
        </List>
        <Typography sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", m:3}}>
                <Link sx={{color:"#c5c6c7"}} href= {jalen.linkedIn}><Tooltip sx={{color:"#c5c6c7"}} title="LinkedIn"><IconButton><LinkedInIcon className="icon"/></IconButton></Tooltip></Link>
                <Link sx={{color:"#c5c6c7"}} href= {jalen.gitHub}><Tooltip sx={{color:"#c5c6c7"}} title="GitHub"><IconButton><GitHubIcon className="icon"/></IconButton></Tooltip></Link>
                <Link sx={{color:"#c5c6c7"}} href= {jalen.instagram}><Tooltip sx={{color:"#c5c6c7"}} title="Instagram"><IconButton><InstagramIcon className="icon"/></IconButton></Tooltip></Link>
        </Typography>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', backgroundColor: "#000"}}
      >
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>

  );
}