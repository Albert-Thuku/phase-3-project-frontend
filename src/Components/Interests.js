import React from "react";
import { Link } from "react-router-dom";


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
            <Link to='/Home'>Back to Home</Link>
        </div>
    );
}

export default Interests;
