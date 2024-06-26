import React from "react";
import WhiteButton from "../tools/WhiteButton";

export default function SampleProject({name, imageupi, index}){
    const projectDetailUrl = `/projects/${encodeURIComponent(index)}`;

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-5 py-8">
            <img src={imageupi} className="lg:col-span-3 
            h-auto 
            w-full"></img>
            <div className="lg:col-span-2 flex flex-col items-start justify-evenly bg-gray-100 
            p-5 xl:p-10">
                <p className="text-gray-500 text-left
                text-2xl sm:text-lg md:text-2xl xl:text-4xl">{name}</p>
                <a href={projectDetailUrl}>
                    <WhiteButton buttonText={"view more →"} />
                </a>
            </div>
        </div>
    );
}