import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" sx={{color:"#45a29e", fontSize:"10px", borderColor: "#45a29e"}} onClick={handleClickOpen}>
        Resume
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: "#45a29e", backgroundSize: "cover", minHeight:"100vh", overflow: "hidden"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Resume
            </Typography>
            <a style={{textDecoration: 'none'}} href="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658224631/resume_photo_cnbvg0.jpg" download>
                <Button variant="contained" style={{background:"#c5c6c7", color:"#0b0c10", borderColor:"#0b0c10"}} autoFocus color="inherit" onClick={handleClose}>
              Download
                </Button>
            </a>
          </Toolbar>
        </AppBar>
        <Typography sx={{display:"flex", justifyContent:"center", backgroundColor:"black", backgroundSize: "cover", minHeight:"100vh", overflow: "hidden", pt:2, pb:2}}>
        <img style={{width:"25%", height:"100vh"}} src= "https://res.cloudinary.com/dccf9vnoo/image/upload/v1658224631/resume_photo_cnbvg0.jpg"/>
        </Typography>
      </Dialog>
    </div>
  );
}