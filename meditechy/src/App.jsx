
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Events from './pages/Events';
import RecentEvent from './components/RecentEvent';
import Blogs from './pages/Blogs';
import Community from './pages/Community';


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
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/community' element={<Community/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
