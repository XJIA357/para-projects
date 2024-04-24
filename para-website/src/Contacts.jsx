import React from "react";
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

export default function Contacts(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="container mx-auto p-10 grid grid-cols-1 lg:grid-cols-5 justify-between">
            <div className="lg:col-span-2 flex flex-col items-start justify-between pr-10">
                <p className="text-gray-500 text-left
                text-2xl sm:text-4xl xl:text-6xl">Contact</p>
                <p className="text-black font-bold text-left pb-5
                text-2xl sm:text-4xl xl:text-6xl">Information</p>
                <div className="lg:hidden">
                    <img src="/contacts/contacts.jpg"></img>
                </div>
                <p className="font-bold py-5 text-orange-500
                text-xl lg:text-2xl xl:text-3xl">Para Projects Limited</p>
                {/* <p className="text-left">Address: 00 Sample Street, District, Auckland 1234</p> */}
                <p>Phone: +64 29 776 8777</p>
                <p>Email: info.paraprojects@gmail.com</p>
                <HashLink to="/home#contact-section" smooth>
                    <button className="bg-gray-900 text-gray-100 uppercase 
                    lg:px-8 xl:px-10 
                    lg:py-4 xl:py-5 mt-10 rounded-none tracking-wider hover:bg-white hover:text-black hover:border-black">  
                        contact us
                    </button>
                </HashLink>
            </div>
            <div className="lg:col-span-3 hidden lg:block">
                <img src="/contacts/contacts.jpg"></img>
            </div>
        </div>
    )
}