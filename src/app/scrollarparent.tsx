"use client";
import React,{useRef, useState} from "react";
import Camera from "./camera";
import ScrollablePart from "./scrollablepart";
import CameraShadow from "./camerashadow";
import Background from "./background";




export default function ScrollarParent(){

    const [scrollposition, setscrollposition] = useState(0);

    const refcontroller = useRef<HTMLDivElement | null>(null);
    
    function ScrollFunc(e: React.UIEvent<HTMLDivElement>){
        const scrollpos = e.currentTarget.scrollTop;
        console.log(scrollpos);
        if(scrollpos < 300){
            setscrollposition(0);
        }
        else if(scrollpos > 400 && scrollpos < 1300){
            // refcontroller.current?.classList.add("pointer-events-none");
            // refcontroller.current?.scrollTo({top:1000, left:0, behavior:'smooth'})
            // refcontroller.current?.classList.remove("pointer-events-none");
            setscrollposition(1);
        }
        else if(scrollpos > 1350 && scrollpos < 2000){
            setscrollposition(2);
        }
        else if(scrollpos > 2000 && scrollpos < 3000){
            setscrollposition(3);
        }
        else if(scrollpos > 3000){
            setscrollposition(4);
        }
    }


    return(<div className="relative w-screen h-screen z-0 overflow-x-hidden overflow-y-scroll" onScroll={ e => ScrollFunc(e)} ref={refcontroller}>
            <ScrollablePart />
            <Camera scrollposition={scrollposition}/>
            <CameraShadow scrollposition={scrollposition}/>
            <Background />
        </div>)
}