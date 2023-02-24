import React from "react";

const ProductDetails = ({ rating, strike_price, title, type, images }) => {
  return (
    <div
      style={{
        height: "450px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        textAlign: "center",
        padding: "5%",
      }}
    >
      <img src={images[0]} alt="" />
      <h1
        style={{
          fontSize: "15px",
          fontWeight:"bold"
        }}
      >
        {title}
      </h1>
      <p>Price : {strike_price}</p>
      <p> Rating : {rating}</p>
      <p>{type}</p>
    </div>
  );
};

export default ProductDetails;
