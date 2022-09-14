import React from "react";
import "./styles.css";

interface IProduct {
  imgSrc: string;
  name: string;
  description: string[];
}

const Product = (props: IProduct) => {
  return (
    <div className="wrapper">
      <img src={props.imgSrc} className="product-image" />
      <h3>{props.name}</h3>
      <p>{props.description[0]}</p>
      <p>{props.description[1]}</p>
    </div>
  );
};
export default Product;
