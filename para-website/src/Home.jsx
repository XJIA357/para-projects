import React from "react";
import { Link } from "react-router-dom";
import HomeFirstProject from "./home/HomeFirstProject";
import HomeAbout from "./home/HomeAbout";
import HomeMainFocus from "./home/HomeMainFocus";
import HomeSampleProjects from "./home/HomeSampleProjects";
import HomeContactUs from "./home/HomeContactUs";

export default function Home(){

    return(
        <div className="container mx-auto p-15">
            {/* view project part */}
            <HomeFirstProject />
            <HomeAbout />
            {/* main focus/mission statement part */}
            <HomeMainFocus />
            {/* sample projects part */}
            <HomeSampleProjects />
            {/* contact us form */}
            <HomeContactUs />
        </div>
    );
}