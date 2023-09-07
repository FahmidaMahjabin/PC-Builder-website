import React from "react";
import { Row } from "antd";
import Singleproduct from "./SingleProduct";

const AllProducts = ({ allproducts }) => {
  // console.log("all products from all products:", allproducts);
  // const featuredProducts = allproducts.splice(0, 6);
  // console.log("featuredProducts:", featuredProducts);
  return (
    <Row gutter={16}>
      {allproducts?.map((product) => (
        <Singleproduct product={product} key={product?.id}></Singleproduct>
      ))}
    </Row>
  );
};

export default AllProducts;
