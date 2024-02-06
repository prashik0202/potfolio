import './App.css'
import { 
  Routes, Route 
} from 'react-router-dom';
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import Project from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
