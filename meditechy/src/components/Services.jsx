import Telemedicine from '../assets/consultation.png'
import Information from '../assets/guidlines.png'
import Community from '../assets/community.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <section className='flex flex-col font-myFont bg-slate-50'>
            {/* text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 */}
            <h1 className='text-4xl font-bold text-center mt-[200px] mb-[50px] 
            text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
            
            <div className='flex gap-10 px-[30px] h-[500px]'>
                {/* Each card design ONE*/}
                
                <div
                    className='flex flex-col h-[460px] bg-white/20 backdrop-blur-xl  rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='h-[70px] w-[70px] mt-[30px]' >
                                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Telemedicine} alt="" />
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>TELEMEDICINE</h1>
                        </div>
                    <div>
                        <p className='px-[20px] text-center text-slate-800 text-xl mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                
                {/* Each card design TWO*/}
                
                <div
                    className='flex flex-col h-[460px] bg-white/20 backdrop-blur-xl rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='h-[70px] w-[70px] mt-[30px]' >
                                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Information} alt="" />
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>HEALTH INFORMATION</h1>
                        </div>
                    <div>
                    
                        <p className='px-[20px] text-center mt-[20px] text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                
                {/* Each card design THREE*/}
                
                <div
                    className='flex flex-col h-[460px] bg-white/20 backdrop-blur-xl rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <div className='h-[70px] w-[70px] mt-[30px]' >
                                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Community} alt="" />
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>OUR COMMUNITY</h1>
                        </div>
                    <div>
                        <p className='px-[20px] text-center mt-[20px] text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Services

