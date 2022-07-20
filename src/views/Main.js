import React, {useEffect} from 'react'
import Landing from '../components/Landing';
import Work from '../components/Work';
import AboutMe from '../components/AboutMe';
import Typography from '@mui/material/Typography';
import Contact from '../components/Contact';
import '../css/section.css'
import Resume from '../components/Resume';
import Feature from '../components/Feature';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Main() {

    useEffect(() => {
        Aos.init({duration: 2000});
    },[])

  return (<Typography sx={{background: "url(https://res.cloudinary.com/dccf9vnoo/image/upload/v1657786762/1579818_rnsouo.jpg) no-repeat center", backgroundSize: "cover", minHeight: "100vh", overflow: "hidden", margin:0, color: "#c5c6c7", pt:3, pb:3}}>
    <div id="sec1">
        {/* <Typography sx={{position: "absolute", top:"0%", right:"0%",mt:5, transform:"translate(-50%,-50%)"}}><Resume/></Typography> */}
        <Typography sx={{width:95, ml:2}}>
        <img src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658079289/openfragment_bzi68t.png"/>
        </Typography>

        <div data-aos="zoom-in" className="boxes"><Landing/></div>
    </div>
    <div className="section-it"></div>
    <div id="sec2">
        <div data-aos="flip-up" className="boxes"><AboutMe/></div>
    </div>
    <div id="sec3">
    <div className="section-it"></div>
        <div data-aos="flip-up" className="boxes"><Feature/></div>
    </div>
    <div id="sec4">
    <div className="section-it"></div>
        <div data-aos="flip-up" className="boxes"><Work/></div>
    </div>
    <div className="section-it"></div>
    <div id="sec5">
        <div data-aos="flip-up" className="boxes"><Contact/></div>
    </div>
    <Typography sx={{width:100, mt:2, ml:2}}>
    <img src="https://res.cloudinary.com/dccf9vnoo/image/upload/v1658079272/closefragment_lbiany.png"/>
    </Typography>
  </Typography>)
}
