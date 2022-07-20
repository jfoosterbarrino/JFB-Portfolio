import React, {createContext} from 'react'

export const ProjectContext = createContext();

const ProjectContextProvider = ({children})=>{

    const flick = {
        id: 1,
        title: "Flick",
        desc: "Robust, user-friendly application centered around movies using the TMDB API, Flask back-end, and ReactJS front-end. Never rely on Rotten Tomatoes again, you can now get movie recommendations from people you follow. Registered users can create private watch lists for movies you plan to watch, construct a public recommendation list for everyone to see, and explore other user's film recommendations.",
        photo: "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657771191/flickpic2_m7xgjj.jpg",
        video: "https://res.cloudinary.com/dccf9vnoo/video/upload/v1658292691/flickclip_2_fye0ib.mp4",
        website: "http://quickflick.herokuapp.com"
    }

    const trash2Treasure = {
        id: 2,
        title: "Trash 2 Treasure",
        desc: "E-commerce site using flask back end and front-end using Bootstrap and Jinja templates. . Create an account, explore, and purchase some of the most random items you can find on the internet. From some of the most iconic looks of all time to an actual human being, we have it all.",
        photo: "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657771190/trash2treasurepic_b7nxfx.jpg",
        video: "https://res.cloudinary.com/dccf9vnoo/video/upload/v1657783079/trash2treasureclip_mkprng.mp4",
        website: "http://trash-2-treasure.herokuapp.com"
    }

    const judgeByTheCover = {
        id: 3,
        title: "Judge By The Cover",
        desc: "Classic bookstore using Flask back-end and ReactJS front-end. Create an account, browse through our book collection, find novels that peak your interest, and create a reading list for later.",
        photo: "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657771191/JBCpic_f9uj25.jpg",
        video: "https://res.cloudinary.com/dccf9vnoo/video/upload/v1657783086/jbcclip_xlbdis.mp4",
        website: "http://judgebythecover.herokuapp.com"
    }

    const pokemonVillage = {
        id: 4,
        title: "Pokemon Village",
        desc: "Catch Em' All! Pokemon Battle App: Flask back end and front-end using Bootstrap and Jinja templates. Create an account, choose an avatar, and catch the 5 best pokemon that you can find. Now battle the other PokeMasters and become the very best!",
        photo: "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657771191/pokemonpic_io3kpd.jpg",
        video: "https://res.cloudinary.com/dccf9vnoo/video/upload/v1657783091/pokeclip_z6hlw1.mp4",
        website: "http://pokemon-village.herokuapp.com"
    }

    const weatherTheStorm = {
        id: 5,
        title: "Weather The Storm",
        desc: "Simple Weather App using the OpenWeatherMap API, Bootstrap, CSS, and JavaScript. Find the current weather in any city around the world in seconds.",
        photo: "https://res.cloudinary.com/dccf9vnoo/image/upload/v1657771191/weatherthestormpic_ezuokk.jpg",
        video: "https://res.cloudinary.com/dccf9vnoo/video/upload/v1657776093/weatherthestormclip_sbwfyd.mp4",
        website: "http://weather-the-storm.herokuapp.com"
    }


    const projects = [
        flick,
        trash2Treasure,
        judgeByTheCover,
        pokemonVillage,
        weatherTheStorm

    ]

    const values = {
        flick,
        trash2Treasure,
        judgeByTheCover,
        pokemonVillage,
        weatherTheStorm,
        projects
    }


  return (
    <ProjectContext.Provider value = {values}>
        {children}
    </ProjectContext.Provider>
  )

}

export default ProjectContextProvider