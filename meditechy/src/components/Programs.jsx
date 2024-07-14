import Program1 from '../assets/class.jpg'
import Startup from '../assets/startup.jpg'
import Conference from '../assets/conference.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Programs = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AOS.init();
        setTimeout(() => setLoading(false), 4000);
    },[])

    return (
        // <>
        // <div className='flex h-[500px] mx-[40px] mt-[80px]'>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
        //         <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Program1} alt="" />
        //     </div>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-left' className='w-[50%]'>
        //         <div className='h-[100%] flex flex-col'>
        //             <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>Join us on our Data Sceince learning Initaitive Program.</h1>
        //             <p className='text-xl px-[50px] mb-[40px]'>This program promises to be the most interesting of our time, and you get to learn about medical technology
        //             </p>
        //             <button className='border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
        //                 Register here
        //             </button>
        //         </div>
        //     </div>
        // </div>

        // <div className='flex flex-row-reverse h-[500px] mx-[40px] mt-[30px]'>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
        //         <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Startup} alt="" />
        //     </div>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-left' className='w-[50%] rounded-[10px]'>
        //         <div className='h-[100%] flex flex-col'>
        //             <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>Startups Under meditechy AFrica Community.</h1>
        //             <p className='text-xl px-[50px] mb-[40px]'>This program promises to be the most interesting of our time, and you get to learn about medical technology
        //             </p>
        //             <button className=' font-semibold border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
        //                 Register here
        //             </button>
        //         </div>
        //     </div>
        // </div>

        // <div className='flex h-[500px] mx-[40px] mt-[80px]'>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
        //         <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Conference} alt="" />
        //     </div>
        //     <div data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='fade-left' className='w-[50%]'>
        //         <div className='h-[100%] flex flex-col'>
        //             <h1 className='text-4xl font-bold ml-[50px] pt-[50px] my-[10px]'>Xplore Conference</h1>
        //             <p className='text-xl px-[50px] my-1'> June 30, 2024
        //             </p>
        //             <p className='text-xl px-[50px] mb-4 italic'>
        //                 Virtual Event
        //             </p>
        //             <button className='border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
        //                 Register here
        //             </button>
        //         </div>
        //     </div>
        // </div>

        // </>
        <>
        <div className='flex h-[500px] mx-[40px] mt-[80px]'>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                {loading ? (
                    <Skeleton height="100%" width="100%" />
                ) : (
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Program1} alt="" />
                )}
            </div>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-left' className='w-[50%]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>
                        {loading ? <Skeleton width={300} /> : 'Join us on our Data Science Learning Initiative Program.'}
                    </h1>
                    <p className='text-xl px-[50px] mb-[40px]'>
                        {loading ? <Skeleton count={3} /> : 'This program promises to be the most interesting of our time, and you get to learn about medical technology'}
                    </p>
                    {loading ? (
                        <Skeleton width={150} height={40} />
                    ) : (
                        <button className='border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                            Register here
                        </button>
                    )}
                </div>
            </div>
        </div>

        <div className='flex flex-row-reverse h-[500px] mx-[40px] mt-[30px]'>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                {loading ? (
                    <Skeleton height="100%" width="100%" />
                ) : (
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Startup} alt="" />
                )}
            </div>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-left' className='w-[50%] rounded-[10px]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold text-center pt-[50px] my-[10px]'>
                        {loading ? <Skeleton width={300} /> : 'Startups Under Meditechy Africa Community.'}
                    </h1>
                    <p className='text-xl px-[50px] mb-[40px]'>
                        {loading ? <Skeleton count={3} /> : 'This program promises to be the most interesting of our time, and you get to learn about medical technology'}
                    </p>
                    {loading ? (
                        <Skeleton width={150} height={40} />
                    ) : (
                        <button className='font-semibold border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                            Register here
                        </button>
                    )}
                </div>
            </div>
        </div>

        <div className='flex h-[500px] mx-[40px] mt-[80px]'>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-right' className="w-[50%] rounded-tl-[50px] rounded-br-[50px] shadow-lg">
                {loading ? (
                    <Skeleton height="100%" width="100%" />
                ) : (
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-tl-[50px] rounded-br-[50px]' src={Conference} alt="" />
                )}
            </div>
            <div data-aos-delay="400" data-aos-duration="400" data-aos-offset="250" data-aos='fade-left' className='w-[50%]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-4xl font-bold ml-[50px] pt-[50px] my-[10px]'>
                        {loading ? <Skeleton width={200} /> : 'Xplore Conference'}
                    </h1>
                    <p className='text-xl px-[50px] my-1'>
                        {loading ? <Skeleton width={100} /> : 'June 30, 2024'}
                    </p>
                    <p className='text-xl px-[50px] mb-4 italic'>
                        {loading ? <Skeleton width={100} /> : 'Virtual Event'}
                    </p>
                    {loading ? (
                        <Skeleton width={150} height={40} />
                    ) : (
                        <button className='border-[2px] border-black hover:border-sky-500 hover:bg-white hover:text-sky-500 bg-sky-500 text-white rounded-[7px] shadow-sm py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                            Register here
                        </button>
                    )}
                </div>
            </div>
        </div>
    </>
    )
}

export default Programs
