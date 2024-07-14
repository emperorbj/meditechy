import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';




const PastEvents = () => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Simulating data fetching
        setTimeout(() => setLoading(false), 4000);
    }, []);

    return (
    //     <section className="mx-[45px]  bg-slate-100 mb-[30px] rounded-[15px] mt-[65px]  h-[720px]">
    //         <div className=" h-[15%] pt-[20px]">
    //             <h1 className="font-myWorkSans text-2xl font-bold text-center"> Recent events</h1>
    //         </div>
    //         <div className=" flex  h-[85%]">
    //             {/* big top story right side */}
    //             <div className=" h-[100%] w-[50%] pr-5">
    //                 {/* image container */}
    //                 <div className="h-[57%]">
    //                     <img className="h-[100%] ml-[20px] rounded-[4px] w-[100%] object-cover" src="https://ehr.meditech.com/sites/default/files/images/events/meditech-live24--main-image.jpg" alt="" />
    //                 </div>
    //                 {/* description container */}
    //                 <div className="h-[43%] font-myWorkSans pl-[10px] flex flex-col gap-3">
    //                     <h1 className="text-center mt-5 font-bold text-2xl">
    //                     MEDITECH LIVE 24<br/>
    //                     Foxborough, MA
    //                     </h1>
    //                     <div className="flex gap-5">
    //                         <p>7th{" "}July,2024</p>
    //                     </div>
    //                     <p>
    //                     Preparation is in motion for MEDITECH LIVE24! We are planning 
    //                     three days of in-person collaboration surrounding Expanse, 
    //                     the intelligent EHR platform that supports the patient narrative 
    //                     at every step.
    //                     </p>
    //                     <a className="hover:text-white font-bold" href="https://crossexamined.org/how-to-talk-with-your-teens-about-sex-and-love-from-a-biblical-worldview-interview-with-sean-mcdowell/">
    //                         <button className="px-[30px] mb-[20px] rounded-[50px] border border-black hover:bg-white hover:text-sky-500 text-white py-[10px] bg-sky-400">
    //                             watch here
    //                         </button>
    //                     </a>
    //                 </div>
    //             </div>
    //             {/* top stories container */}
    //             <div className="w-[50%] font-myWorkSans flex flex-col px-[15px] gap-2 py-[4px]  justify-center h-[100%]">
    //                 <h1 className="bg-slate-100 h-[10%] text-2xl font-bold"> OUR TOP EVENTS</h1>
    //                 <div className=" flex h-[30%]">
    //                     {/* top stories left and right divs */}
    //                     <div className="w-[60%] flex flex-col justify-center gap-3 px-[15px] h-[100%]">
    //                         <a className="hover:text-sky-700" href="#">
    //                             <h2 className="text-xl font-bold">
    //                             SINI2024<br/>
    //                             Virtual Event
    //                             </h2>
    //                         </a>
    //                         <div className="flex gap-2">
    //                             <p>7th{" "}July,2024</p>
    //                         </div>
    //                     </div>
    //                     {/* image-right-side-top-stories-container */}
    //                     <div className="w-[40%] h-[100%]">
    //                         <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://ehr.meditech.com/sites/default/files/images/events/2024Sini_Article.jpg" alt="" />
    //                     </div>
    //                 </div>
    //                 <div className=" flex h-[30%]">
    //                     <div className="w-[60%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
    //                         <a className="hover:text-sky-700" href="#">
    //                             <h2 className="text-xl font-bold">
    //                             MUN Annual Conference 2024<br/>
    //                             Liverpool, GBR
    //                             </h2>
    //                         </a>
    //                         <div className="flex gap-2">
    //                             <p>7th{" "}July,2024</p>
    //                         </div>
    //                     </div>
    //                     <div className="w-[40%] h-[100%]">
    //                         <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://ehr.meditech.com/sites/default/files/images/events/2024MUNsavethedate_Article-1.jpg" alt="" />
    //                     </div>
    //                 </div>
    //                 <div className=" flex h-[30%]">
    //                     <div className="w-[60%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
    //                         <a className="hover:text-sky-700" href="#">
    //                             <h2 className="text-xl font-bold">
                                
    //                             MEDITECH Arkansas Roadshow<br/>
    //                             Little Rock, AR
    //                             </h2>
    //                         </a>
    //                         <div className="flex gap-2">
    //                             <p>7th{" "}July,2024</p>
    //                         </div>
    //                     </div>
    //                     <div className="w-[40%] h-[100%]">
    //                         <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://ehr.meditech.com/sites/default/files/images/events/2024AKroadshow_Article.jpg" alt="" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    // </section>

    ////////////////////////////////////////////////////////////
    <section className="mx-[45px] bg-slate-100 mb-[30px] rounded-[15px] mt-[65px] h-[720px]">
    <div className="h-[15%] pt-[20px]">
        <h1 className="font-myWorkSans text-2xl font-bold text-center">
            {loading ? <Skeleton width={200} /> : 'Recent events'}
        </h1>
    </div>
    <div className="flex h-[85%]">
        {/* big top story right side */}
        <div className="h-[100%] w-[50%] pr-5">
            {/* image container */}
            <div className="h-[57%]">
                {loading ? (
                    <Skeleton height="100%" width="100%" />
                ) : (
                    <img
                        className="h-[100%] ml-[20px] rounded-[4px] w-[100%] object-cover"
                        src="https://ehr.meditech.com/sites/default/files/images/events/meditech-live24--main-image.jpg"
                        alt=""
                    />
                )}
            </div>
            {/* description container */}
            <div className="h-[43%] font-myWorkSans pl-[10px] flex flex-col gap-3">
                <h1 className="text-center mt-5 font-bold text-2xl">
                    {loading ? <Skeleton width={150} /> : 'MEDITECH LIVE 24'}
                    <br />
                    {loading ? <Skeleton width={100} /> : 'Foxborough, MA'}
                </h1>
                <div className="flex gap-5">
                    <p>{loading ? <Skeleton width={80} /> : '7th July, 2024'}</p>
                </div>
                <p>
                    {loading ? (
                        <Skeleton count={3} />
                    ) : (
                        `Preparation is in motion for MEDITECH LIVE24! We are planning 
                        three days of in-person collaboration surrounding Expanse, 
                        the intelligent EHR platform that supports the patient narrative 
                        at every step.`
                    )}
                </p>
                {loading ? (
                    <Skeleton width={100} height={40} />
                ) : (
                    <a
                        className="hover:text-white font-bold"
                        href="https://crossexamined.org/how-to-talk-with-your-teens-about-sex-and-love-from-a-biblical-worldview-interview-with-sean-mcdowell/"
                    >
                        <button className="px-[30px] mb-[20px] rounded-[50px] border border-black hover:bg-white hover:text-sky-500 text-white py-[10px] bg-sky-400">
                            watch here
                        </button>
                    </a>
                )}
            </div>
        </div>
        {/* top stories container */}
        <div className="w-[50%] font-myWorkSans flex flex-col px-[15px] gap-2 py-[4px] justify-center h-[100%]">
            <h1 className="bg-slate-100 h-[10%] text-2xl font-bold">
                {loading ? <Skeleton width={150} /> : 'OUR TOP EVENTS'}
            </h1>
            <div className="flex h-[30%]">
                {/* top stories left and right divs */}
                <div className="w-[60%] flex flex-col justify-center gap-3 px-[15px] h-[100%]">
                    <a className="hover:text-sky-700" href="#">
                        <h2 className="text-xl font-bold">
                            {loading ? <Skeleton width={100} /> : 'SINI2024'}
                            <br />
                            {loading ? <Skeleton width={80} /> : 'Virtual Event'}
                        </h2>
                    </a>
                    <div className="flex gap-2">
                        <p>{loading ? <Skeleton width={80} /> : '7th July, 2024'}</p>
                    </div>
                </div>
                {/* image-right-side-top-stories-container */}
                <div className="w-[40%] h-[100%]">
                    {loading ? (
                        <Skeleton height="100%" width="100%" />
                    ) : (
                        <img
                            className="h-[100%] rounded-[8px] w-[100%] object-cover"
                            src="https://ehr.meditech.com/sites/default/files/images/events/2024Sini_Article.jpg"
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div className="flex h-[30%]">
                <div className="w-[60%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                    <a className="hover:text-sky-700" href="#">
                        <h2 className="text-xl font-bold">
                            {loading ? <Skeleton width={150} /> : 'MUN Annual Conference 2024'}
                            <br />
                            {loading ? <Skeleton width={100} /> : 'Liverpool, GBR'}
                        </h2>
                    </a>
                    <div className="flex gap-2">
                        <p>{loading ? <Skeleton width={80} /> : '7th July, 2024'}</p>
                    </div>
                </div>
                <div className="w-[40%] h-[100%]">
                    {loading ? (
                        <Skeleton height="100%" width="100%" />
                    ) : (
                        <img
                            className="h-[100%] rounded-[8px] w-[100%] object-cover"
                            src="https://ehr.meditech.com/sites/default/files/images/events/2024MUNsavethedate_Article-1.jpg"
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div className="flex h-[30%]">
                <div className="w-[60%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                    <a className="hover:text-sky-700" href="#">
                        <h2 className="text-xl font-bold">
                            {loading ? <Skeleton width={200} /> : 'MEDITECH Arkansas Roadshow'}
                            <br />
                            {loading ? <Skeleton width={150} /> : 'Little Rock, AR'}
                        </h2>
                    </a>
                    <div className="flex gap-2">
                        <p>{loading ? <Skeleton width={80} /> : '7th July, 2024'}</p>
                    </div>
                </div>
                <div className="w-[40%] h-[100%]">
                    {loading ? (
                        <Skeleton height="100%" width="100%" />
                    ) : (
                        <img
                            className="h-[100%] rounded-[8px] w-[100%] object-cover"
                            src="https://ehr.meditech.com/sites/default/files/images/events/2024AKroadshow_Article.jpg"
                            alt=""
                        />
                    )}
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default PastEvents