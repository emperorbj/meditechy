import Footer from "../components/Footer"
import Header from "../components/Header"
import Newsletters from "../components/Newsletters"
import Programs from "../components/Programs"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"


const Home = () => {
    return (
        <div className=" font-myFont">
            <Header/>
            <Services/>
            <Testimonial/>
            <Programs/>
            <Newsletters/>
            <Footer/>
        </div>
    )
}

export default Home
