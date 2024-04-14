import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Side effect to toggle the overflow-hidden class on the body
    useEffect(() => {
        if (isMenuOpen) {
            // Prevent scrolling by adding overflow-hidden to the body
            document.body.classList.add('overflow-hidden');
        } else {
            // Allow scrolling by removing overflow-hidden from the body
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup function to remove overflow-hidden when the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]); // This effect depends on isMenuOpen state

    return (
        <header>
            <div className="container mx-auto flex flex-row items-center justify-between py-6">
                <div className="mx-4">
                    <Link to="/home">
                        <img src="/header/para-logo.png"  className="w-64"></img>
                    </Link>
                </div>
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="focus:outline-none"
                    >
                        <img
                            src="/nav/burger-bar.png"
                            alt="Menu"
                            className="h-8 w-8"
                        />
                    </button>
                </div>
                {/* Overlay and Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-20 bg-black bg-opacity-50 sm:hidden" onClick={() => setIsMenuOpen(false)}>
                        <nav className="absolute top-0 right-0 mt-16 mr-4 bg-white shadow-lg p-6 rounded-lg w-72">
                            <ul className="flex flex-col items-end space-y-4">
                                <li>
                                    <NavLink
                                        to="/home"
                                        className={({ isActive }) => `border-gray-400 text-gray-600 px-4 hover:text-orange-500 ${
                                        isActive ? "border-b-2 border-t-2" : ""
                                        }`}
                                    >
                                        HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/gallery"
                                        className={({ isActive }) => `border-gray-400 text-gray-600 px-4 hover:text-orange-500 ${
                                        isActive ? "border-b-2 border-t-2" : ""
                                        }`}
                                    >
                                        GALLERY
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/projects"
                                        className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                        isActive ? "border-b-2 border-t-2" : ""
                                        }`}
                                    >
                                        PROJECTS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/certifications"
                                        className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                        isActive ? "border-b-2 border-t-2" : ""
                                        }`}
                                    >
                                        CERTIFICATIONS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contacts"
                                        className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                        isActive ? "border-b-2 border-t-2" : ""
                                        }`}
                                    >
                                        CONTACTS
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
                {/* Regular navbar for large screens */}
                <nav className="hidden sm:block sm:pr-0 lg:pr-20">
                    <ul className="flex flex-col sm:flex-row sm:space-x-0 lg:space-x-10 tracking-widest sm:text-xs lg:text-sm">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) => `border-gray-400 text-gray-600 px-4 hover:text-orange-500 ${
                                isActive ? "border-b-2 border-t-2" : ""
                                }`}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) => `border-gray-400 text-gray-600 px-4 hover:text-orange-500 ${
                                isActive ? "border-b-2 border-t-2" : ""
                                }`}
                            >
                                GALLERY
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                isActive ? "border-b-2 border-t-2" : ""
                                }`}
                            >
                                PROJECTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/certifications"
                                className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                isActive ? "border-b-2 border-t-2" : ""
                                }`}
                            >
                                CERTIFICATIONS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) => `border-gray-400 text-gray-600 px-3 hover:text-orange-500 ${
                                isActive ? "border-b-2 border-t-2" : ""
                                }`}
                            >
                                CONTACTS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}