"use client";
import {Oswald, Bangers, Noto_Sans, Homemade_Apple, Sour_Gummy} from "next/font/google"
import React,{useEffect ,useRef} from "react";

const domine = Oswald({
    subsets: ['latin'],
    weight: ['600']
})
const bangers = Bangers({
    subsets: ['latin'],
    weight: ['400']
})
const notosans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400']
})
const homemadeapple = Homemade_Apple({
    subsets: ['latin'],
    weight: ['400']
})
const sourgummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['400']
})

export default function ScrollablePart(){
    const heading1ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo(0,0);
        heading1ref.current?.classList.remove("scale-0","opacity-50");
    },[])


    return(<div className="relative w-screen h-auto overflow-hidden">
            <div className="relative mt-45 w-full h-full flex flex-row justify-center z-5">
                <div className={`max-w-[70%] scale-0 text-[180px] text-center transition-all opacity-50 duration-1000 ${domine.className} font-bold text-orange-700/85`} ref={heading1ref}>CAPTURING MOMENTS, CREATING STORIES</div>
            </div>

            <div className="relative mt-45 w-full h-auto flex flex-row border-box">

                <div className="relative w-[8%] min-w-26" />

                <div className="pl-8 w-full flex flex=-row justify-between">
                    <div className="relative w-[35%] max-w-120 h-200 ">
                    <h4 className={`${homemadeapple.className} pl-2 text-lg`}>Photographer</h4>
                    <h1 className={`w-10 font-bold text-8xl tracking-wide ${bangers.className}`}>SARA SHOOTS</h1>
                    <p className={`mt-10 font-sans ${notosans.className}`}>
                        Photography is more than taking images.<br/>It&#39;s about moments that stay long after they pass.<br/>Light, emotion, and timing tell stories words can&#39;t.<br/>Each frame holds a piece of time.<br/>Some speak loudly, others whisper softly.<br/>Every image carries its own quiet truth.</p>
                    <button className={`${sourgummy.className} mt-6 bg-black/95 p-2 text-white/95`}>BUY NOW</button>
                    </div>

                    <div className="relative w-[35%] max-w-120 h-200 border-box">
                    <div className="relative my-8 p-2 w-[80%] h-auto border-3 border-black/70 border-box">
                        <h2 className="font-semibold">FETAC</h2>
                        <h4 className="text-black/70 mx-1 text-[10px]">Open College</h4>
                        <hr  className="mt-2"/>
                        <div className="flex flex-row p-2">
                            <h1 className="text-4xl font-semibold my-auto text-black/95">90%</h1>
                            <h4 className="text-gray-900/70 ml-2 line-clamp-3">Displayed excellent control over light and framing. Consistently achieved high marks across all graded modules. Work reflects strong creativity and precision.</h4>
                        </div>
                    </div>
                    <div className="relative my-8 p-2 w-[80%] h-auto border-3 border-black/70 border-box">
                        <h2 className="font-semibold">PPC</h2>
                        <h4 className="text-black/70 mx-1 text-[10px]">Foto Unit</h4>
                        <hr  className="mt-2"/>
                        <div className="flex flex-row p-2">
                            <h1 className="text-4xl font-semibold my-auto text-black/95">3.5</h1>
                            <h4 className="text-gray-900/70 ml-2 line-clamp-3">Showed deep understanding of technical and artistic aspects. Met every requirement with focus and discipline. Demonstrated clear growth in visual storytelling.</h4>
                        </div>
                    </div>
                    <div className="relative my-8 p-2 w-[80%] h-auto border-3 border-black/70 border-box">
                        <h2 className="font-semibold">CP</h2>
                        <h4 className="text-black/70 mx-1 text-[10px]">Photo Academy of Ireland</h4>
                        <hr  className="mt-2"/>
                        <div className="flex flex-row p-2">
                            <h1 className="text-4xl font-semibold my-auto text-black/95">87%</h1>
                            <h4 className="text-gray-900/70 ml-2 line-clamp-3">Completed all assignments with distinction-level quality. Work stood out for emotional depth and thoughtful composition. A promising talent with professional dedication.</h4>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
    </div>)
}



