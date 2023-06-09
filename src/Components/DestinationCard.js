import React, { useState } from "react";
import EditDestination from "./EditDestination";

function DestinationCard({ data }) {
  const [editId, setEditId] = useState(null);

  const handleEdit = (event, destination) => {
    event.preventDefault();
    setEditId(destination.id);
  };

  const handleSaveEdit = (updatedDestination) => {
    const id = updatedDestination.id;

    fetch(`http://127.0.0.1:8000/update/destination/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDestination),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Destination updated successfully");
          setEditId(null);
        } else {
          console.error("Failed to update destination:", response.status);
        }
      })
      .catch((error) => {
        console.error("Failed to update destination:", error);
      });
    console.log("Destination updated:", updatedDestination);
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const handleDelete = (event, id) => {
    event.preventDefault();

    fetch(`http://127.0.0.1:8000/delete/destinations/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to delete destination:", response.status);
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        console.error("Failed to delete destination:", error);
      });
  };

  return (
    <div className="destination-card">
      {data.map((destination) => (
        <div key={destination.id} className="card">
          <img src={destination.image} alt={destination.name} />
          <div>
            {editId === destination.id ? (
              <EditDestination
                destination={destination}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <h2>{destination.name}</h2>
                <p>{destination.description}</p>
                <p>Location: {destination.location}</p>
                <br />
                <button onClick={(event) => handleEdit(event, destination)}>
                  Edit
                </button>
                <button onClick={(event) => handleDelete(event, destination.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationCard;
