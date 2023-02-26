import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleproductPage = () => {
  const [data, setData] = useState({});
  const { _id } = useParams();
  console.log(_id)
  const getData = async () => {
    let r = await axios.get(
      `https://hungry-loincloth-calf.cyclic.app/users/product/${_id}`
    );
    setData(r.data);
  };
  console.log(data)
  useEffect(() => {
    getData();
  }, []);
  return <div>Single Product</div>;
};

export default SingleproductPage;
