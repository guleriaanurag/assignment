import { FaRegCircleQuestion } from "react-icons/fa6";
import { BsFillGrid3X2GapFill } from "react-icons/bs";

export default function Widget({children}){
    return(
        <div className="relative h-[45%] w-full py-[2%] rounded-2xl bg-widgetbg widget">
            <FaRegCircleQuestion className="absolute top-4 left-2 text-black-300 text-xl"/>
            <BsFillGrid3X2GapFill className="absolute top-[45%] left-1 text-black-300 text-3xl rotate-90 opacity-45"/>
            {children}
        </div>
    );
}