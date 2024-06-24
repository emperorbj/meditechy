import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutHeader from "../assets/popup.webp";


const About = () => {
    return (
        <div className="bg-slate-50">
            <Navbar />
            {/* about us container */}
            <div className="flex justify-between mx-[70px] mt-[80px] h-[750px]">
                {/* vision divs left and right */}
                <div className="bg-yellow-300 h-[100%]  w-[53%]">

                </div>
                <div className="h-[100%] flex flex-col gap-3 w-[46%]">
                    <div className="rounded-lg shadow-md">
                        <img className="rounded-lg" srcSet={AboutHeader} alt="" />
                    </div>
                    <div className="bg-white border shadow rounded-lg h-[30%] grid grid-cols-2 pt-[20px] pl-[15px]">
                        <div className="bg-slate-100 text-center shadow-md rounded-md w-[290px] h-[80px]">
                            <h1 className="text-sky-500 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-sky-500 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-sky-500 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-sky-500 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About




