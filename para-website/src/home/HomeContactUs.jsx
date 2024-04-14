import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeContactUs (){
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setSubmitted(true); 

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    const successMessage = submitted ? (
        <div className="text-green-500 mt-3">
            Your message has been sent successfully.
        </div>
    ) : null;

    return(
        <div id="contact-section" className="flex flex-col items-start px-10 py-10 lg:py-20">
            <p className="text-gray-500 
            text-2xl sm:text-3xl md:text-5xl xl:text-7xl">Contact Us</p>
            <form className="flex flex-col items-start py-10" onSubmit={handleSubmit}>
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-2 space-y-4 flex-1 flex flex-col">
                        <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-gray-100" />
                        <input type="tel" placeholder="Phone Number*" className="w-full px-4 py-2 bg-gray-100" required />
                        <input type="email" placeholder="E-mail*" className="w-full px-4 py-2 bg-gray-100" required />
                        <input type="text" placeholder="Interested In" className="w-full px-4 py-2 bg-gray-100" />
                        <textarea placeholder="Message*" className="w-full flex-1 px-4 py-2 bg-gray-100" required></textarea>
                    </div>
                    <img src="/home/contact-us.png" className="lg:col-span-3 items-center"></img>
                </div>
                <button type="submit" className="bg-gray-900 text-gray-100 uppercase 
                px-10 py-5 mt-10 rounded-none tracking-wider 
                sm:text-xs md:text-sm xl:text-lg
                hover:bg-white hover:text-black hover:border-black">Send Email →</button>
                {successMessage}
            </form>
        </div>
    );
}