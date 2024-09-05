import Widget from "../component/Widget";
import { useState } from "react";

export default function InfoWidget(){

    const [activeItem,setActiveItem] = useState('about me');

    function changeActiveItem(e){
        const currItem = e.target.innerText;
        setActiveItem(currItem.toLowerCase());
    }

    return(
        <Widget>
            <hr className="absolute -right-4 top-[45%] rotate-90 h-2 w-[10%] bg-gradient-to-r from-black-300 to-black-500 border-0 rounded-3xl vertical-line"></hr>
            <nav className="w-[87%] mx-auto">
                <ul className="w-full flex justify-between px-1 list-none bg-black-800 rounded-2xl py-1 text-md">
                    <li
                        className={`${activeItem === 'about me' ? 'bg-black-700 text-white active' : 'text-black-400'} w-[30%] text-center px-6 py-2 rounded-2xl cursor-pointer transition-colors duration-300`}
                        onClick={(e)=>changeActiveItem(e)}
                    >
                        About Me
                    </li>
                    <li 
                        className={`${activeItem === 'experiences' ? 'bg-black-700 text-white active' : 'text-black-400'} w-[30%] text-center px-6 py-2 rounded-2xl cursor-pointer transition-colors duration-300`}
                        onClick={(e)=>changeActiveItem(e)}
                    >
                        Experiences
                    </li>
                    <li 
                    className={`${activeItem === 'recommended' ? 'bg-black-700 text-white active' : 'text-black-400'} w-[30%] text-center px-6 py-2 rounded-2xl cursor-pointer transition-colors duration-300`}
                        onClick={(e)=>changeActiveItem(e)}
                    >
                        Recommended
                    </li>
                </ul>
            </nav>
            <div className="w-[85%] text-black-300 flex flex-col gap-3 mx-auto mt-3">
                <p>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                </p>
                <p>
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
            </div>
        </Widget>
    );
}