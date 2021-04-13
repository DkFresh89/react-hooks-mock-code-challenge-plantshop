import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  

  useEffect(() => {
    
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))

  }, [])

  function updatedPlants(newPlant){
    setPlants([...plants, newPlant])
  }

  const searchedPlants = plants.filter(plant => {
    return plant.name.includes(search)
  })

  return (
    <main>
      <NewPlantForm updatedPlants={updatedPlants}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
