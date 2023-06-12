import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Admin(){

    const [destinationData, setDestinationData] = useState({
        name:'',
        image:'',
        description:'',
        category:'',
        location:'',
        visit_url:''
    })

    function handleInputChange(e){
        setDestinationData({...destinationData, [e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(destinationData){
            fetch('http://127.0.0.1:8000/update/destinations',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(destinationData)
            }).then(resp=>resp.json()).then(data=>console.log(data)).catch(err=>console.error(err))
        }
    }

    const {name, image, description, category, location, visit_url} = destinationData;

    return(
        <div id="add-destination-div">
            <header>Add Destination</header>
            <form onSubmit={handleSubmit} id="add-destination-form">
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                name="name"
                value={name}
                placeholder="Insert destination name"
                required
                onChange={handleInputChange}
                />
                <label htmlFor="image">Image URL:</label>
                <input 
                type="url"
                name="image"
                value={image}
                placeholder="Insert image URL"
                required
                onChange={handleInputChange}
                />
                <label htmlFor="description">Description:</label>
                <input 
                type="text"
                name="description"
                value={description}
                placeholder="Insert short description"
                required
                onChange={handleInputChange} 
                />
                <label htmlFor="category">Category:</label>
                <input 
                type="text"
                name="category"
                value={category}
                placeholder="Insert category"
                required
                onChange={handleInputChange} 
                />
                <label htmlFor="location">Location:</label>
                <input 
                type="text"
                name="location"
                value={location}
                placeholder="Insert location"
                required
                onChange={handleInputChange} 
                />
                <label htmlFor="visit-url">Visit URL:</label>
                <input 
                type="url"
                name="visit_url"
                value={visit_url}
                placeholder="Insert visit url"
                required
                onChange={handleInputChange} 
                />
                <button type="submit">Add destination</button>
            </form>
            <Link to='/Home'>Back to Home Page</Link>
        </div>
    );
}

export default Admin;