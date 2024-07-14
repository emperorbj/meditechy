import { NavLink } from 'react-router-dom';
import dropdown from '../assets/orgdrop.png'
import { useState } from 'react';
const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false)


    return (
        <nav className='fixed text-lg top-0 left-0 flex items-center justify-between w-full h-[70px] bg-white shadow-lg z-30'>
            <NavLink to='/'>
                <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                    logo
                </div>
            </NavLink>
            <div className='flex gap-[100px] mr-[60px] relative'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 text-lg font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    <button>About us</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800  font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Contact
                </NavLink>
                <div className='text-slate-800 flex items-center gap-4 hover:text-sky-500 w-[110px] 
                    text-center font-medium rounded-lg py-[12px] px-[10px]'>
                    <button onClick={() => setIsOpen(!isOpen)} >
                        Resources
                    </button>
                    <img className='cursor-pointer' srcSet={dropdown} alt="" onClick={() => setIsOpen(!isOpen)} />
                </div>
                {isOpen && ( <div className='shadow border rounded-[10px] flex flex-col py-[5px] px-[5px] items-center gap-1 w-[240px] h-[150px] right-24 top-14 bg-white absolute'>
                    <NavLink to="/events" className=" rounded-xl  hover:text-blue-400 font-semibold  h-[50px] text-center border-slate-600 w-[100%]">
                        Events
                    </NavLink>
                    <NavLink to="/community" className=" rounded-xl  hover:text-blue-400 font-semibold  h-[50px] text-center border-slate-600 w-[100%]">
                        Community
                    </NavLink>
                    <NavLink to="/blogs" className=" rounded-xl  hover:text-blue-400 font-semibold  h-[50px] text-center border-slate-600 w-[100%]">
                        Blogs
                    </NavLink>
                </div>
                )};

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

                < button className=' hover:bg-blue-400 hover:text-white w-[150px] border-[3px] border-sky-500 text-center text-blue-400  
             font-medium rounded-lg  '>Join us</ button>

            </div>
        </nav>
    )
}

export default Navbar