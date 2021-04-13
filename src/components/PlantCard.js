import React, {useState} from "react";

function PlantCard({plant}) {
  // console.log(plant);
  const {id, name, image, price} = plant
  const [stock, setStock] = useState(false)

  function handleStock(){
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!stock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
