import {createTheme} from '@mui/material/styles';

export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#66fcf1',
      },
      secondary: {
        main: '#45a29e',
      },
      background: {
        default: '#0b0c10',
        paper: '#1f2833',
      },
      error: {
        main: '#bf3939',
      },
      info: {
        main: '#0b0c10',
      },
      success: {
        main: '#c5c6c7',
      },
      divider: '#000000',
      warning: {
        main: '#1f2833',
      },
      text: {
        primary: '#c5c6c7',
      },
    },
    typography: {
      h4: {
        fontFamily: 'Space Grotesk',
      },
      h1: {
        fontFamily: 'Space Grotesk',
      },
      fontFamily: 'Space Grotesk',
      h5: {
        fontFamily: 'Space Grotesk',
      },
      body1: {
        fontFamily: 'Space Mono',
      },
      body2: {
        fontFamily: 'Space Mono',
      },
      button: {
        fontFamily: 'Space Grotesk',
      },
      caption: {
        fontFamily: 'Space Mono',
      },
    },
  };

  const theme = createTheme(themeOptions)
  export default theme;