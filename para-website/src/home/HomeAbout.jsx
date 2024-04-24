import React from "react";
import { Link } from "react-router-dom";
import WhiteButton from "../tools/WhiteButton";

export default function HomeAbout(){
    return(
        <div className="px-10 py-10 sm:py-20">
        {/* about background part */}
            <div className="bg-clip-padding border-10 bg-gray-100">
                <div className="grid 
            lg:grid-cols-1 xl:grid-cols-5 
            gap-5 xl:gap-10 p-10 items-center">
                    <div className="xl:col-span-2">
                        <img src="/home/aboutPara.jpg"></img>
                    </div>
                    <div className="flex flex-col items-start justify-evenly xl:col-span-3">
                        <div className="flex">
                            <p className="text-gray-500 
                            text-2xl lg:text-4xl xl:text-7xl">About <span className="text-black">Para Projects</span></p>
                        </div>
                        <div>
                            <p className="text-left pt-5
                            md:text-sm lg:text-base">“Build with the best input.” With a strong management team, Para Projects is proud of being committed to delivering successful projects in all aspects of quality, programming, budgeting, and H&S throughout construction.</p>
                            <p className="text-left py-5
                            md:text-sm lg:text-base">
                            Para Projects currently employs three site managers who are all LBPs, two registered NZIQS quantity surveyors and one project administrator. All Para management team members have commercial & residential experience working as main construction contractors in Auckland. Para Projects is concentrating on Commercial Fit-outs, Residential Construction & Development and Client consulting.
                            </p>
                        </div>
                        <Link to="/certifications">
                            <button className="md:py-2 lg:py-5 
                            md:py-4 lg:px-10  
                            text-black tracking-wider uppercase 
                            sm:text-xs md:text-sm lg:text-base 
                            hover:bg-black hover:text-white hover:border-white">our certifications →</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}