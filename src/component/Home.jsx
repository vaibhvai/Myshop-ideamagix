import React from "react";
import { CartState } from "../context/Context";
import SingleComponent from "./SingleComponent";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products, "lllllllllllllllllllll0000kkkk");
  return (
    <div
      className="home"
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      <Filters />
      <div
        className="productCotainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "23px",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((prod) => {
          return <SingleComponent prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
