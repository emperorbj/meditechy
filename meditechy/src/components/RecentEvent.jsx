import Footer from "./Footer"
import Navbar from "./Navbar"
import Newsletters from "./Newsletters"


const RecentEvent = () => {
    return (
        <section className="h-[100vh]">
            <Navbar />
            <div className="mt-[75px] h-[650px] bg-gradient-to-r from-purple-950 to-purple-800">
                <div className="h-[30%] flex justify-center items-center">
                    <h1 className="w-[400px] flex justify-center  ">
                        <img className="w-[100%] object-cover h-[100%]" src="https://ehr.meditech.com/themes/ehrmeditech/images/events/MEDITECH-LIVE-24-Logo--Light.png" alt="" />
                    </h1>
                </div>
                <div>
                    <h1 className="text-3xl text-white h-[10%] py-[5px] text-center font-semibold">The Picture of Health: Moving{" "}<span className="text-3xl font-bold text-green-400 font-fira">Beyond</span>{" "}the Frame</h1>
                </div>
                <div className="h-[65%] flex ">
                    <div className="w-[60%] flex items-center justify-center px-[50px] bg-transparent">
                        <p className="text-white leading-loose font-medium text-xl font-myFont">
                            Let's get candid. Each weighty decision you make sets the tone for the future of health in your community and beyond.
                            MEDITECH LIVE, our annual in-person conference, brings together innovative healthcare leadership for three days of fellowship and idea exchange.
                            With high-level breakout sessions, speakers, and panel discussions, this is the event to attend for sharpening your focus and making transformational change together.
                            Join us in Foxborough, MA this September as we work together on shaping healthcare's tomorrow.
                        </p>
                    </div>
                    <div className="w-[40%] flex items-center justify-center">
                        <video className="bg-transparent rounded-tl-[50px] rounded-br-[50px] object-cover h-[80%]" src="https://ehr.meditech.com/themes/ehrmeditech/videos/events/mtlive24--people-broken-frame.mp4" loop muted autoPlay alt="" />
                    </div>
                </div>
            </div>
            <div className="font-myFont h-[350px] flex px-[60px]">
                <div className=" flex items-center justify-center w-[50%] h-[100%]">
                    <div className="mr-[-340px] py-[20px] flex items-center flex-col gap-1">
                        <h1 className="text-xl font-semibold">DATE</h1>
                        <p>27th April, 2024</p>
                        <h1 className="text-xl font-semibold">VENUE</h1>
                        <p>ICC Hall, University of Ibadan</p>
                        <h1 className="text-xl font-semibold">TIME</h1>
                        <p>10:00AM-12:00PM</p>
                    </div>
                </div>
                <div className=" pb-[20px]">
                    <img className="h-[100%] w-[100%] object-cover" src="https://ehr.meditech.com/themes/ehrmeditech/images/events/MT_LIVE_BusinessFrame_overWhite.png" alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="px-[35px] py-[15px] text-xl hover:text-xl hover:font-bold hover:bg-purple-600 text-white text-semibold rounded-lg shadow bg-gradient-to-r from-purple-800 to-purple-700 ">
                    Register here
                </button>
            </div>
            <div className="mt-[20px]">
                <Newsletters/>
                <Footer/>
            </div>
        </section>
    )
}

export default RecentEvent
