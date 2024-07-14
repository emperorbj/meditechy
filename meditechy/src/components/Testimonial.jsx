import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react';

const data = [
    {
        id: 1,
        name: "John Cane",
        image: "/person1.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        id: 2,
        name: "Jane Cane",
        image: "/person2.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        id: 3,
        name: "Frank Cane",
        image: "/person3.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        id: 4,
        name: "Princess Cane",
        image: "/person4.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
]


const Testimonial = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetching
        setTimeout(() => setLoading(false), 4000);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        // <div className="w-3/4 m-auto">
        //     <div className="mt-20">
        //     <Slider {...settings}>
        //         {
        //             data.map((person) =>(
        //                 <div key={person.id} className="bg-white h-[450px] shadow-lg rounded-xl text-slate-800">
        //                     <div className="h-56 rounded-t-xl bg-sky-500 flex items-center justify-center">
        //                         <img src={person.image} className="w-44 h-44 rounded-full object-cover" alt="" />
        //                     </div>
        //                     <div className="flex flex-col gap-4 justify-center items-center">
        //                         <p className="text-xl font-semibold">{person.name}</p>
        //                         <p className="text-xl text-center">&ldquo;{person.review}&rdquo;</p>
        //                     </div>
        //                 </div>
        //             ))
        //         }
        //     </Slider>
        //     </div>
        // </div>


        <div className="w-3/4 m-auto">
        <div className="mt-20">
            <Slider {...settings}>
                {
                    data.map((person) => (
                        <div key={person.id} className="bg-white h-[450px] shadow-lg rounded-xl text-slate-800">
                            {loading ? <Skeleton width={350} style={{height:"100%"}}/> :
                            (<div className="h-56 rounded-t-xl bg-sky-500 flex items-center justify-center">
                                {loading ? (
                                    <Skeleton circle={true} height={176} width={176} />
                                ) : (
                                    <img src={person.image} className="w-44 h-44 rounded-full object-cover" alt="" />
                                )}
                            </div>)}
                            <div className="flex flex-col gap-4 justify-center items-center p-4">
                                <p className="text-xl font-semibold">
                                    {loading ? <Skeleton width={120} /> : person.name}
                                </p>
                                <p className="text-xl text-center">
                                    {loading ? <Skeleton count={3} /> : `“${person.review}”`}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
    )
}

export default Testimonial
