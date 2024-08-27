import React, { useState, useEffect } from "react";
import WhiteButton from "./tools/WhiteButton";
import SampleProject from "./projects/SampleProject";

export default function Projects() {
    const allProjects = [
        { name: "Project Scott Point", imageupi: "/home/homeProjectRealOne.jpg", index: 1, type: "construction" },
        { name: "Project Hudson Bay", imageupi: "/home/home-sample-one.png", index: 2, type: "construction" },
        { name: "Project Falcon Green", imageupi: "/projects/falcon-green-cover.jpg", index: 3, type: "construction" },
        { name: "Project Henderson Apartment", imageupi: "/projects/henderson-apartment-cover.jpg", index: 4, type: "construction" },
        { name: "Project Edgewater Terraced-house (Under Construction)", imageupi: "/projects/edgewater-terraced-house.jpg", index: 5, type: "construction" },
        { name: "Commercial Fitout", imageupi: "/projects/commercial-fitout-four.jpg", index: 6, type: "fitout" },
        { name: "Office Fitout", imageupi: "/projects/office-fitout-one.jpg", index: 7, type: "fitout" },
        { name: "Shop Fitting", imageupi: "/projects/shop-fitout-one.jpg", index: 8, type: "fitout" }
    ];

    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(0);

    const filteredProjects = () => {
        if (filter === "all") return allProjects;
        return allProjects.filter(project => project.type === filter);
    };

    const totalPages = Math.ceil(filteredProjects().length / 3);

    const [visibleProjects, setVisibleProjects] = useState(filteredProjects().slice(0, 3));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setVisibleProjects(filteredProjects().slice(currentPage * 3, (currentPage * 3) + 3));
    }, [filter, currentPage]);

    const handleNextButtonClick = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    const handlePreviousButtonClick = () => {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };

    const applyFilter = (filter) => {
        setFilter(filter);
        setCurrentPage(0);
    };

    return (
        <div className="container mx-auto p-10">
            <p className="text-gray-500 text-left text-2xl md:text-4xl xl:text-6xl">Our</p>
            <p className="text-black font-bold text-left pb-10 text-2xl md:text-4xl xl:text-6xl">Projects</p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pb-6">
                <button
                    className={`flex-grow min-w-[100px] py-2 px-4 tracking-wider uppercase ${
                        filter === "all" ? "bg-black text-white" : "bg-gray-700 text-white hover:bg-black hover:text-white"
                    }`}
                    onClick={() => applyFilter("all")}
                >
                    All
                </button>
                <button
                    className={`flex-grow min-w-[100px] py-2 px-4 tracking-wider uppercase ${
                        filter === "construction" ? "bg-black text-white" : "bg-gray-700 text-white hover:bg-black hover:text-white"
                    }`}
                    onClick={() => applyFilter("construction")}
                >
                    Construction
                </button>
                <button
                    className={`flex-grow min-w-[100px] py-2 px-4 tracking-wider uppercase ${
                        filter === "fitout" ? "bg-black text-white" : "bg-gray-700 text-white hover:bg-black hover:text-white"
                    }`}
                    onClick={() => applyFilter("fitout")}
                >
                    Fitout
                </button>
            </div>


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
    );
}
