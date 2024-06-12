import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 flex items-center justify-between w-full h-[80px] bg-white/30 backdrop-blur-lg shadow-lg z-30'>
        <Link to='/'>
            <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                logo
            </div>
        </Link>
        <div className='flex gap-[100px] mr-[60px]'>
            <Link to="/" className=' hover:text-sky-500 w-[110px] text-center text-white text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                < button>Home</ button>
            </Link>
            <Link to="/about" className=' hover:text-sky-500  w-[110px] text-center text-white text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                < button>About us</ button>
            </Link>
            <Link to="/contact" className=' hover:text-sky-500 w-[110px] text-center text-white text-xl font-bold rounded-lg py-[12px]  px-[10px] '>
                < button>Contact</ button>
            </Link>
            <Link to="/blogs" className=' hover:text-sky-500 w-[110px] text-center text-white text-xl font-bold rounded-lg py-[12px]  px-[10px] '>
                < button>blogs</ button>
            </Link>
            
                < button className=' hover:text-sky-500 w-[110px] text-center text-white text-xl font-bold rounded-lg py-[12px]  px-[10px]'>Join us</ button>
            
        </div>
    </nav>
    )
}

export default Navbar
