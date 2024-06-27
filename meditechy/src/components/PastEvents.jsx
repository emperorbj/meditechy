

// const PastEvents = () => {
//     return (
//         <div className="bg-slate-800 p-2 md:p-4">
//             <div className="grid grid-cols-3 auto-row-[400px] gap-3 my-5">
//                 <div className="bg-red-500 w-[470px] h-[450px]">one</div>
//                 <div className="bg-purple-700 w-[470px] h-[450px]">two</div>
//                 <div className="bg-blue-700 row-span-2 w-[470px] h-[60%]">three</div>
//                 <div className="bg-yellow-700 row-span-2 w-[470px] h-[60%]">four</div>
//                 <div className="bg-green-700 w-[470px] h-[450px]">five</div>
//                 <div className="bg-slate-700 col-span-2 w-[100%] h-[450px]">six</div>
//             </div>
//         </div>
//     )
// }

// export default PastEvents
const PastEvents = () => {
    return (
        <div className="bg-slate-800 p-2 md:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                <div className="bg-red-500 h-[250px] sm:h-[300px] lg:h-[450px]">one</div>
                <div className="bg-purple-700 h-[250px] sm:h-[300px] lg:h-[450px]">two</div>
                <div className="bg-blue-700 h-[250px] sm:row-span-2 sm:h-[620px] lg:h-[900px]">three</div>
                <div className="bg-yellow-700 h-[250px] sm:h-[300px] lg:row-span-2 lg:h-[900px]">four</div>
                <div className="bg-green-700 h-[250px] sm:h-[300px] lg:h-[450px]">five</div>
                <div className="bg-slate-700 h-[250px] sm:col-span-2 lg:col-span-3 lg:h-[450px]">six</div>
            </div>
        </div>
    )
}

export default PastEvents;
