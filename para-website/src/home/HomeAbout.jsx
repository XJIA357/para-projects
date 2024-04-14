import React from "react";
import { Link } from "react-router-dom";
import WhiteButton from "../tools/WhiteButton";

export default function HomeAbout(){
    return(
        <div className="px-10 py-20 relative">
        {/* about background part */}
            <div className="bg-clip-padding border-10 bg-gray-100 grid 
            sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="pt-10 pl-10 hidden xl:block invisible">
                    <img src="/home/aboutOne.png"></img>
                </div>
                <div className="pt-20 p-5 invisible">
                    <img src="/home/aboutThree.png"></img>
                </div>
                <div className="flex flex-col items-start pr-10 justify-evenly invisible">
                    <p className="text-gray-500 
                    sm:text-3xl md:text-5xl xl:text-7xl">About</p>
                    <p className="text-left
                    sm:text-xs md:text-sm lg:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to="/certifications">
                        <button className="md:py-2 lg:py-5 
                        md:py-4 lg:px-10  
                        text-black tracking-wider uppercase 
                        sm:text-xs md:text-sm lg:text-base 
                        hover:bg-black hover:text-white hover:border-white">read more →</button>
                    </Link>
                </div>
            </div>
            {/* about content part */}
            <div className="py-20 px-10 sm:pl-20 
            sm:pr-20 md:pr-10 absolute top-0 left-0">
                <div className="bg-clip-padding border-10 grid 
                sm: grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div className="pt-10 pl-10 hidden xl:block">
                        <img src="/home/aboutOne.png"></img>
                        <img src="/home/aboutTwo.png" className="pt-10"></img>
                    </div>
                    <div className="md:pt-10 xl:pt-20 lg:px-5">
                        <img src="/home/aboutThree.png"></img>
                    </div>
                    <div className="flex flex-col items-start lg:pr-10 justify-evenly">
                        <p className="text-gray-500 
                        text-2xl sm:text-3xl md:text-5xl xl:text-7xl">About</p>
                        <p className="text-left py-5 sm:py-0
                        md:text-sm lg:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Link to="/certifications">
                            <button className="md:py-2 lg:py-5 
                            md:py-4 lg:px-10  
                            text-black tracking-wider uppercase 
                            sm:text-xs md:text-sm lg:text-base 
                            hover:bg-black hover:text-white hover:border-white">read more →</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}