// import Telemedicine from '../assets/consultation.png'
// import Information from '../assets/guidlines.png'
// import Community from '../assets/community.png'
import Lottie from "lottie-react"
import drug from "../Drug.json"
import race from "../Races.json"
import healthInfo from "../DoctorsContactTwo.json"

const style = {
    height: 100,
    width: 100
}

const styleTwo = {
    height: 150,
    width: 150
}

const Services = () => {


    return (
        <section className='flex flex-col font-myFont h-[1400px] md:h-[1200px] lg:h-[760px] bg-slate-50'>
            {/* text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 */}
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-center md:mt-[140px] 
            lg:mt-[170px] mb-[50px] 
            text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:space-x-3 lg:space-x-5 
            px-[30px] h-[1200px] md:h-[1000px] lg:h-[500px]'>
                {/* Each card design ONE*/}
                
                <div
                    className='hover:bg-sky-100 flex flex-col h-[370px] md:h-[410px] lg:h-[460px] 
                    bg-white/20 backdrop-blur-xl  rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[20px]'>
                            <div className='h-[70px] w-[70px] mt-[10px]' >
                                {/* <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Telemedicine} alt="" /> */}
                                <Lottie loop={true} style={style} animationData={drug}/>
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>TELEMEDICINE</h1>
                        </div>
                    <div className='mt-[50px]'>
                        <p className=' px-[20px] text-center text-slate-800 text-xl mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis </p>
                    </div>
                </div>
                
                {/* Each card design TWO*/}
                
                <div
                    className='hover:bg-sky-100 flex flex-col h-[370px] md:h-[410px] lg:h-[460px] bg-white/20 backdrop-blur-xl rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[60px]'>
                            <div className='h-[70px] w-[70px] mt-[30px]' >
                                {/* <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Information} alt="" /> */}
                                <Lottie loop={true} style={styleTwo} animationData={healthInfo}/>
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>HEALTH INFORMATION</h1>
                        </div>
                    <div>
                    
                        <p className='px-[20px] text-center mt-[55px] text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur</p>
                    </div>
                </div>
                
                {/* Each card design THREE*/}
                
                <div
                    className=' hover:bg-sky-100 flex flex-col h-[370px] md:h-[410px] lg:h-[460px] bg-white/20 backdrop-blur-xl rounded-xl shadow-md'>
                        <div className='flex items-center justify-center gap-[60px]'>
                            <div className='h-[70px] w-[70px] mt-[30px] mr-[30px]' >
                                {/* <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Community} alt="" /> */}
                                <Lottie loop={true} style={styleTwo} animationData={race}/>
                            </div>
                            <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-sky-400 mt-[20px]'>OUR COMMUNITY</h1>
                        </div>
                    <div>
                        <p className='px-[20px] text-center mt-[60px] text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur</p>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Services

