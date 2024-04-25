import React from "react";

export default function WhiteButton({buttonText}){
    return (
        <button className="mt-5
        sm:py-3 md:py-5 
        sm:px-2 md:px-10  
        text-black tracking-wider uppercase 
        sm:text-xs md:text-sm lg:text-base
        hover:bg-black hover:text-white hover:border-white">{buttonText}</button>
    );
}