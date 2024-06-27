
import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2 (2).jpg'
import program3 from '../assets/program3 (2).jpg'
import program4 from '../assets/program4 (2).jpg'
import program5 from '../assets/program5.jpg'
import program6 from '../assets/program6.jpg'




const PastEvents = () => {
    return (
        <div className=" font-myFont">
            <h1 className='text-center text-3xl font-bold mt-40'>HERE ARE OUR PAST EVENTS</h1>
            <div className="grid grid-cols-3 gap-10 p-10">
                <div className="bg-white w-[470px] rounded-[8px]">
                    <div className="h-[530px] rounded-t-[8px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program1} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
                <div className=" w-[470px] rounded-t-[8px] rounded-[8px]">
                    <div className="h-[530px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program2} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
                <div className=" w-[470px] rounded-[8px]">
                    <div className="h-[530px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program3} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
                <div className=" w-[470px] rounded-[8px]">
                    <div className="h-[530px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program4} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
                <div className=" w-[470px]  rounded-[8px]">
                    <div className="h-[530px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program5} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
                <div className=" w-[470px] rounded-[8px]">
                    <div className="h-[530px]">
                        <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src={program6} alt="" />
                    </div>
                    <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                        <h1 className='font-semibold text-2xl'>Program title</h1>
                        <p>A brief description</p>
                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[15px]'>Watch here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastEvents