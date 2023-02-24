import React from "react";

const ProductDetails = ({ rating, strike_price, title, type, images }) => {
  return (
    <div
      style={{
        border: "1px solid ",
        textAlign: "center",
      }}
    >
      <img
        style={{
          marginLeft: "10%",
        }}
        src={images[0]}
        alt=""
      />
      <h1
        style={{
          fontSize: "20px",
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
