import React, { useState } from "react";
import WhiteButton from "./tools/WhiteButton";
import SampleProject from "./projects/SampleProject";
import { useEffect } from 'react';

export default function Projects(){
    const allProjects = [
        { name: "Project Scott Point", imageupi: "/home/homeProjectRealOne.jpg", index: 1},
        { name: "Project Falcon Green", imageupi: "/projects/falcon-green-cover.jpg", index: 2},
        { name: "Project Hudson Bay", imageupi: "/projects/hubson-bay-cover.jpg", index: 3},
        { name: "Project Edgewater Terraced-house (Under Construction)", imageupi: "/projects/edgewater-terraced-house.jpg", index: 4}
    ];

    const [visibleProjects, setVisibleProjects] = useState(allProjects.slice(0, 3));
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(allProjects.length / 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNextButtonClick = () => {
        const nextPage = currentPage + 1;
        const nextProjects = allProjects.slice(nextPage * 3, (nextPage * 3) + 3);
        setVisibleProjects(nextProjects);
        setCurrentPage(nextPage);
    };

    const handlePreviousButtonClick = () => {
        const prevPage = currentPage - 1;
        const prevProjects = allProjects.slice(prevPage * 3, (prevPage * 3) + 3);
        setVisibleProjects(prevProjects);
        setCurrentPage(prevPage);
    };

    return(
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left
            text-2xl md:text-4xl xl:text-6xl">Our</p>
            <p className="text-black font-bold text-left pb-10
            text-2xl md:text-4xl xl:text-6xl">Projects</p>
            <div className="flex flex-col items-end">
                <div className="border-t-2 flex flex-col">
                    {visibleProjects.map((project) => (
                        <SampleProject 
                            key={project.name}
                            name={project.name} 
                            imageupi={project.imageupi} 
                            index={project.index}
                        />
                    ))}
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        {currentPage > 0 && (
                            <button className="py-5 px-10  text-black tracking-wider uppercase hover:bg-black hover:text-white hover:border-white" onClick={handlePreviousButtonClick}>← Previous</button>
                        )}
                    </div>
                    <div>
                        {currentPage + 1 < totalPages && (
                            <button className="py-5 px-10  text-black tracking-wider uppercase hover:bg-black hover:text-white hover:border-white" onClick={handleNextButtonClick}>Next →</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
