import './App.scss';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
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
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App;
