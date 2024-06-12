import Program1 from '../assets/class.jpg'
import Startup from '../assets/startup.jpg'
import Conference from '../assets/conference.jpg'

const Programs = () => {
    return (
        <>
        <div className='flex h-[500px] mx-[40px] mt-[80px]'>
            <div className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Program1} alt="" />
            </div>
            <div className='w-[50%]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>Join us on our Data Sceince learning Initaitive Program.</h1>
                    <p className='text-xl px-[50px] mb-[40px]'>This program promises to be the most interesting of our time, and you get to learn about medical technology
                    </p>
                    <button className='bg-sky-400 font-semibold hover:bg-gradient-to-r from-green-500 to-sky-500 text-white shadow-sky-400 rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>

        <div className='flex flex-row-reverse h-[500px] mx-[40px] mt-[30px]'>
            <div className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Startup} alt="" />
            </div>
            <div className='w-[50%] rounded-[10px]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>Startups Under meditechy AFrica Community.</h1>
                    <p className='text-xl px-[50px] mb-[40px]'>This program promises to be the most interesting of our time, and you get to learn about medical technology
                    </p>
                    <button className='bg-sky-400 font-semibold hover:bg-gradient-to-r from-green-500 to-sky-500 text-white shadow-sky-400 rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>

        <div className='flex h-[500px] mx-[40px] mt-[80px]'>
            <div className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Conference} alt="" />
            </div>
            <div className='w-[50%]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold ml-[50px] pt-[50px] my-[10px]'>Xplore Conference</h1>
                    <p className='text-xl px-[50px] my-1'> June 30, 2024
                    </p>
                    <p className='text-xl px-[50px] mb-4 italic'>
                        Virtual Event
                    </p>
                    <button className='bg-sky-400 hover:bg-gradient-to-r from-green-500 to-sky-500 font-semibold text-white shadow-sky-400 rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Programs
