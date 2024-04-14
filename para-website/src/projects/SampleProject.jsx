import React from "react";
import WhiteButton from "../tools/WhiteButton";

export default function SampleProject({name, imageupi, description}){
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-7 py-8">
            <img src={imageupi} className="lg:col-span-4"></img>
            <div className="lg:col-span-3 flex flex-col items-start justify-evenly bg-gray-100 
            p-5 xl:p-10">
                <p className="text-gray-500
                text-2xl sm:text-lg md:text-2xl xl:text-4xl">{name}</p>
                <p className="text-left xl:py-10
                lg:text-sm xl:text-base">{description}</p>
                <WhiteButton buttonText = {"view more →"} />
            </div>
        </div>
    );
}