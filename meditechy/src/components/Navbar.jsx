import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 flex items-center justify-between w-full h-[70px] bg-white shadow-lg z-30'>
        <NavLink to='/'>
            <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                logo
            </div>
        </NavLink>
        <div className='flex gap-[100px] mr-[60px]'>
        <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center  text-lg font-bold rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 text-lg font-bold rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center  text-lg font-bold rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 text-lg font-bold rounded-lg py-[12px] px-[10px]'
                    }
                >
                    <button>About us</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center  text-xl font-bold rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 text-xl font-bold rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 w-[110px] text-center text-xl font-bold rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 w-[110px] text-center text-slate-800 text-xl font-bold rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Resources
                </NavLink>
            {/* <NavLink to="/" activeClassName='text-sky-500' className=' hover:text-sky-500 w-[110px] text-center text-slate-800 text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                Home
            </NavLink>
            <NavLink to="/about" activeClassName='text-sky-500' className=' hover:text-sky-500  w-[110px] text-center text-slate-800  text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                < button>About us</ button>
            </NavLink>
            <NavLink to="/contact" activeClassName='text-sky-500' className=' hover:text-sky-500  w-[110px] text-center text-slate-800  text-xl font-bold rounded-lg py-[12px]  px-[10px] '>
                Contact
            </NavLink>
            <NavLink to="/blogs" activeClassName='text-sky-500' className=' hover:text-sky-500 w-[110px] text-center text-slate-800  text-xl font-bold rounded-lg py-[12px]  px-[10px] '>
                Resources
            </NavLink> */}
            
                < button className=' hover:text-sky-500 h-[50px] w-[150px] border-[3px] border-sky-500 text-center text-slate-800  
                text-xl font-bold rounded-lg  '>Join us</ button>
            
        </div>
    </nav>
    )
}

export default Navbar