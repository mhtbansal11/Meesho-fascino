import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [data, setData] = useState([]);
  // const getData = async () => {
  //   let r = await axios.get(
  //     "https://hungry-loincloth-calf.cyclic.app/users/products/filter"
  //   );
  //   setData(r.data);
  // };
  const getData = async () => {
    try {
      let r =await fetch(
        `https://hungry-loincloth-calf.cyclic.app/users/products/filter`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify(),
        }
      );
      let d = await r.json();
      setData(d)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //   console.log(data);
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "20px",
      }}
    >
      {data.map((el) => {
        return (
          <Link to={`/productPage/${el._id}`}>
            <div
              key={el._id}
              style={{
                height: "450px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                textAlign: "center",
                padding: "5%",
              }}
            >
              <img src={el.images[1]} alt="" />
              <h1
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {el.title}
              </h1>
              <p>Price : {el.strike_price}</p>
              <p> Rating : {el.rating}</p>
              <p>{el.type}</p>
              <button
                style={{
                  background: "red",
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductPage;
