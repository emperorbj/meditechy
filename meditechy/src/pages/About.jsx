import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Team from "../components/Team";
import Choose from "../components/Choose";
import Sponsors from "../components/Sponsors"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react';
import NumberTicker from "../components/NumberTicker";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'






const About = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    },[])

    return (
        <div className="bg-slate-50 font-myFont">
            <Navbar />
            {/* about us container */}
            <div className="font-myWorkSans flex justify-between mx-[70px] mt-[80px] h-[750px]">
                {/* vision divs left and right */}
                <div className="bg-white flex flex-col items-center justify-center border rounded-md  gap-[100px] h-[100%]  w-[53%]">
                    <div className=" ml-[30px] mr-[30px]">
                        {loading ? <Skeleton style={{width:"600px", height:"40px"}}/>:
                        <h2 className="text-xl mt-[-30px] font-bold text-blue-400"> How it started</h2>
                        }
                        {loading ? <Skeleton style={{width:"600px", height:"70px",marginTop:"20px"}}/>:
                        
                        <h1 className="text-5xl font-semibold mt-[40px] text-slate-900">Our Dream is Bridging The Gap Between Technology And Medicine</h1>
                        }
                    </div>
                    <div className="px-[30px]">
                    {loading ? <Skeleton style={{width:"650px", height:"450px",marginBottom:"40px"}}/>:

                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit 
                        earum praesentium optio facere autem odit porro, sed illum perspiciatis nesciunt quae. 
                        Officiis provident dignissimos beatae excepturi ducimus, praesentium nisi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas ipsam, doloribus sequi nostrum error maiores doloremque ex
                        quam qui magni harum laborum quod voluptate iure ut eligendi labore non neque.</p>
                    }
                    </div>
                </div>
                <div className="h-[100%] flex flex-col gap-3 w-[46%]">
                {loading ? <Skeleton style={{width:"630px", height:"500px"}}/>:
                    <div className="rounded-lg shadow-md">
                        <iframe title="about-us" width={630} height={500} src="https://fast.wistia.net/embed/iframe/6ycfi660ul"/>
                    </div>
                }
                    <div className="bg-white border mt-[30px] shadow rounded-lg h-[30%] grid grid-cols-2 pt-[20px] pl-[15px]">
                        <div className="bg-slate-100 text-center shadow-md rounded-md w-[290px] h-[80px]">
                            {/* <h1 className="text-blue-400 text-2xl font-semibold mt-[5px]">1000</h1> */}
                            <NumberTicker start={0} end={140} duration={5000}/>
                            <p className=" font-medium text-xl ">Events</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <NumberTicker start={0} end={80} duration={5000}/>
                            <p className=" font-medium text-xl ">Communities</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <NumberTicker start={0} end={240} duration={5000}/>
                            <p className=" font-medium text-xl ">Projects</p>
                        </div>
                        <div className="bg-slate-100 shadow-md text-center rounded-md w-[290px] h-[80px]">
                            <NumberTicker start={0} end={45} duration={5000}/>
                            <p className=" font-medium text-xl ">Awards</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* first  */}
            <div className='font-myWorkSans flex h-[500px] mx-[40px] mt-[80px]'>
                <div className="w-[50%] rounded-[10px] shadow-lg">
                {loading ? <Skeleton style={{width:"100%", height:"100%"}}/>:
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/meditech-staff-working-together-on-whiteboard.jpg" alt="" />
                }
                    </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl  font-bold text-center pt-[50px] my-[10px]'>Mission driven</h1>
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
            {/* second */}
            <div className='font-myWorkSans flex flex-row-reverse h-[500px] mx-[40px] mt-[80px]'>
                <div className="w-[50%] rounded-[10px] shadow-lg">
                {loading ? <Skeleton style={{width:"100%", height:"100%"}}/>:
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/two-meditechers-embracing-each-other.jpg" alt="" />
                }
                    </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl  font-bold text-center pt-[50px] my-[10px]'>Devoted to all our employees</h1>
                        <p className='text-xl px-[50px] mb-[40px]'>
                        At MEDITECH we believe there is strength in a diverse workforce, powered 
                        by the contributions of people from different backgrounds, perspectives, 
                        and life experiences. We are committed to fostering a work environment 
                        and culture where all our staff members can reach their fullest potential.
                        </p>
                    </div>
                </div>
            </div>
            {/* third */}
            <div className='font-myWorkSans flex h-[500px] mx-[40px] mt-[80px]'>
                <div className="w-[50%] rounded-[10px] shadow-lg">
                {loading ? <Skeleton style={{width:"100%", height:"100%"}}/>:
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/canton-building-aerial-shot.jpg" alt="" />
                }
                    </div>
                <div className='w-[50%]'>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl  font-bold text-center pt-[50px] my-[10px]'>Committed to community</h1>
                        <p className='text-xl px-[50px] mb-[40px]'>
                        Being part of a community means several things. At MEDITECH, we think environmentally. 
                        We promote the arts and sciences in local higher education and support local businesses. 
                        From the blood drives we hold regularly in our facilities to 
                        the financial and technical support we provide to our neighbors in Puerto Rico, 
                        MEDITECH strives to be a responsible member of the global community.
                        </p>
                    </div>
                </div>
            </div>
            <Choose/>
            <section className="max-w-7xl w-[100%] mx-auto mt-12">
                <h1 className="text-center text-3xl font-medium my-5">Frequently Asked Questions</h1>
            <Accordion defaultIndex={[0]} allowMultiple style={{border:"solid 2px skyblue", borderRadius:"10px"}}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' style={{paddingTop:"20px", 
                                paddingBottom:"20px", 
                                fontSize:"20px",
                                color:"skyblue"}}>
                                Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'style={{paddingTop:"20px", 
                                paddingBottom:"20px", 
                                fontSize:"20px",
                                color:"skyblue"}}>
                                Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        
            </section>
            <Team/>
            <Sponsors/>
            <Footer />
        </div>
    )
}

export default About




