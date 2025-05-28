import React from "react";

const Faqs=({question,reply})=>{
    return (
        <>
        <div className=" text-white w-full sm:w-2/3 m-4 p-4 'bg-black/70 shadow-[0_0_15px_3px_rgba(59,130,246,0.5)] rounded-2xl
        transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] ">
            <h1 className="font-bold text-xl">{question}</h1>
            <p className="text-sm mt-4">{reply}</p>
        </div>

        </>
    )
}
export default Faqs;