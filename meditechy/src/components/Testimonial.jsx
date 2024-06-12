import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        name: "John Cane",
        image: "/person1.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        name: "Jane Cane",
        image: "/person2.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        name: "Frank Cane",
        image: "/person3.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
    {
        name: "Prince Cane",
        image: "/person4.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti labore voluptatem voluptatum adipisci tenetur"
    },
]


const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...settings}>
                {
                    data.map((person) =>(
                        <div key={person.name} className="bg-white h-[450px] rounded-xl text-slate-800">
                            <div className="h-56 rounded-t-xl bg-sky-500 flex items-center justify-center">
                                <img src={person.image} className="w-44 h-44 rounded-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <p className="text-xl font-semibold">{person.name}</p>
                                <p className="text-lg text-center">{person.review}</p>
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
