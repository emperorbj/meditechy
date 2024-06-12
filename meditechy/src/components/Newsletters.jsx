

const Newsletters = () => {
    return (
        <div className=" mt-20 flex items-center justify-center bg-gradient-to-r from-green-500 to-sky-500 h-[350px]">
            <div>
                <h1 className="text-4xl mb-[20px] text-white font-semibold">Subscribe to Our Newsletter</h1>
                <div className="flex gap-2">
                    <input className="w-[80%] rounded-[5px] text-center" type="email" placeholder="Enter your email address" />
                    <button className="py-[10px] shadow-xl text-lg hover:bg-gradient-to-r from-green-500 to-sky-500 text-white font-semibold rounded-[5px] px-10 bg-sky-600">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletters
