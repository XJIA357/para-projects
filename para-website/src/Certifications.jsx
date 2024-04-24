import React from "react";
import { useEffect } from 'react';

export default function Certifications(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Company</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Certifications</p>
            <div className="border-t-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
                <div className="flex flex-col items-center justify-center">
                    <img src="/certifications/lbp.jpeg" className="object-contain h-48 w-full"></img>
                    <p className="text-black font-bold pt-10 lg:text-xl xl:text-2xl">Licensed Building Practitioners (LBP)</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/certifications/stamford-Insurance.webp" className="object-contain h-48 w-full"></img>
                    <p className="text-black font-bold pt-10 lg:text-xl xl:text-2xl">10-year Building Warranty Insurance</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/certifications/site-safe.png" className="object-contain h-48 w-full"></img>
                    <p className="text-black font-bold pt-10 lg:text-xl xl:text-2xl">Site Safe Member</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/certifications/NZIQS.png" className="object-contain h-48 w-full"></img>
                    <p className="text-black font-bold pt-10 lg:text-xl xl:text-2xl">NZIQS Member</p>
                </div>
            </div>

        </div>
    )
}