
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Events from './pages/Events';
import RecentEvent from './components/RecentEvent';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/recent-event' element={<RecentEvent/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
