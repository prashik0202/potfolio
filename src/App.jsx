import './App.css'
import { 
  Routes, Route 
} from 'react-router-dom';
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {

  return (
    <div className='h-dvh flex flex-col items-center w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/projects/:id' element={<ProjectDetail />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
