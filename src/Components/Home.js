import React from "react";
import Destinations from "./Destinations";

function Home (){
    return(
        <div id="main-page">
            {/* insert header */}
            {/* insert navbar */}
            <section id="destinations-sec">
                <Destinations />
            </section>
        </div>
    );
}

export default Home;