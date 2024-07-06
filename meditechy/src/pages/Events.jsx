import Navbar from "../components/Navbar"
import conference from "../assets/conference.jpg"
import speaker1 from "../assets/nprofile1.webp"
import speaker2 from "../assets/nprofile4 (1).jpg"
import speaker3 from "../assets/nprofile3.webp"
import PastEvents from "../components/PastEvents"
import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"


const Events = () => {
    return (
        <>
            <Navbar />
            <div className="px-[30px] font-myFont">
                <div className='h-[700px] relative w-full rounded-lg'>
                    <div className='rounded-lg w-full absolute top-0 left-0 h-full'>
                        <img className="rounded-lg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={conference} />
                        <div className='rounded-lg absolute top-0 left-0 h-full w-full bg-black opacity-50'></div>

                    </div>
                    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                        <div className='text-center text-white'>
                            <h1 className='text-5xl font-bold'>2024 Clinical informatics symposium</h1>
                            <p className='mt-4 text-xl'>Join us in revolutionizing healthcare</p>
                            <NavLink to="/recent-event">
                            <button className='text-[20px] font-bold mt-[30px] rounded-[10px] py-[14px] px-[60px] hover:bg-gradient-to-r from-green-500 to-sky-500 bg-sky-500 shadow-sky-500 shadow-sm '>Learn more</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-myFont" >
                <h1 className="text-center font-medium text-xl mt-[15px]">SPEAKERS</h1>
                <div className=" mt-0 h-[200px] flex items-center justify-center gap-10">
                    <div className=" flex flex-col justify-center items-center ">
                        <div className=" w-24 h-24 rounded-full border">
                            <img className="h-[100%] rounded-full w-[100%] object-cover" src={speaker1} alt="" />
                        </div>
                        <div>
                            <h1>Augustine Adebayo</h1>
                            <h2 className="font-semibold ml-[15px]">CTO InnovAI</h2>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className="w-24 h-24 rounded-full border">
                            <img className="h-[100%] rounded-full w-[100%] object-cover" src={speaker2} alt="" />
                        </div>
                        <div>
                            <h1>Jasmine Adebayo</h1>
                            <h2 className="font-semibold ml-[15px]">CEO InnovAI</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-24 h-24 rounded-full border">
                            <img className="h-[100%] rounded-full w-[100%] object-cover" src={speaker3} alt="" />
                        </div>
                        <div>
                            <h1>James Adebayo</h1>
                            <h2 className="font-semibold ml-[15px]">CFO InnovAI</h2>
                        </div>
                    </div>
                </div>
            </div>
            <PastEvents/>
            <Footer/>
        </>
    )
}

export default Events


