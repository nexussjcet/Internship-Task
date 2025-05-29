import React from "react";


const Contact =({logo:Logo,h1,p1,type,value})=>{
      const href =
    type === "email"
      ? `mailto:${value}`
      : type === "phone"
      ? `tel:${value}`
      : type==="location"
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
      :value
    return (
        <>

        <div className='text-white mt-6 m-3 p-2 w-full sm:w-1/3 lg:w-1/4  bg-black/70 shadow-[0_0_15px_3px_rgba(59,130,246,0.5)] rounded-2xl
        transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'>
            <Logo className="text-3xl m-4 "/>
            <h1 className="text-2xl m-4">{h1}</h1>
            <p className="text-sm m-4">{p1} </p>
         <a  className=" text-blue-400 hover:underline break-all text-sm m-4" href={href} >{value}</a>

        </div>
        </>
    )
}

export default Contact