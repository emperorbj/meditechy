
import Forms from "../components/Forms"
import Navbar from "../components/Navbar"
import Lottie from "lottie-react"
import animation from "../DoctorsContact.json"
import Footer from "../components/Footer"

const style = {
    height: 600,
    width: 600,
}

const Contacts = () => {
    return (
        <>
            <Navbar />
            <div className="flex-col-reverse md:flex md:flex-row gap-4 mt-[75px] 
            w-[100%] h-full">
                <Forms />
                <div className="flex gap-4 flex-col w-full md:w-[49%]">
                    <div className="flex items-center justify-center shadow  h-[55%]">
                        {/* <img className="rounded-[20px] shadow  h-[100%] w-[100%] object-cover" src={call} alt="" /> */}
                        <Lottie animationData={animation} style={style} loop={true} />
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center 
                    bg-blue-500 
                    rounded-[10px] md:h-[20%]">
                        <div className="">
                            <h2 className="text-2xl font-bold">Follow Us</h2>
                            <ul className="mt-2 flex space-x-4">
                                <li>
                                    <a href="#" className="hover:underline">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.951.565-2.005.974-3.127 1.195-.897-.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.044.765.128 1.124-4.09-.205-7.719-2.165-10.149-5.144-.423.725-.666 1.561-.666 2.457 0 1.697.867 3.192 2.188 4.069-.805-.026-1.564-.248-2.228-.616v.062c0 2.372 1.688 4.348 3.93 4.793-.411.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.417-1.68 1.318-3.809 2.105-6.115 2.105-.397 0-.789-.023-1.176-.068 2.179 1.397 4.768 2.214 7.557 2.214 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.42-.014-.63.961-.695 1.8-1.562 2.46-2.549z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.994 11.706c0-6.625-5.366-12-12-12-6.625 0-12 5.375-12 12 0 5.991 4.388 10.935 10.125 11.854v-8.367h-2.64v-3.487h2.64v-2.665c0-2.625 1.568-4.063 3.924-4.063 1.14 0 2.108.086 2.392.125v2.775h-1.641c-1.29 0-1.538.614-1.538 1.512v1.982h3.073l-.4 3.487h-2.673v8.367c5.738-.919 10.125-5.862 10.125-11.854z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contacts
