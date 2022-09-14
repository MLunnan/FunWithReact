import React from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <h2>My React ts App</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.map((item) => (
          <Product
            imgSrc={item.imgSrc}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      {/*<Product />*/}
    </div>
  );
}

export default App;
