
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contacts from './pages/Contacts';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
