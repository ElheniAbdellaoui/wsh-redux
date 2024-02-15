import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodCard = ({ el }) => {
  console.log(el);
  return (
    <div>
      <Card style={{ width: "18rem", margin: "25px", backgroundColor: "pink" }}>
        <Card.Img variant="top" src={el.food.image} />
        <Card.Body>
          <Card.Title>{el.food.label}</Card.Title>
          <Card.Text></Card.Text>
          <Link to={`/data/${el.food.foodId}`}>
            <Button variant="primary">Get details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
