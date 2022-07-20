import './App.css';
import {useContext} from 'react';
import {JalenContext} from './context/JalenContext';
import {ProjectContext} from './context/ProjectContext';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Work from './components/Work';
import Main from './views/Main';



function App() {
  const {jalen} = useContext(JalenContext)
  const {projects} = useContext(ProjectContext)
  console.log(jalen)
  console.log(projects)

  return (<div className="App">
  <Nav>
  <Main/>
  </Nav>

  {/* <h1>{jalen.firstName} {jalen.lastName}</h1>
  <br/>
  {projects?.map((project) =>(
    <h1 key ={project.id}>{project.title}</h1>
  ))} */}
  </div>);
}

export default App;
