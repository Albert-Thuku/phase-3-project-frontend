import React from "react";


function Interests({data}){


    return(
        <div id="interest-list-div">
            {data.map((destination)=>{
                return(
                    <div className="interest-card" key={destination.id}>
                        <img src={destination.image} alt={destination.name} />
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                        <p>Location: {destination.location}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Interests;
