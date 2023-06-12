import React, { useState, useEffect } from "react";
import Destinations from "./Destinations";
import Categories from "./Categories";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";

function Home({interestedHandler}) {
  const [destinations, setDestinations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/destinations")
      .then((resp) => resp.json())
      .then((data) => {
        setDestinations(data);
      })
      .catch((err) => console.error(err));
  },[]);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) => destination.category === selectedCategory)
    : destinations;

  function handleUserInterest(destination){
    interestedHandler(destination)
  }

  return (
    <>
      <section id="navbar-sec">
        <NavBar />
        <AppRoutes />
      </section>
      <div id="main-page">        
        <section id="cahttp://127.0.0.1:8000tegory-sec">
          <Categories data={destinations} onCategorySelect={handleCategorySelect} />
        </section>
        <section id="destinations-sec">
          <Destinations data={filteredDestinations} userInterest={handleUserInterest} />
        </section>
      </div>
    </>
  );
}

export default Home;