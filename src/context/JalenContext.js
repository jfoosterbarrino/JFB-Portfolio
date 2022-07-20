import React, {createContext} from 'react'

export const JalenContext = createContext();

const JalenContextProvider = ({children})=>{
    
    const jalen = {
        firstName: "Jalen",
        lastName: "Fooster-Barrino",
        email: "jalenfoosterbarrino@gmail.com",
        number: "(404)455-6990",
        linkedIn: "https://www.linkedin.com/in/jalen-fooster-barrino",
        gitHub: "https://github.com/jfoosterbarrino",
        facebook: "https://www.facebook.com/jfooster",
        instagram: "https://www.instagram.com/jay.foos"
    }

    const values = {
        jalen
    }

  return (
    <JalenContext.Provider value={values}>
        {children}
    </JalenContext.Provider>
  )

}

export default JalenContextProvider