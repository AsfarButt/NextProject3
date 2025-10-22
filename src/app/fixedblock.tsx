"use client";
import {Bangers, Sour_Gummy, Homemade_Apple} from "next/font/google";
import React,{useEffect, useRef, useState} from "react";
import Menu from "./menu";

const bangers = Bangers({
    subsets: ['latin'],
    weight: ['400']
})
const sourgummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400','700']
})
const homemadeapple = Homemade_Apple({
    subsets: ['latin'],
    weight: ['400']
})

export default function FixedBlock(){

    const onstart1 = useRef<HTMLDivElement | null>(null);
    const onstart2 = useRef<HTMLDivElement | null>(null);
    const [istrue, setistrue] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
        onstart1.current?.classList.remove("-translate-x-[100%]");
        onstart2.current?.classList.remove("-translate-y-[100%]");
        },10)
    },[])

    return(<div className="fixed flex w-screen h-screen z-5 overflow-hidden pointer-events-none">
        <div className="w-[8%] min-w-26 h-[92vh] flex justify-center border-r-3 border-black border-box transition-all duration-1000 -translate-x-[100%]" ref={onstart1}>
        <div className="relative mt-2 flex flex-col">
            <img src="/lines.png" className="w-10 h-10 pointer-events-auto" alt="Lines PNG" onClick={() => setistrue(true)}/>
            <img src="/search.png" className="w-10 h-10" alt="Search PNG" />
        </div>
        </div>
        <div className="relative w-full h-24 flex justify-between -translate-y-[100%] transition-all duration-1000" ref={onstart2}>
        <div className="text-3xl m-4"><h1 className={`${bangers.className} text-orange-600/90 leading-4`}>SARASHOOTS</h1><p className={`m-1 text-gray-800 ${homemadeapple.className} text-[10px] mt-2`}>A true Film maker</p></div>
        <div className={`relative m-4 w-32 h-10 flex justify-center items-center text-bold ${sourgummy.className} text-white bg-orange-700/90`}>BUY NOW</div>
        </div>
        <Menu istrue={istrue} shutdown={() => setistrue(false)}/>
    </div>)
}


// Start from here and work your way up it isnt rocket science nor is it that complex so try (just do) do it in 3 max 4 days

