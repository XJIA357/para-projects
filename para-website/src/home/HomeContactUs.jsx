import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeContactUs (){
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [message, setMessage] = useState({
        name: '',
        phone: '',
        email: '',
        interest: '',
        content: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMessage((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try{
            console.log(message);
            const response = await fetch('https://i1dxby671c.execute-api.ap-southeast-2.amazonaws.com/prod/contact',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true); 

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            } else {
                setErrorMessage(data.message || 'An unexpected error occurred.');
            }

        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(error.message || 'An error occurred while trying to send message. Please try again or contact us through phone or email directly.'); 
        }
        
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
                        <input type="text" name="name" placeholder="Name" className="w-full px-4 py-2 bg-gray-100" value={message.name} onChange={handleChange} />
                        <input type="tel" name="phone" placeholder="Phone Number*" className="w-full px-4 py-2 bg-gray-100" value={message.phone} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="E-mail*" className="w-full px-4 py-2 bg-gray-100" value={message.email} onChange={handleChange} required />
                        <input type="text" name="interest" placeholder="Interested In" className="w-full px-4 py-2 bg-gray-100" value={message.interest} onChange={handleChange} />
                        <textarea name="content" placeholder="Message*" className="w-full flex-1 px-4 py-2 bg-gray-100" value={message.content} onChange={handleChange} required></textarea>
                    </div>
                    <img src="/home/contact-us.png" className="lg:col-span-3 items-center"></img>
                </div>
                <button type="submit" className="bg-gray-900 text-gray-100 uppercase 
                px-10 py-5 mt-10 rounded-none tracking-wider 
                sm:text-xs md:text-sm xl:text-lg
                hover:bg-white hover:text-black hover:border-black">Send Email →</button>
                {successMessage}
                {errorMessage && <div className="text-red-500 mt-3">{errorMessage}</div>}
            </form>
        </div>
    );
}