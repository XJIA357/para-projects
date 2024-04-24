import React from "react";

export default function (){
    return (
        <div className="px-10 py-10 lg:py-20 flex flex-col items-start">
            <div className="sm:pb-5">
                <p className="text-gray-500 
                text-2xl sm:text-3xl md:text-5xl xl:text-7xl">Main <span className="text-black">Focus</span></p>
            </div>
            <div className="grid 
            grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
            gap-5 lg:gap-10">
                <div className="grid 
                grid-cols-3 lg:grid-cols-2 items-center">
                    <img src="/home/missionOne.png" className="px-10"></img>
                    <p className="col-span-2 lg:col-span-1
                    md:text-lg xl:text-xl text-left py-5">Residential development, subdivsion, construction (Design Build/ Build Only)</p>
                </div>
                <div className="grid 
                grid-cols-3 lg:grid-cols-2 items-center">
                    <img src="/home/missionTwo.png" className="px-10"></img>
                    <p className="col-span-2 lg:col-span-1
                    md:text-lg xl:text-xl text-left py-5">Project management Consultancy, Client's project representative.</p>
                </div>
                <div className="grid 
                grid-cols-3 lg:grid-cols-2 items-center">
                    <img src="/home/missionThree.png" className="px-10"></img>
                    <p className="col-span-2 lg:col-span-1
                    md:text-lg xl:text-xl text-left py-5">Commercial fit-out specialist.</p>
                </div>
            </div>
        </div>
    );
}