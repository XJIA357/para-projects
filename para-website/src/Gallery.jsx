import React from "react";
import ImageCarousel from "./tools/ImageCarousel";
import { useEffect } from 'react';

export default function Gallery(){
    const images = [
        '/gallery/gallery-one.png',
        '/gallery/gallery-two.png',
        '/gallery/gallery-three.png',
        '/gallery/gallery-four.png',
        '/gallery/gallery-five.png',
        '/gallery/gallery-six.png',
        '/gallery/gallery-seven.png',
        '/gallery/gallery-eight.png',
        '/gallery/gallery-nine.png',
        '/gallery/gallery-ten.png',
        '/gallery/gallery-one.png',
        '/gallery/gallery-two.png',
        '/gallery/gallery-three.png',
        '/gallery/gallery-four.png',
        '/gallery/gallery-five.png',
        '/gallery/gallery-six.png',
        '/gallery/gallery-seven.png',
        '/gallery/gallery-eight.png',
        '/gallery/gallery-nine.png'
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Photo</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Gallery</p>
            <div className="py-5 border-t-2 hidden lg:block">
                <ImageCarousel 
                    images={images}
                    slidesToShow={5}
                    slidesToScroll={5}
                    rows={2}
                />
            </div>
            <div className="py-5 border-t-2 hidden md:block lg:hidden">
                <ImageCarousel 
                    images={images}
                    slidesToShow={4}
                    slidesToScroll={4}
                    rows={2}
                />
            </div>
            <div className="py-5 border-t-2 hidden sm:block md:hidden">
                <ImageCarousel 
                    images={images}
                    slidesToShow={3}
                    slidesToScroll={3}
                    rows={2}
                />
            </div>
            <div className="py-5 border-t-2 sm:hidden">
                <ImageCarousel 
                    images={images}
                    slidesToShow={1}
                    slidesToScroll={1}
                    rows={1}
                />
            </div>
        </div>
    )
}