import React from "react";
import ProjectSlider from "../tools/ProjectSlider";
import { Link } from "react-router-dom";
import WhiteButton from "../tools/WhiteButton";

export default function HomeFirstProject(){
    const slideImages = ['/home/homeProjectRealOne.jpg', '/home/homeProjectRealTwo.jpg', '/home/homeProjectRealThree.jpg', '/home/homeProjectRealFour.jpg'];

    return (
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-10 justify-evenly">
            <div className="top-0 left-0 w-full h-full flex items-end sm:items-center 
            justify-end sm:justify-center
            px-10 sm:px-0">
                <div className="text-center flex flex-col items-end sm:items-start">
                    <p className="text-gray-500 uppercase
                    text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Project</p>
                    <p className="font-bold uppercase
                    text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">Scott Point</p>
                    <div className="py-5 sm:py-10">
                        <Link to="/projects/0">
                            <WhiteButton buttonText = {"view project →"}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full sm:col-span-2 py-10 px-10">
                <ProjectSlider slides={slideImages} />
            </div>
        </div>
    );
}