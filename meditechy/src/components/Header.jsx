import Navbar from './Navbar'
import video from '../assets/dna2.mp4'

const Header = () => {
    return (
        <div className='h-[700px] relative w-full'>
            <div className='w-full absolute top-0 left-0 h-full'>
                <video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay muted loop/>
            </div>
            <Navbar/>
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl font-bold'>Empowering Medical Technology in Africa</h1>
                    <p className='mt-4 text-xl'>Join us in revolutionizing healthcare</p>
                    <button className='text-[20px] font-bold mt-[30px] rounded-[10px] py-[14px] px-[60px] bg-sky-500 shadow-sky-500 shadow-sm '>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Header