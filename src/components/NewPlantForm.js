import React, {useState} from "react";

function NewPlantForm({updatedPlants}) {
  const [newPlant, setNewPlant] = useState({name: '', image: '', price: 0})

function handleSubmit(e){
  e.preventDefault()
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlant)
  })
  .then(resp => resp.json())
  .then(data => updatedPlants(data))
}

function handleChange(e){
  setNewPlant({...newPlant,
    [e.target.name]:e.target.value
  })
}



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input  onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
