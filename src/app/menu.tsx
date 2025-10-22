"use client";
import React,{useRef, useEffect, useState} from "react"
;

export default function Menu({istrue, shutdown}:{istrue: boolean, shutdown: () => void}){
    const scroll = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
       console.log("it worked");
       setTimeout(() => scroll.current?.classList.remove("-translate-x-80"),50)
    },[istrue])

    function ShutDown(){
        setTimeout(()=> shutdown(),600);
        scroll.current?.classList.add("-translate-x-80");
    }
    

    return(
        <>
        {(istrue == true) && <div className="absolute z-10 w-full h-full backdrop-blur-sm pointer-events-auto" onClick={ShutDown}>
            <div className="relative pt-8 w-80 -translate-x-80 transition-all duration-900 h-full bg-yellow-50/90 flex flex-col justify-left items-start text-black/80 pl-8 border-box" ref={scroll} onClick={e => e.stopPropagation()}>
                <hr className="w-[90%] border border-black/90"/>
                <h1 className="mt-6 hover:text-orange-800/90">Collections</h1>
                <h1 className="hover:text-orange-800/90">Buy Now</h1>
                <h1 className="hover:text-orange-800/90">Work with Us</h1>
                <h1 className="hover:text-orange-800/90">About</h1>
                <div className="absolute w-auto h-auto z-10 text-4xl rotate-45 top-8 right-8 cursor-pointer" onClick={ShutDown}>+</div>
            </div>
    </div>}
    </>)
}