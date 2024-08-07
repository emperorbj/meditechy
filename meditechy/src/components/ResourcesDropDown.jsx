import { NavLink } from 'react-router-dom';
import dropdown from '../assets/orgdrop.png'
import { useState } from 'react';

const DropdownResources = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className='text-slate-800 flex items-center md:gap-1 lg:gap-4 hover:text-sky-500 w-[110px] 
                    text-center text-lg font-semibold md:text-lg md:font-medium rounded-lg 
                    py-[12px] px-[10px]'>
            <button onClick={() => setIsOpen(!isOpen)} >
                Resources
            </button>
            <img className='cursor-pointer' srcSet={dropdown} alt="" onClick={() => setIsOpen(!isOpen)} />
        </div>
                
        {isOpen && (<div className='shadow border rounded-[10px] flex flex-col py-[5px] 
        px-[5px] items-center gap-1 w-[200px] h-[180px] md:w-[190px] md:h-[170px] lg:w-[240px] lg:h-[170px] top-[310px] 
        right-[80px] 
        md:right-[90px] md:top-[62px] lg:right-[250px] lg:top-[62px] bg-white absolute'>
            <NavLink to="/events" className=" rounded-xl  hover:text-blue-400 
            text-[19px] md:text-lg font-normal md:font-semibold  
            h-[50px] text-center border-slate-600 w-[100%]">
                Events
            </NavLink>
            <NavLink to="/community" className=" rounded-xl  hover:text-blue-400 text-[19px] md:text-lg font-normal md:font-semibold  
            h-[50px] text-center border-slate-600 w-[100%]">
                Community
            </NavLink>
            <NavLink to="/blogs" className=" rounded-xl  hover:text-blue-400 text-[19px] md:text-lg font-normal md:font-semibold  
            h-[50px] text-center border-slate-600 w-[100%]">
                Blogs
            </NavLink>
        </div>
        )
    }
    </>
    )
}

export default DropdownResources
