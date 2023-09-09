import RootLayout from "@/components/Layouts/RootLayout";
import Singleproduct from "@/components/UI/SingleProduct";
import { Card, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function ProductDetailPage({ product }) {
  console.log("product:", product);
  return (
    <Row justify="center">
      <Card
        hoverable
        cover={
          <Image
            src={product.image_url}
            width={300}
            height={300}
            responsive
            alt="product image"
          ></Image>
        }
      >
        <p
          style={{
            // display: "flex",
            // justifyContent: "space-between",
            // width: "90%",
            color: "gray",
            margin: "10px 0px",
          }}
        >
          <p>Title: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>Price: {product.price}</p>
          <p>Status: {product.status}</p>
          <p>Description:{product.description}</p>
          <p>Key Features: {product.keyFeatures}</p>
          <p>
            Reviews:
            {product.Reviews?.map((review) => (
              <p key={product.id}>{review}</p>
            ))}
          </p>
        </p>
      </Card>
    </Row>
  );
}
ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/product/all-products");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      productid: product.id.toString(),
    },
  }));
  // console.log("paths:", paths);
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  // console.log("params:", context.params);
  const { productid } = context.params;
  // console.log("productid:", productid);
  const res = await fetch(
    `http://localhost:5000/product/products/${productid}`
  );
  const data = await res.json();
  return {
    props: {
      product: data?.data,
    },
  };
};
