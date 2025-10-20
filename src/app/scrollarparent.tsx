import ScrollablePart from "./scrollablepart";
import Camera from "./camera";


export default function ScrollarParent(){


    function ScrollFunc(){
        console.log("hello i am a scroll function");
    }

    return(<div className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden z-10" onScroll={ScrollFunc}>
        <ScrollablePart />
        <Camera />
    </div>)
}