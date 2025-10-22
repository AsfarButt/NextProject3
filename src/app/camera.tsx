"use client";
import React,{useRef, useEffect} from "react";


export default function Camera({scrollposition}:{scrollposition: number}){

    const camera = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        setTimeout(() => {
        console.log("Hello World from camera");
        console.log("Value of scroll: ",scrollposition);
        if(scrollposition == 0){
            camera.current?.classList.add("rotate-z-25","scale-70");
            camera.current?.classList.remove("rotate-z-90","scale-90");
        }
        else if(scrollposition == 1){
            camera.current?.classList.remove("rotate-z-25","scale-70","rotate-z-15","scale-80");
            camera.current?.classList.add("rotate-z-90","scale-90");
        }
        else if(scrollposition == 2){
            camera.current?.classList.remove("rotate-z-0","scale-100","rotate-z-90","scale-90");
            camera.current?.classList.add("rotate-z-15","scale-80");
        }
        else if(scrollposition == 3){
            camera.current?.classList.remove("scale-40","rotate-z-0","rotate-z-15","scale-80","translate-x-13","absolute");
            camera.current?.classList.add("rotate-z-0","fixed");
        }
        else if(scrollposition == 4){
            camera.current?.classList.remove("scale-80","fixed");
            camera.current?.classList.add("scale-40","translate-x-13","rotate-z-0","absolute");
        }
        },10)
    },[scrollposition])


    return(<div className="fixed top-0 w-full h-full flex justify-center items-center overflow-hidden z-5 pointer-events-none">
        <div className="relative w-260 h-auto flex justify-center items-center transition-tranform duration-1500" ref={camera}>
            <img src="/camera2.png" alt="Main Camera" className="relative w-full h-full" />
            {/* <div className="absolute bottom-0 left-0 w-[70%] h-[60%] bg-black/50 blur-xl mt-5 [box-shadow:0_0_80px_20px_rgba(0,0,0,0.9)] z-0" /> */}
        </div>

    </div>)
}