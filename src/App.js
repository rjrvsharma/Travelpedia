import React, { useState } from "react";
import "./styles.css";

function App() {
  const TravelCollection = {
    SoloTravel: [
      { name: "Manali", rating: "Himachal Pradesh" },
      { name: "Leh", rating: "Ladakh" },
      { name: "Shimla", rating: "Himachal Pradesh" },
      { name: "Kutch", rating: "Gujrat" }
    ],
    "travel with family": [
      { name: "Rishikesh", rating: "Uttarakhand" },
      { name: "Meghalaya", rating: "Himachal Pradesh" },
      { name: "Bandhavgarh Park", rating: "Madhya Pradesh" },
      { name: "Mahabaleshwar", rating: "Maharashtra" }
    ],
    "Travel with friends": [
      { name: "Goa", rating: "Goa" },
      { name: "Bhangarh", rating: "Rajasthan" },
      { name: "Nainital", rating: "Uttarakhand" },
      { name: "kannur", rating: "krala" }
    ]
  };

  var cars = Object.keys(TravelCollection);

  function handlebtnClick(type) {
    setCarsToShow(type);
  }

  const [carstoShow, setCarsToShow] = useState("SoloTravel");
  return (
    <div className="App">
      <h1>TravelPedia</h1>
      <p>Traveling Categories</p>
      {cars.map((e) => (
        <button className="button" onClick={() => handlebtnClick(e)}>
          {e}
        </button>
      ))}

      <ul style={{ listStyle: "none" }}>
        {TravelCollection[carstoShow].map((car) => (
          <li>
            <div className="list-div">
              {car.name}
              <div style={{ fontSize: "smaller" }}>{car.rating}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
