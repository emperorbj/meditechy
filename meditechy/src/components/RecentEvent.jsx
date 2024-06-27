import Navbar from "./Navbar"


const RecentEvent = () => {
    return (
        <section className="h-[100vh]">
            <Navbar />
            <div className="mt-[60px] h-[750px] bg-gradient-to-r from-purple-950 to-purple-800">
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
        </section>
    )
}

export default RecentEvent
