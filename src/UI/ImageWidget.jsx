import Widget from "../component/widget";
import { FaPlus,FaArrowLeft,FaArrowRight } from "react-icons/fa";

import sampleImage from '../Images/sample.jpg';

export default function ImageWidget(){
    return(
        <Widget>
            <nav className="w-[87%] h-[25%] mx-auto text-white flex justify-between">
                <div className="px-7 py-3 bg-black-900 rounded-2xl">
                    Gallery
                </div>
                <div className="flex items-center justify-evenly w-[50%]">
                    <p className="cursor-pointer flex items-center justify-center gap-1 px-4 py-3 rounded-full bg-black-500 text-xs img-btn"> <FaPlus /> ADD IMAGE</p>
                    <div className="flex gap-4 text-xl text-black-500">
                        <button className="cursor-pointer rounded-full px-3 py-3 bg-black-800 action-btn"> <FaArrowLeft /> </button>
                        <button className="cursor-pointer rounded-full px-3 py-3 bg-black-800 action-btn"> <FaArrowRight /> </button>
                    </div>
                </div>
            </nav>
            <div className="w-[87%] h-[70%] mx-auto mt-3 grid grid-cols-3">
                <div className="h-full w-[85%] rounded-2xl overflow-hidden">
                    <img src={sampleImage} alt="Sample Image" className="w-full h-full object-cover"/>
                </div>
                <div className="h-full w-[85%] rounded-2xl overflow-hidden">
                    <img src={sampleImage} alt="Sample Image" className="w-full h-full object-cover"/>
                </div>
                <div className="h-full w-[85%] rounded-2xl overflow-hidden">
                    <img src={sampleImage} alt="Sample Image" className="w-full h-full object-cover"/>
                </div>
            </div>
        </Widget>
    );
}