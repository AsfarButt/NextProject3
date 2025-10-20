"use client";
import FixedBlock from "./fixedblock";
import Camera from "./camera";
import ScrollablePart from "./scrollablepart";
import CameraShadow from "./camerashadow";
import Background from "./background";
import ScrollarParent from "./scrollarparent";

export default function Page(){

  function ScrollEventFunc(e: React.UIEvent<HTMLDivElement>){
    console.log(e.currentTarget.scrollTop);
  }


  return(<div className="relative w-screen h-screen overflow-hidden" onScroll={(e) => ScrollEventFunc(e)}>
    
    <FixedBlock />
    {/* <Camera /> */}
    <CameraShadow />
    {/* <ScrollablePart /> */}
    <Background />
    <ScrollarParent />
    
     </div>)
}