import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Card.css"

export function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dogs")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card-dog">
          <img src={item.image} alt={item.name} width="340px" height="290px"/>
          <h2>{item.name}</h2>
          <p className="p-weight">Weight: {item.weight}</p>
          <p>Life Span: {item.life_span}</p>
        </div>
      ))}
    </div>
  );
}

