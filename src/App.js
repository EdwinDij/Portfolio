import './colors.scss';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';



function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Resume" element={<Resume/>} />
        <Route path='Projects' element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App;
