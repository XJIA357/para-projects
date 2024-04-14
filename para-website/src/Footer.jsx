import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-gray-900 p-10 text-gray-100">
            <div className="container mx-auto flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-4 items-start justify-between 
            sm:gap-2 md:gap-5 lg:gap-10  
            lg:pr-10 xl:pr-40">
                <div className="hidden sm:block">
                    <img src="footer/para-icon.jpg"></img>
                </div>
                <div className="flex flex-col items-start sm:space-y-4">
                    <p className="font-bold">Information</p>
                    <NavLink to="/home" className="text-gray-100 text-sm hover:text-orange-500">Home</NavLink>
                    <NavLink to="/gallery" className="text-gray-100 text-sm hover:text-orange-500">Gallery</NavLink>
                    <NavLink to="/projects" className="text-gray-100 text-sm hover:text-orange-500">Projects</NavLink>
                    <NavLink to="/certifications" className="text-gray-100 text-sm hover:text-orange-500">Certifications</NavLink>
                    <NavLink to="/contacts" className="text-gray-100 text-sm hover:text-orange-500">Contacts</NavLink>
                </div>
                <div className="flex flex-col items-start sm:space-y-4">
                    <p className="font-bold">Contacts</p>
                    <div className="flex flex-row items-center 
                    sm:space-x-0 md:space-x-4">
                        <img src="/footer/address.png" width="24" height="27"></img>
                        <p className="text-sm text-left">00 Sample Street, District, Auckland 1234</p>
                    </div>
                    <div className="flex flex-row items-center
                    sm:space-x-0 md:space-x-4">
                        <img src="/footer/phone.png" width="24" height="27"></img>
                        <p className="text-sm">000 0000 0000</p>
                    </div>
                    <div className="flex flex-row items-center
                    sm:space-x-0 md:space-x-4">
                        <img src="/footer/email.png" width="24" height="27"></img>
                        <p className="text-sm">sampleemail@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col items-start sm:space-y-4">
                    <p className="font-bold">Social Media</p>
                    <div className="flex flex-row items-center 
                    sm:space-x-3 md:space-x-6">
                        <img src="/footer/facebook.png" width="24" height="27"></img>
                        <img src="/footer/tweet.png" width="24" height="27"></img>
                        <img src="/footer/ins.png" width="24" height="27"></img>
                        <img src="/footer/Pinterest.png" width="24" height="27"></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}