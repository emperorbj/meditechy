import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetters from "../components/Newsletters"
import rightArrow from "../assets/rightArrow.png"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from "react"

const Blogs = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    }, [])

    return (
        <>
            <Navbar />
            {/* top section */}
            <section className="md:mx-[20px] lg:mx-[45px] bg-slate-50 font-myFont mt-[20px] 
            md:mt-[65px] 
            h-[2500px] md:h-[1100px] 
            lg:h-[720px]">
                <div className="h-[5%] md:h-[5%] lg:h-[15%] pt-[20px]">
                    <h1 className="font-playWrite text-2xl font-bold text-center"> Our Blogs</h1>
                </div>
                <div className=" md:flex-col lg:flex lg:flex-row h-[95%] 
                md:h-[90%] 
                lg:h-[85%]">
                    {/* big top story right side */}
                    <div className=" h-[26%] md:h-[60%] lg:h-[100%] 
                    md:w-full lg:w-[50%] pr-5">
                        {/* image container */}
                        <div className="h-[50%] md:h-[50%] lg:h-[57%]">
                            {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                <img className="h-[100%] rounded-[4px] w-[100%] object-cover" src="https://blog.meditech.com/hubfs/sway-health-award--2024--hubspot-page.jpg" alt="" />
                            }
                        </div>
                        {/* description container */}
                        <div className="h-[50%] md:h-[50%] lg:h-[43%] pl-[10px] flex 
                        flex-col md:gap-1 lg:gap-3">
                            {loading ? <Skeleton style={{ width: "400px", height: "34px", marginTop: "20px" }} /> :
                                <h1 className="text-center mt-5 text-green-600 hover:text-green-400 font-bold text-2xl">
                                    Celebrating a community of innovators at Swaay.Health Live 2024
                                </h1>
                            }                       {loading ? <Skeleton style={{ width: "300px", height: "30px" }} /> :
                                <div className="flex gap-5">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            }

                            {loading ? <Skeleton style={{ width: "400px", height: "54px" }} /> :
                                <p>
                                    Last week I attended Swaay.Health Live, a premier HIT annual marketing event, and had the opportunity to connect with customers
                                    and many industry friends over the course of the three day conference.
                                </p>
                            }

                            {loading ? <Skeleton style={{ width: "250px", height: "30px" }} /> :
                                <a className="hover:text-white font-bold" href="https://blog.meditech.com/celebrating-a-community-of-innovators-at-swaay-health-live-2024">
                                    <button className="px-[30px] rounded-[5px] py-[10px] bg-sky-500">
                                        Read more
                                    </button>
                                </a>
                            }
                        </div>
                    </div>
                    {/* top stories container */}
                    <div className=" w-full md:w-full lg:w-[50%] flex flex-col px-[15px] 
                    gap-3 md:gap-7 
                    lg:gap-2 
                    md:py-[4px]  
                    justify-center h-[74%] md:h-[40%] lg:h-[100%]">
                        <h1 className="bg-slate-50 h-4% md:h-[4%] mt-4 sm:mt-4 lg:h-[10%] text-2xl 
                        md:mb-[30px] 
                        font-bold"> OUR TOP STORIES</h1>
                        <div className="flex-col md:flex md:flex-row h-[32%] md:h-[32%] lg:h-[30%]">
                            {/* top stories left and right divs */}
                            <div className="w-full md:w-[50%] lg:w-[65%] flex flex-col 
                            justify-center 
                            gap-3 px-[15px] 
                            h-[40%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "390px", height: "59px" }} /> :
                                    <a className="hover:text-sky-700" href="https://blog.meditech.com/southern-ohio-medical-center-battles-the-opioid-crisis-and-drives-change-in-their-community">
                                        <h2 className="text-xl text-green-600 
                                        hover:text-green-400 font-bold">
                                            Southern Ohio Medical Center battles the opioid crisis and drives change in their community
                                        </h2>
                                    </a>
                                }
                                {loading ? <Skeleton style={{ width: "360px", height: "30px", objectFit: "cover" }} /> :
                                    <div className="flex gap-2">
                                        <p>By Juwon Adeoba</p>
                                        <p>7th{" "}July,2024</p>
                                    </div>
                                }
                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-full md:w-[50%] lg:w-[35%] h-[60%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} /> :
                                    <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://blog.meditech.com/hubfs/dr-porter-blog-1.jpg" alt="" />
                                }
                            </div>
                        </div>
                        <div className="flex-col md:flex md:flex-row h-[32%] md:h-[32%] lg:h-[30%]">
                            <div className="w-full md:w-[50%] lg:w-[65%] flex flex-col 
                            justify-center 
                            gap-3 px-[15px] 
                            h-[40%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "390px", height: "59px" }} /> :
                                    <a className="hover:text-sky-700" href="https://blog.meditech.com/spotting-medical-provider-burnout-a-call-to-action">
                                        <h2 className="text-xl text-green-600 hover:text-green-400 font-bold">
                                            Spotting medical provider burnout: A call to action
                                        </h2>
                                    </a>
                                } {loading ? <Skeleton style={{ width: "360px", height: "30px", objectFit: "cover" }} /> :
                                    <div className="flex gap-2">
                                        <p>By Juwon Adeoba</p>
                                        <p>7th{" "}July,2024</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full md:w-[50%] lg:w-[35%] h-[60%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://blog.meditech.com/hubfs/Blog_PhysBurnout.jpeg" alt="" />
                                }
                            </div>
                        </div>
                        <div className="flex-col md:flex md:flex-row h-[32%] md:h-[32%] lg:h-[30%]">
                            <div className="w-full md:w-[50%] lg:w-[65%] flex flex-col 
                            justify-center 
                            gap-3 px-[15px] 
                            h-[40%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "390px", height: "59px" }} /> :
                                    <a className="hover:text-sky-700" href="https://blog.meditech.com/using-innovative-technology-to-drive-quality-improvement-efforts">
                                        <h2 className="text-xl text-green-600 hover:text-green-400 font-bold">
                                            Using innovative technology to drive quality improvement efforts
                                        </h2>
                                    </a>
                                }

                                {loading ? <Skeleton style={{ width: "360px", height: "30px", objectFit: "cover" }} /> :
                                    <div className="flex gap-2">
                                        <p>By Juwon Adeoba</p>
                                        <p>7th{" "}July,2024</p>
                                    </div>
                                }
                            </div>
                            <div className="w-full md:w-[50%] lg:w-[35%] h-[60%] md:h-[100%]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://blog.meditech.com/hubfs/blog--successes-2024--hubspot-page.jpg" alt="" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* lower section */}
            <section>
                <div className=" font-myFont">
                    <h1 className='text-center font-playWrite text-3xl font-bold mt-40'>HERE ARE OUR PAST BLOGS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 
                    lg:gap-10 p-4 md:p-5 lg:p-10">
                        <div className="bg-white border-[2px] shadow-md border-slate-100 
                        hover:bg-slate-100 flex flex-col gap-3 md:w-[350px] lg:w-[470px] rounded-[8px]">
                            <div className="h-[300px] rounded-t-[8px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/MKT-18709_Blog_AmberwellBCA.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>Clinicians and IT team up to maximize efficiency at Amberwell Health</h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex cursor-pointer items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/clinicians-and-it-team-up-to-maximize-efficiency-at-amberwell-health">

                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>

                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="md:w-[350px] lg:w-[470px] border-[2px] shadow-md border-slate-100 
                        hover:bg-slate-100 rounded-t-[8px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/darrell-bodnar-NCH--hubspot-page-1.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>Tips for participating in CHIME’s Digital Health Most Wired program and survey</h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex cursor-pointer items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/tips-for-participating-in-chimes-digital-health-most-wired-program-and-survey">
                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>
                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="md:w-[350px] lg:w-[470px] border-[2px] shadow-md border-slate-100 hover:bg-slate-100 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/MKT-18142_Blog_SurveillanceCollaborative-1.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>Surveillance Collaborative breaks new ground with
                                        MEDITECH predictive analytics solution
                                    </h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex cursor-pointer items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/surveillance-collaborative-breaks-new-ground-with-meditechs-predictive-analytics-solution">
                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>
                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="md:w-[350px] lg:w-[470px] border-[2px] shadow-md border-slate-100 hover:bg-slate-100 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/SI-conference--people--2024--main-image%20%281%29.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>How curiosity birthed a
                                        thriving professional
                                        development organization
                                    </h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex cursor-pointer items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/how-curiosity-birthed-a-thriving-professional-development-organization">
                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>
                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="md:w-[350px] lg:w-[470px] border-[2px] shadow-md border-slate-100 hover:bg-slate-100  rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/MUSE-2024--recap--hubspot-page-1.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>Atheists’ Faith in Science is Misplaced</h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex cursor-pointer items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/meditech-supports-innovation-and-cultivates-partnerships-at-muse-inspire-2024">
                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>
                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="md:w-[350px] lg:w-[470px] border-[2px] shadow-md border-slate-100 hover:bg-slate-100 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                {loading ? <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} /> :
                                    <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://blog.meditech.com/hubfs/phelps-blog--hubspot-page%20%281%29.jpg" alt="" />
                                }
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                {loading ? <Skeleton style={{ width: "300px", height: "36px", objectFit: "cover" }} /> :
                                    <h1 className='font-semibold text-green-600 hover:text-green-400 text-xl'>A revenue cycle roadmap leads to positive outcomes at Phelps Memorial Health Center</h1>
                                }

                                {loading ? <Skeleton style={{ width: "200px", height: "40px" }} /> :
                                    <div className="flex items-center justify-center gap-2">
                                        <a href="https://blog.meditech.com/a-revenue-cycle-roadmap-leads-to-positive-outcomes-at-phelps-memorial-health-center">
                                            <button className='text-slate-800 hover:text-sky-500'>Read more</button>
                                        </a>
                                        <img className="w-[12px] mb-1 h-[12px]" src={rightArrow} alt="" />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLetters />
            <Footer />
        </>
    )
}

export default Blogs
