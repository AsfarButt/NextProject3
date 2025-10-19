"use client";
import React,{useRef, useEffect} from "react";


export default function Camera(){
    const camera = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        camera.current?.classList.add("rotate-z-25","scale-70")
    },[])


    return(<div className="fixed w-screen h-screen flex justify-center items-center z-10 overflow-hidden">
        <div className="relative w-[90%] max-w-260 h-auto flex justify-center items-center transition-tranform duration-1500" ref={camera}>
            <img src="/camera2.png" alt="Main Camera" className="relative w-full h-full" />
            {/* <div className="absolute bottom-0 left-0 w-[70%] h-[60%] bg-black/50 blur-xl mt-5 [box-shadow:0_0_80px_20px_rgba(0,0,0,0.9)] z-0" /> */}
        </div>

    </div>)
}