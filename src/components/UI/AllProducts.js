import React from "react";
import { Row } from "antd";
import Singleproduct from "./SingleProduct";

const AllProducts = ({ allproducts }) => {
  console.log("all products from all products:", allproducts);
  const feacuredProducts = allproducts.splice(0, 6);
  return (
    <Row gutter={16}>
      {" "}
      {feacuredProducts?.map((product) => (
        <Singleproduct product={product} key={product?.id}></Singleproduct>
      ))}
    </Row>
  );
};

export default AllProducts;
