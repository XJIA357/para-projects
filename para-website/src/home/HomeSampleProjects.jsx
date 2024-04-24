import React from "react";
import { Link } from "react-router-dom";

export default function HomeSampleProjects (){
    return (
        <div className="px-10 py-10 lg:py-20 flex flex-col items-end">
            <div className="flex flex-col items-start"> 
                <div>
                    <p className="text-gray-500 
                    text-2xl sm:text-3xl md:text-5xl xl:text-7xl 
                    pb-10 lg:pb-20">Our Projects</p>
                </div>
                <div className="grid 
                grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="relative">
                        <img src="/home/home-sample-laoye-one.jpg" alt="Project One" className="w-full h-full object-cover"></img>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-start justify-end py-5 
                        pl-5 sm:pl-10">
                            <p className="font-bold text-gray-100
                            text-2xl sm:text-2xl md:text-4xl xl:text-6xl text-left">Sample Projects</p>
                            <Link to="/projects">
                                <button className="text-white 
                            sm:text-xs md:text-sm xl:text-lg font-semibold rounded-none my-5 border-transparent bg-black bg-opacity-50 hover:bg-white hover:text-black hover:border-black transition-colors uppercase tracking-wider">View More →</button>
                            </Link>
                        </div>
                    </div>
                    <img src="/home/home-sample-two.png" 
                    alt="Project One" 
                    className="w-full h-full object-cover hidden lg:block"></img>
                    <img src="/home/home-sample-laoye-two.jpg" 
                    alt="Project Two" 
                    className="w-full h-full object-cover hidden xl:block"></img>
                </div>
                <div className="grid 
                grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5">
                    <img src="/home/home-sample-deyue-three.jpg" 
                    alt="Project One" 
                    className="w-full h-full object-cover hidden lg:block"></img>
                    <img src="/home/home-sample-one.png" 
                    alt="Project One" 
                    className="w-full h-full object-cover lg:col-span-2"></img>
                    <img src="/home/home-sample-deyue-four.jpg" 
                    alt="Project One" 
                    className="w-full h-full object-cover hidden xl:block"></img>
                </div>
            </div>
            <div>
                <Link to="/projects">
                    <button className="bg-gray-900 text-gray-100 
                    uppercase px-10 py-5 mt-10 rounded-none tracking-wider 
                    sm:text-xs md:text-sm xl:text-lg
                    hover:bg-white hover:text-black hover:border-black">All Projects →</button>
                </Link>
            </div>
        </div>
    );
}