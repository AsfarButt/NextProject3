"use client";
import FixedBlock from "./fixedblock";
import Camera from "./camera";
import ScrollablePart from "./scrollablepart";
import CameraShadow from "./camerashadow";

export default function Page(){

  function ScrollEventFunc(e: React.UIEvent<HTMLDivElement>){
    console.log(e.currentTarget.scrollTop);
  }


  return(<div className="relative w-screen h-fit bg-orange-100/80 overflow-hidden" onScroll={(e) => ScrollEventFunc(e)}>
    
    <FixedBlock />
    <Camera />
    <CameraShadow />
    <ScrollablePart />
    
     </div>)
}