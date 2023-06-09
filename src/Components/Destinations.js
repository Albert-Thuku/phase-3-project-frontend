import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations({data, userInterest}){

    function interestAdd(destination){
        userInterest(destination)
    }

    return(
        < div id="destinations-div">
            <DestinationCard data={data} onInterested={interestAdd}/>
        </div>
    );
}

export default Destinations