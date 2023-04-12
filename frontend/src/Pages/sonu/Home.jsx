import React from "react";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./Navbar";
import Product from "./product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
