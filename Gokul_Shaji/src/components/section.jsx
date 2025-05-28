import React from "react";
import { FiBox } from "react-icons/fi"
const Section=({h1,h2,description})=>{
    return (
        <>
   
        <div className=" m-6 p-8 w-full sm:w-1/3 'bg-black/70 shadow-[0_0_15px_3px_rgba(59,130,246,0.5)] rounded-2xl
        transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
           <FiBox />
        <div className="text-xl ">
           <h1 className="mt-8">{h1} </h1> 
           <h1>{h2}</h1>
         </div>
           <p className="text=0.5xl mt-12 ">{description} </p>
        </div>
    
       </>
    )
}

export default Section



