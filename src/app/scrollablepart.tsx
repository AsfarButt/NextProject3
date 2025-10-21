"use client";
import {Oswald, Bangers, Noto_Sans, Homemade_Apple, Sour_Gummy, Orbitron} from "next/font/google"
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
const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400','500']
})

export default function ScrollablePart(){
    const heading1ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo(0,0);
        heading1ref.current?.classList.remove("scale-0","opacity-50");
    },[])



    return(<div className="relative w-screen h-auto overflow-hidden z-5">
                {/* Part One */}
                <div className="relative mt-25 w-full h-full flex flex-row justify-center">
                <div className={`max-w-[50%] scale-0 text-[180px] text-center transition-all opacity-50 duration-1000 ${domine.className} font-bold text-orange-700/85`} ref={heading1ref}>CAPTURING MOMENTS AND </div>
                 </div>

                {/* Part Two */}
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
            
                {/* Part Three */}
                <div className="relative w-full h-auto flex flex-col items-center">
                     <div className={`max-w-[50%] text-[180px] text-center transition-all ${domine.className} font-bold text-orange-700/85`}>UNLIMITED</div>
                     <div className="relative w-full h-full mt-8 flex">
                        <div className="relative w-[8%] min-w-26 h-full bg-black/30" />
                        <div className="relative w-full h-auto flex justify-between">
                            <div className="relative w-100 ml-6">
                                <img src="/img1.jpg" alt="Scroll img1" className="w-90 h-auto" />
                                <div className={`mt-6 w-[80%] ${homemadeapple.className}`}>Dive into the world of cenima with <span className="text-orange-700/90">sarashoots</span></div>
                            </div>
                            <div className={`relative w-[25%] min-w-100 mr-12 h-auto ${orbitron.className} font-semibold`}>
                                <p className=" text-gray-900/80">Every frame tells a story — of light, emotion, and truth. Through her lens, Sara doesn&#39;t just capture moments; she preserves feelings that words can&#39;t hold.</p>
                                <h1 className={`mt-6 font-bold`}>DESIGN</h1>
                                <p className="mt-2 font-light">Photography, for Sara, is design in motion — a harmony of shape, light, and instinct. Each composition is built with precision, yet alive with spontaneity. From framing to color balance, every detail serves the story rather than the shot. Her process is both technical and emotional: light defines the subject, but emotion defines the photograph. Whether it&#39;s the glow of an early morning portrait or the shadows that tell of a quiet city street, Sara&#39;s design philosophy is clear — beauty lives where intention meets imperfection</p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Part Four */}
                <div className="relative mt-60 w-full h-240 flex justify-center items-center">
                    <img src="/scroll2img1.jpg" alt="Image 1"  className="absolute w-60 h-60 opacity-70 brightness-110 border-3 border-white shadow-lg shadow-black/80 -translate-x-[200%] -translate-y-[70%] -rotate-20"/>
                    <img src="/scroll2img2.jpg" alt="Image 2"  className="absolute w-60 h-60 opacity-70 brightness-110 border-3 border-white shadow-lg shadow-black/80 translate-x-[220%] -translate-y-[10%] rotate-8"/>
                    <img src="/scroll2img3.jpg" alt="Image 3"  className="absolute w-60 h-60 opacity-70 brightness-110 border-3 border-white shadow-lg shadow-black/80 -translate-x-[10%] translate-y-[130%] rotate-35"/>
                </div>

                {/* Part Five */}
                <div className="relative mt-60 w-full h-full flex flex-row">
                    <div className="relative w-[8%] min-w-26 h-full"></div>
                    <div className=" relative w-full h-160 flex flex-row justify-between items-center">

                        <div className="w-[26%] min-w-120 h-100 flex flex-col justify-center">
                            <div className="relative w-full h-auto flex flex-shrink-0 justify-center">
                                <img src="camera1.png" alt="Camera 1" className="w-[80%] max-w-180 h-auto"/>
                                <div className="absolute left-18 top-3 -z-1 shadow-sm shadow-black/30 blur-lg w-[55%] h-[75%] bg-black/30 rounded-xl" /> 
                            </div>
                            <div className={`${homemadeapple.className} text-center`}>
                                <h1 className="text-gray-950/90">Lunaris X-Pro</h1>
                                <h2 className="text-orange-700/90">US$8,199</h2>
                            </div>
                        </div>
                        <div className="w-[26%] min-w-120 h-100 flex flex-col justify-center">
                            <div className="relative w-full h-auto flex flex-shrink-0 justify-center">
                                <div className="w-[80%] max-w-180 h-80"/>
                                {/* <div className="absolute left-18 top-3 -z-1 shadow-sm shadow-black/30 blur-lg w-[55%] h-[75%] bg-black/30 rounded-xl" /> */}
                            </div>
                            <div className={`${homemadeapple.className} text-center`}>
                                <h1 className="text-gray-950/90">Leica M1z&#45;R</h1>
                                <h2 className="text-orange-700/90">US$8,295</h2>
                            </div>
                        </div>
                        <div className="w-[26%] min-w-120 h-100 flex flex-col justify-center">
                            <div className="relative w-full h-auto flex flex-shrink-0 justify-center">
                                <img src="camera3.png" alt="Camera 1" className="w-[80%] max-w-180 h-auto"/>
                                <div className="absolute left-18 top-3 -z-1 shadow-sm shadow-black/30 blur-lg w-[55%] h-[75%] bg-black/30 rounded-xl" />
                            </div>
                            <div className={`${homemadeapple.className} text-center`}>
                                <h1 className="text-gray-950/90">Velora Sigma</h1>
                                <h2 className="text-orange-700/90">US$19,249</h2>
                            </div>
                        </div>
                    </div>
                </div>

    </div>)
}



