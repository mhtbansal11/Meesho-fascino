import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDetails from "./productDetails";

const Product = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let r = await axios.get(
      "https://dark-gray-alligator-kit.cyclic.app/products"
    );
    setData(r.data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div
      style={{
        width:"80%",
        margin:"auto",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "20px",
      }}
    >
      {data.slice(0,25).map((el) => {
        return (
          <div>
            <CardDetails key={el._id} {...el} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
