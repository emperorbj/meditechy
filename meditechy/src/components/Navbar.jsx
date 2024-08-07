import { NavLink } from 'react-router-dom';
// import dropdown from '../assets/orgdrop.png'
import { useState } from 'react';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import DropdownResources from './ResourcesDropDown';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    


    return (
        <nav className=' relative md:fixed text-lg top-0 left-0 flex items-center 
        justify-between w-full h-[70px] bg-white shadow-lg z-30'>
            <NavLink to='/'>
                <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                    logo
                </div>
            </NavLink>
                <div className=' block cursor-pointer md:hidden'>
                    <Bars4Icon onClick={()=> setOpenMenu(!openMenu)} width={35} height={35} 
                    style={{marginRight:"20px"}}/>
                </div>
                {openMenu &&
                    <div className=' shadow-sm border border-slate-300 rounded-md mr-1 
                    flex absolute items-center top-[61px] right-0 flex-col w-[400px] 
                    text-3xl gap-6  h-[550px]  bg-slate-200 md:hidden'>
                        <Link to="/" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Home</button>
                        </Link>
                        <Link to="/about" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>About us</button>
                        </Link>
                        <Link to="/contact" className="hover:text-sky-500 w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Contact</button>
                        </Link>
                        <DropdownResources/>
                        <Link to="/whatsapp" className="hover:text-sky-500 w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Join Us</button>
                        </Link>
                    </div>
                }
            <div className='hidden md:flex md:gap-4 lg:gap-[100px] md:mr-3 lg:mr-[60px] relative'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 text-lg font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    <button>About us</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800  font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Contact
                </NavLink>
                
                <DropdownResources/>
                {/* <NavLink to="/" activeClassName='text-sky-500' className=' hover:text-sky-500 w-[110px] text-center text-slate-800 text-lg font-medium rounded-lg py-[12px]  px-[10px] '>
                Home
            </NavLink>
            <NavLink to="/about" activeClassName='text-sky-500' className=' hover:text-sky-500  w-[110px] text-center text-slate-800  text-lg font-medium rounded-lg py-[12px]  px-[10px] '>
                < button>About us</ button>
            </NavLink>
            <NavLink to="/contact" activeClassName='text-sky-500' className=' hover:text-sky-500  w-[110px] text-center text-slate-800  text-xl font-medium rounded-lg py-[12px]  px-[10px] '>
                Contact
            </NavLink>
            <NavLink to="/blogs" activeClassName='text-sky-500' className=' hover:text-sky-500 w-[110px] text-center text-slate-800  text-xl font-medium rounded-lg py-[12px]  px-[10px] '>
                Resources
            </NavLink> */}

                < button className='hidden md:block hover:bg-blue-400 hover:text-white 
                md:w-[100px] lg:w-[150px] 
                border-[3px] border-sky-500 text-center text-blue-400  
            font-medium rounded-lg  '>Join us</ button>

            </div>
        </nav>
    )
}

export default Navbar