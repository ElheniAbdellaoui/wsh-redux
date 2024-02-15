import React from "react";
import { useParams } from "react-router";

const FoodDetails = ({ data }) => {
  const params = useParams();
  console.log(params);
  const dataid = params.id;
  const selecteddata = data.find((el) => el.food.foodId === dataid);
  console.log(selecteddata);
  return (
    <div>
      <h1>{selecteddata.food.category}</h1>
      <h2>{selecteddata.food.categoryLabel}</h2>
      <img src={selecteddata.food.image} alt="pizza" />
      <p>nutrients:CHOCDF:{selecteddata.food.nutrients.CHOCDF}</p>
      <img src={selecteddata.food.uri} alt="" />
    </div>
  );
};

export default FoodDetails;
