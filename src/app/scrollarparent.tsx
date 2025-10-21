import Camera from "./camera";
import ScrollablePart from "./scrollablepart";
import CameraShadow from "./camerashadow";
import Background from "./background";




export default function ScrollarParent(){



    return(<div className="relative w-screen h-screen z-0 overflow-x-hidden overflow-y-scroll">
            <ScrollablePart />
            <Camera />
            <CameraShadow />
            <Background />
        </div>)
}