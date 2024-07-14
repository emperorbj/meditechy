import Navbar from "../components/Navbar"
import ReactPlayer from "react-player"
import Lottie from "lottie-react"
import CommunityOne from "../Robotics Students.json"
import CommunityTwo from "../Hospital Reception.json"
import CommunityThree from "../Creating Application.json"
import Footer from "../components/Footer";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from "react"


const Community = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    },[])

    return (
        <div>
            <Navbar/>
            {/* header-community */}
            <div className="mt-[85px] flex  gap-5 px-[10] font-myWorkSans py-[10px] rounded-[10px] h-[550px] bg-slate-200 mx-[40px]">
                <div className="ml-[20px] w-[50%] ">
                {loading ? <Skeleton style={{width:"100%", height:"100%", objectFit:"cover"}}/>:
                    <ReactPlayer style={{objectFit:"cover", 
                        width:"100%", height: "100%", 
                        marginTop: "50px", 
                        }}  url="https://www.youtube.com/watch?v=_GaaRDtvfa0" loop ={true} controls={true} />
                    }
                </div>
                <div className=" w-[50%] flex flex-col gap-5 px-[30px] items-center justify-center">
                    <h1 className="text-3xl text-green-400 font-semibold">A Dedicated Community</h1>
                    <p className="text-xl leading-9">
                    For MEDITECH, being part of a community has many meanings. 
                    We think environmentally. We engage in the arts and sciences in 
                    local higher education and support local businesses. From the blood 
                    drives we hold regularly in our facilities to the financial and technical
                    support we provide to our neighbors
                    in Puerto Rico, MEDITECH strives to be a responsible member of the global community
                    </p>
                    <button className="text-xl text-black px-[40px] border-[2px] border-black hover:border-sky-400 hover:text-sky-400 hover:bg-white py-[10px] rounded-md shadow  bg-sky-400">Join us</button>
                </div>
            </div>
            {/* firts section */}
            <div className='font-myWorkSans flex h-[500px] mx-[40px] mt-[80px]'>
                <div className="w-[50%] flex items-center justify-center">
                    <Lottie loop={true} animationData={CommunityOne}
                    style={{width:"200",height:"200"}}/>
                </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl text-green-500  font-bold text-center pt-[50px] my-[10px]'>STEM Education & Innovation</h1>
                        <p className='text-xl px-[50px] mb-[40px]'>
                        MEDITECH works closely with local middle and high schools 
                        educating on what we do and STEM careers as a whole. 
                        The goal of this program is to expose children, at a 
                        relatively young age, to the science, technology, 
                        engineering, and math fields with the hope of piquing 
                        their interest in these fields.<br/>
                        MEDITECH partners with the Northeastern University 
                        Nurse Innovation and Entrepreneurship Advisory Board, 
                        bringing leaders of healthcare, electronic health records, 
                        and digital applications together 
                        with nurses and nursing students to explore new solutions to clinical issues.
                        </p>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className='font-myWorkSans flex flex-row-reverse h-[500px] mx-[40px] mt-[80px]'>
                <div className="w-[50%] flex items-center justify-center">
                    <Lottie loop={true} animationData={CommunityThree}
                    style={{width:"200",height:"200"}}/>
                </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl text-green-500  font-bold text-center pt-[50px] my-[10px]'>Mission driven</h1>
                        <p className='text-xl px-[50px] mb-[40px]'>
                        MEDITECH wants to help build a world where every patient can access their health information and participate 
                        fully in their own care. We think all healthcare organizations can serve their communities quicker and more
                        safely if patients and providers have instant access to records, knowledge, and data.
                        To that end, we set out to create better technologies for secure and cost-effective care, with our scalable 
                        Cloud Platform, MEDITECH as a Service (MaaS), and our strategic partnerships with Google and Apple. And with leading innovation in areas like mobility, genomics, and AI, we will be ready for what comes next.
                        </p>
                    </div>
                </div>
            </div>
            {/* third section */}
            <div className='font-myWorkSans flex h-[500px] mx-[40px] mt-[100px]'>
                <div className="w-[50%] flex items-center justify-center">
                    <Lottie loop={true} animationData={CommunityTwo}
                    style={{width:"200",height:"200"}}/>
                </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl text-green-500  font-bold text-center pt-[50px] my-[10px]'>Mission driven</h1>
                        <p className='text-xl px-[50px] mb-[40px]'>
                        MEDITECH wants to help build a world where every patient can access their health information and participate 
                        fully in their own care. We think all healthcare organizations can serve their communities quicker and more
                        safely if patients and providers have instant access to records, knowledge, and data.
                        To that end, we set out to create better technologies for secure and cost-effective care, with our scalable 
                        Cloud Platform, MEDITECH as a Service (MaaS), and our strategic partnerships with Google and Apple. And with leading innovation in areas like mobility, genomics, and AI, we will be ready for what comes next.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Community
