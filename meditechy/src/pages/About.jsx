import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutHeader from "../assets/aboutheader1.webp";
import Team from "../components/Team";
import Choose from "../components/Choose";
import Sponsors from "../components/Sponsors";


const About = () => {
    return (
        <div className="bg-slate-50 font-myFont">
            <Navbar />
            {/* about us container */}
            <div className="flex justify-between mx-[70px] mt-[80px] h-[750px]">
                {/* vision divs left and right */}
                <div className="bg-white flex flex-col items-center justify-center border rounded-md  gap-[100px] h-[100%]  w-[53%]">
                    <div className=" ml-[30px] mr-[30px]">
                        <h2 className="text-xl mt-[-30px] font-bold text-blue-400"> How it started</h2>
                        <h1 className="text-5xl font-semibold mt-[40px] text-slate-900">Our Dream is Bridging The Gap Between Technology And Medicine</h1>
                    </div>
                    <div className="px-[30px]">
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit 
                        earum praesentium optio facere autem odit porro, sed illum perspiciatis nesciunt quae. 
                        Officiis provident dignissimos beatae excepturi ducimus, praesentium nisi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas ipsam, doloribus sequi nostrum error maiores doloremque ex
                        quam qui magni harum laborum quod voluptate iure ut eligendi labore non neque.</p>
                    </div>
                </div>
                <div className="h-[100%] flex flex-col gap-3 w-[46%]">
                    <div className="rounded-lg shadow-md">
                        <img className="rounded-lg" srcSet={AboutHeader} alt="" />
                    </div>
                    <div className="bg-white border mt-[30px] shadow rounded-lg h-[30%] grid grid-cols-2 pt-[20px] pl-[15px]">
                        <div className="bg-slate-100 text-center shadow-md rounded-md w-[290px] h-[80px]">
                            <h1 className="text-blue-400 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-blue-400 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-blue-400 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <h1 className="text-blue-400 text-2xl font-semibold mt-[5px]">1000</h1>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <Choose/>
            <Sponsors/>
            <Footer />
        </div>
    )
}

export default About




