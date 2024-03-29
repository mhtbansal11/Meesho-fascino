import React from "react";
import { Link } from "react-router-dom";
const ProductDetails = ({ rating, strike_price, title, type, images, _id }) => {
  return (
   <Link to={`/productpage/${_id}`}> <div
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
          fontWeight: "bold",
        }}
      >
        {title}
      </h1>
      <p style={{color:"green"}}>Price : {strike_price}/-</p>
      <p> Rating : {rating}</p>
      <p>{type}</p>
      <button style={{color:"white",backgroundColor:"green",width:"100px", borderRadius:"10px"}}>Buy Now</button>
    </div>
    </Link>
  );
};

export default ProductDetails;
