import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations({data}){
    return(
        < div id="destinations-div">
            <DestinationCard data={data} />
        </div>
    );
}

export default Destinations