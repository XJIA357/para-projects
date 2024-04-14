import React from "react";

export default function (){
    return (
        <div className="px-10 py-10 lg:py-20 flex flex-col items-start">
            <div>
                <p className="text-gray-500 
                text-2xl sm:text-3xl md:text-5xl xl:text-7xl">Main Focus/Mission Statement</p>
            </div>
            <div className="grid 
            grid-cols-1 lg:grid-cols-2 
            md:gap-5 lg:gap-10 xl:gap-20">
                <div className="grid 
                grid-cols-3 lg:grid-cols-2 items-center">
                    <img src="/home/statementOne.png" className="px-10"></img>
                    <p className="col-span-2 lg:col-span-1
                    md:text-lg xl:text-xl text-left py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </div>
                <div className="grid 
                grid-cols-3 lg:grid-cols-2 items-center">
                    <img src="/home/statementTwo.png" className="px-10"></img>
                    <p className="col-span-2 lg:col-span-1
                    md:text-lg xl:text-xl text-left py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </div>
            </div>
        </div>
    );
}