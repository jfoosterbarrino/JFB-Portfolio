import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JalenContextProvider from './context/JalenContext';
import ProjectContextProvider from './context/ProjectContext';
import primaryTheme from './themes/primaryTheme';
import { ThemeProvider } from 'styled-components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
    <ProjectContextProvider>
    <JalenContextProvider>
    <App />
    </JalenContextProvider>
    </ProjectContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
