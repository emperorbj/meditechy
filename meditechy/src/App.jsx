
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Events from './pages/Events';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/events' element={<Events/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
